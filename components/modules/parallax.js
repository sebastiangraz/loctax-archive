import React, {
  useRef,
  useReducer,
  useEffect,
  useState,
  memo,
  useCallback,
} from "react";
import debounce from "lodash.debounce";
import {
  motion,
  useViewportScroll,
  transform,
  useSpring,
  useMotionValue,
  LayoutGroup,
} from "framer-motion";

import { useResponsiveValue } from "@theme-ui/match-media";
import { ParallaxCard } from "../parallaxCard";
import { Flex, Themed } from "theme-ui";
import { Reveal } from "../reveal";
import { useInView } from "react-cool-inview";

const Parallax = memo(({ data = {} }) => {
  const settings = {
    springOptions: {
      damping: 12,
      mass: 0.1,
    },
  };

  const [state, setCalc] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      totalChildHeight: 1000 * data.parallaxContainer.length,
      windowHeight: 0,
      windowWidth: 0,
      elDistanceToTop: 0,
      elHeight: 0,
      elWidth: 0,
      totalChildWidth: 0,
      childWidthArray: [],
      childHeightArray: [],
    }
  );

  const {
    totalChildHeight,
    windowHeight,
    elDistanceToTop,
    elHeight,
    elWidth,
    totalChildWidth,
    childWidthArray,
    childHeightArray,
  } = state;

  const { parallaxContainer, header } = data;

  const length = parallaxContainer.length;
  const ref = useRef();
  const ghostRef = useRef();
  const { scrollY } = useViewportScroll();
  const x = useMotionValue(0);
  const motionActive = useMotionValue(false);
  const xSpring = useSpring(x, settings.springOptions);

  const gapSize = 56;
  const gap = 100 / (1288 / gapSize);
  const gapmath = (size) => -gap / (12 / size) + gap;
  const gapPercentageAsPixels = (gap * elWidth) / 100;

  const calcColumnSum = parallaxContainer.reduce((curr, prev) => {
    let total = curr + prev?.sizes;
    return total;
  }, 0);
  const columnCountEqualTo12 = calcColumnSum === 12;
  const isSolo = length === 1;

  const [index, setIndex] = useState([]);

  const { observe, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.classList.add("add-snap");
    } else {
      document.documentElement.classList.remove("add-snap");
    }
  }, [inView]);

  useEffect(() => {
    const el = ref && ref.current;
    const elChild = el.querySelector(".inner-container");

    const onResize = debounce(() => {
      let widtharr = [];
      let heightarr = [];
      const childWidthArray = widtharr;
      const childHeightArray = heightarr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;
      const elWidth = el.getBoundingClientRect().width;
      const elChildWidth = elChild.getBoundingClientRect().width;

      const totalChildWidth = [...elChild.children].reduce((acc, current) => {
        widtharr.push(acc);
        const { width } = current.getBoundingClientRect();
        return acc + width + gapPercentageAsPixels;
      }, 0);

      const totalChildHeight = [...elChild.children].reduce((acc, current) => {
        heightarr.push(acc);
        const { height } = current.getBoundingClientRect();
        return acc + height;
      }, 0);

      setCalc({
        totalChildHeight: totalChildHeight,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        elDistanceToTop: elDistanceToTop,
        elHeight: elHeight,
        elWidth: elWidth,
        elChildWidth: elChildWidth,
        totalChildWidth: totalChildWidth,
        childWidthArray: childWidthArray,
        childHeightArray: childHeightArray,
      });
    }, 300);

    document.fonts.ready.then(() => onResize());
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // add extra deps like inView, gapPercentageAsPixels, length, windowHeight to help with getting the correct values as things load
  }, [gapPercentageAsPixels, length, windowHeight]);

  useEffect(() => {
    const transformX = -(totalChildWidth - gapPercentageAsPixels) + elWidth;
    const el = ref && ref.current;
    function updateX() {
      const move = transform(
        -el.getBoundingClientRect().top,
        [0, elHeight - windowHeight],
        [0, transformX]
      );
      x.set(move);
    }

    function getIndex() {
      const progress = transform(
        -el.getBoundingClientRect().top,
        [0, elHeight - windowHeight],
        [0.25, 0.75]
      );
      const threshold = progress * elWidth;
      const val = childWidthArray.map((e, i) => {
        let getIndex = false;
        if (-e + threshold >= x.get()) {
          getIndex = true;
        }
        if (-childWidthArray[i + 1] + threshold >= x.get()) {
          getIndex = false;
        }
        return getIndex;
      });
      motionActive.set(val);
    }

    const unSubGetIndexFromScroll = scrollY.onChange(getIndex);
    const unsubscribeX = scrollY.onChange(updateX);
    return () => {
      unSubGetIndexFromScroll();
      unsubscribeX();
    };
  }, [
    childWidthArray,
    elDistanceToTop,
    elHeight,
    elWidth,
    gapPercentageAsPixels,
    motionActive,
    scrollY,
    totalChildWidth,
    windowHeight,
    x,
  ]);

  useEffect(() => {
    function indexChange(value) {
      parallaxContainer.map((e, i) => {
        value[i] && setIndex(i);
      });
    }

    const unsubIndexChange = motionActive.onChange((value) =>
      indexChange(value)
    );

    return () => {
      unsubIndexChange();
    };
  }, [parallaxContainer, motionActive]);

  useEffect(() => setIndex(0), []);

  const handleClick = useCallback(
    (i) => () => {
      async function scrollToPosition(container, position) {
        let resolveFn, scrollListener, timeoutId;

        const promise = new Promise((resolve) => {
          resolveFn = resolve;
        });

        const finished = () => {
          setIndex(i);
          container.removeEventListener("scroll", scrollListener);
          resolveFn();
        };

        scrollListener = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(finished, 10);
        };

        container.addEventListener("scroll", scrollListener);
        position.scrollIntoView({
          behavior: "smooth",
        });

        return promise;
      }

      let el = ghostRef && ghostRef.current;
      return scrollToPosition(window, el.childNodes[i]);
    },
    []
  );

  const explicitWidths = parallaxContainer.map((e) => {
    const val = (100 * e.sizes) / 12 - gapmath(e.sizes);
    return `${val}%`;
  });

  const style = {
    container: {
      height: `${totalChildHeight}px`,
      ...(columnCountEqualTo12 && {
        height: "100%",
      }),
      ...(isSolo && {
        height: "100%",
      }),
      position: "relative",
      variant: "layout.row",
      display: ["grid", "inherit"],
      mb: ["0", 0],
    },
    innerContainer: {
      gridArea: ["-1/1", "unset"],
      display: ["block", "grid"],
      gridAutoFlow: "column",
      gridAutoColumns: useResponsiveValue([
        "100%",
        "100%",
        explicitWidths.join(" "),
      ]),
      position:
        isSolo || columnCountEqualTo12 ? "relative" : ["relative", "sticky"],
      top: "0px",
      bottom: "0px",
      columnGap: `${gap}%`,
      width: isSolo && "100%",
    },
  };

  function sanitise(x) {
    if (isNaN(x)) {
      return 0;
    }
    return x;
  }

  return (
    <section
      sx={{
        position: "relative",
        contain: "layout",
        maxWidth: `calc(100vw)`,
      }}
    >
      <div sx={style.container} ref={ref}>
        <div
          ref={observe}
          sx={{
            position: ["sticky"],
            gridArea: ["-1/1", "unset"],
            height: ["calc(100vh - 5rem)", "auto"],
            top: ["5rem", 0],
            paddingBottom: ["0", "100vh"],
            pointerEvents: "none",

            zIndex: 10,
          }}
        >
          <Flex
            sx={{
              position: ["absolute"],
              width: "100%",
              top: ["0px", "12.5vh"],
              pb: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              background: ["background", "transparent"],
              justifyContent: ["space-between", null, "flex-start"],
            }}
          >
            <Themed.h1
              sx={{
                pr: 3,
                my: "1rem",
                maxWidth: "32rem",
              }}
            >
              <Reveal>{header ? header : "Features"}</Reveal>
            </Themed.h1>

            <Reveal delay={0.2} sx={{ display: "flex", flexWrap: "wrap" }}>
              {parallaxContainer.map((e, i) => {
                return (
                  e.title && (
                    <div
                      key={e.id}
                      sx={{
                        pointerEvents: "all",
                        mr: ["0.25rem", "0.5rem"],
                        display: "grid",
                        position: "relative",
                      }}
                    >
                      <LayoutGroup id={data._key}>
                        {i === index && (
                          <motion.div
                            style={{
                              pointerEvents: "none",
                              borderRadius: "20px",
                              boxShadow: `0 0 0 1px var(--theme-ui-colors-text)`,
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: "100%",
                              zIndex: 1,
                            }}
                            sx={{ height: ["24px", "28px"] }}
                            layoutId="outline"
                            transition={{ type: "spring", bounce: 0.12 }}
                          />
                        )}
                      </LayoutGroup>
                      <button
                        sx={{
                          all: "unset",
                          fontSize: ["13px", "inherit"],
                          cursor: "pointer",
                          height: ["24px", "28px"],
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: [500, "inherit"],
                          padding: ["0 0.25rem", "0 0.5rem"],
                          whiteSpace: "pre",
                          borderRadius: "small",
                          "&:hover, &:focus-visible": {
                            boxShadow: "0 0 0 1px rgba(0,0,0,0.2)",
                          },
                        }}
                        onClick={handleClick(i)}
                      >
                        <span
                          sx={{
                            maxWidth: "80vw",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {e.title}
                        </span>
                      </button>
                    </div>
                  )
                );
              })}
            </Reveal>
          </Flex>
        </div>

        <motion.div
          className="inner-container"
          sx={style.innerContainer}
          style={{
            x: useResponsiveValue([0, xSpring]),
          }}
        >
          {parallaxContainer.map((e, i) => {
            isSolo ? (e.sizes = 12) : e.sizes;
            return (
              <ParallaxCard
                onClick={handleClick(i)}
                gapWidth={56}
                data={e}
                key={e.id}
                active={index === i}
                index={i}
                isSolo={isSolo}
                columnCountEqualTo12={columnCountEqualTo12}
              />
            );
          })}
        </motion.div>

        <div
          ref={ghostRef}
          className="g-g-g-g-ghost-container"
          sx={{
            userSelect: "none",
            pointerEvents: "none",
            position: "relative",
            display: "contents",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            flexDirection: "column",
          }}
        >
          {parallaxContainer.map((e, i) => {
            const index = i;
            const lastIndex = Math.max(length - 1, index);
            const isLastIndex = lastIndex === index;
            const lastItemTernary = isLastIndex
              ? childWidthArray[lastIndex]
              : totalChildWidth - gapPercentageAsPixels - elWidth;
            const ratioFormula = (elHeight - windowHeight) / lastItemTernary;

            return (
              <div
                className="g-g-g-g-ghost-div"
                style={{
                  top: sanitise(childWidthArray[i]) * sanitise(ratioFormula),
                }}
                id={`${e.id}`}
                sx={{
                  width: "100%",
                  position: "absolute",
                  height: "0px",
                  // This is to prevent first and last card from
                  // snapping immediately when positioned at the top or bottom
                  ...(totalChildWidth && {
                    scrollSnapAlign: isLastIndex
                      ? "unset"
                      : "start" && i === 0
                      ? "unset"
                      : "start",
                  }),
                }}
                key={e.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
});

Parallax.displayName = "Parallax";

export default Parallax;
