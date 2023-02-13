/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import cx from "classnames";
import { buildSrcSet, buildSrc } from "../lib/helpers";
import { useInView } from "react-cool-inview";

const style = {
  ar: {
    // overflow: "hidden",
    position: "relative",
    "&.has-fill": {
      bottom: "0px",
      left: "0px",
      right: "0px",
      top: "0px",
      position: "absolute",
    },
  },
  img: {
    position: "absolute",
    display: "block",
    height: "calc(100%)",
    left: "50%",
    opacity: "0",
    top: "50%",
    transform: "translate3d(-50%,-50%,0)",
    transition: "opacity .4s linear",
    width: "calc(100%)",
    zIndex: "1",
    "&.is-loaded": {
      opacity: 1,
    },
    "&.object-cover": {
      objectFit: "cover",
    },
    "&.object-contain": {
      objectFit: "contain",
      objectPosition: "0 0",
    },
  },
  placeholder: {
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    width: "100%",
    // transform: "scale(1.15)",
    transition: "opacity 0s linear .4s",
    "&.is-loaded": {
      opacity: 0,
    },
    "&.object-cover": {
      objectFit: "cover",
    },
    "&.object-contain": {
      objectFit: "contain",
      objectPosition: "0 0",
    },
    img: {
      opacity: 1,
    },
  },
};

const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = "(min-width: 940px) 50vw, 100vw",
  layout = "intrinsic",
  quality = 80,
  hasPlaceholder = true,
  forceLoad,
  onLoad,
  className,
}) => {
  // trigger any onLoad callbacks
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) onLoad?.();
  }, [isLoaded, onLoad]);

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  });

  if (!photo?.asset) return null;

  // define our aspect ratio if not a background fill
  const aspect =
    typeof width === "number" && typeof height === "number"
      ? (height / width) * 100
      : 100 / (photo.customRatio || photo.aspectRatio);

  const aspectCustom =
    layout === "intrinsic" ? { paddingTop: `${aspect}%` } : null;

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  });

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  });

  // handle our image onLoad
  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }

  return (
    <figure
      className={className ? className : null}
      sx={{ m: 0, position: "relative" }}
    >
      <div
        sx={style.ar}
        className={cx("ar", {
          "has-fill": layout === "fill" || layout === "contain",
        })}
        style={aspectCustom}
      >
        <picture sx={{ display: "block", maxWidth: "100%" }}>
          <img
            ref={observe}
            sx={style.img}
            width={width}
            height={height}
            src={forceLoad || inView ? src : null}
            srcSet={forceLoad || inView ? srcset : null}
            sizes={sizes}
            decoding="async"
            onLoad={handleLoad}
            alt={photo.alt || photo.asset?.altText}
            className={cx(getSize(layout), { "is-loaded": isLoaded })}
          />
        </picture>

        {hasPlaceholder && (
          <div
            sx={style.placeholder}
            className={cx("ar--placeholder", { "is-loaded": isLoaded })}
          >
            <img
              className={getSize(layout)}
              sx={style.img}
              src={photo.lqip}
              alt=""
              role="presentation"
            />
          </div>
        )}
      </div>
    </figure>
  );
};

const getSize = (layout) => {
  switch (layout) {
    case "intrinsic":
      return "object-cover";
    case "fill":
      return "object-cover";
    case "contain":
      return "object-contain";
  }
};

export default Photo;
