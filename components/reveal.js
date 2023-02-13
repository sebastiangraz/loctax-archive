import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({
  children,
  delay,
  childDelay,
  effect,
  ease,
  parentEffect,
  duration,
  parentDuration,
  ignoreParentFade,
  repeat,
  repeatParent,
  repeatTypeLoop,
  initialInView,
  childStyle,
  ...rest
}) => {
  const [isPrinting, setIsPrinting] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("beforeprint", () => {
      setIsPrinting(true);
    });
    window.addEventListener("afterprint", () => {
      setIsPrinting(false);
    });
  }, []);

  const delayVal = delay ? delay : 0.05;
  const effectVal = React.useMemo(
    () => (effect ? effect : [{ opacity: 0 }, { opacity: 1 }]),
    [effect]
  );
  const parentEffectVal = parentEffect
    ? parentEffect
    : [{ opacity: 0 }, { opacity: 1 }];
  const durationVal = duration ? duration : 1;

  const parentVariant = {
    hidden: parentEffectVal[0],
    visible: {
      ...parentEffectVal[1],
      transition: {
        ease: ease ? ease : [0.83, 0, 0.17, 1],
        duration: parentDuration ? parentDuration : durationVal,
        delay: delayVal,
        ...(repeatParent && {
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: repeatTypeLoop ? "loop" : "reverse",
        }),
      },
    },
  };

  const childVariant = {
    hidden: effectVal[0],
    visible: (custom) => ({
      ...effectVal[1],
      transitionEnd: {
        color: "inherit",
      },
      transition: {
        ease: ease ? ease : [0.83, 0, 0.17, 1],
        duration: durationVal,
        delay:
          delayVal +
          custom *
            ((childDelay ? childDelay : 0.4) / React.Children.count(children)),
        ...(repeat && {
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: repeatTypeLoop ? "loop" : "reverse",
        }),
      },
    }),
  };

  const motionPrintChecker = {
    ...(isPrinting
      ? { initial: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
        }),
  };

  return (
    <motion.div
      whileInView="visible"
      key={isPrinting}
      {...rest}
      {...motionPrintChecker}
      variants={!ignoreParentFade && parentVariant}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <motion.div
            style={{
              willChange: "transform",
              originX: 0.5,
              originY: 0.5,
            }}
            sx={{ ...childStyle }}
            viewport={{ once: true }}
            key={i}
            custom={i}
            variants={childVariant}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default React.memo(Reveal);
