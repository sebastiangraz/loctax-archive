import { LayoutGroup, motion } from "framer-motion";
import { path } from "./heroPaths";
import { useThemeUI } from "theme-ui";
import theme from "../../../public/theme";

// const childVariant = {
//   hidden: { pathLength: 0, opacity: 0.5 },
//   visible: {
//     pathLength: 1,
//     opacity: [1, 0],
//     transition: {
//       opacity: { delay: 2, duration: 3 },
//       pathLength: { ease: [0.16, 1, 0.3, 1], duration: 2, delay: 0.5 },
//     },
//   },
// };

const childVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    let index = i ? i : 1;
    let delay = index * 0.06;
    return {
      pathLength: 1,
      opacity: [1, 0],
      transition: {
        pathLength: { duration: 1.5, delay },
        opacity: { delay: 2, duration: 3 },
      },
    };
  },
};

const intersectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.75,
      duration: 1.5,
    },
  },
};

const checkReviewTransition = {
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 4,
  type: "spring",
  duration: 3,
  delay: 4,
};

const flowVariant = {
  hidden: { "--offset": "10%", scale: 0 },
  visible: (i) => {
    let index = i ? i : 1;
    let delay = 1 + index * 2;
    return {
      "--offset": ["10%", "100%"],
      scale: [0, 1, 1, 1, 1, 0.1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: delay,
        ease: "linear",
        duration: 30,
        when: "afterChildren",
      },
    };
  },
};

const cursorCheckReviewVariant = {
  hidden: {
    y: 0,
    x: 0,
  },
  visible: {
    y: [200, 200, 120, 90, 90, 200],
    x: [-180, -180, -170, -110, -110, -180],
    transition: checkReviewTransition,
  },
};

const fadeInVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i) => {
    let index = i ? i : 1;
    let delay = index * 0.2;
    return {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1 + delay,
        duration: 4,
        bounce: 0.3,
        type: "spring",
      },
    };
  },
};

const notificationVariant = {
  hidden: {
    y: -8,
    opacity: 0,
  },
  visible: {
    y: [8, 0, 0, 0, -8],
    opacity: [0, 1, 1, 1, 0],
    transition: checkReviewTransition,
  },
};

const cursorLiquidateVariant = {
  hidden: {
    y: 0,
    x: 0,
  },
  visible: {
    y: [170, 100, 170, 170, 170, 170],
    x: [0, -100, -100, -100, 0, 0],
    transition: { ...checkReviewTransition, delay: 7, repeatDelay: 14 },
  },
};

const liquidateVariant = {
  hidden: {
    y: -8,
    opacity: 0,
  },
  visible: {
    y: [8, 0, 0, 0, -8, -8],
    opacity: [0, 0, 1, 1, 0, 0],
    transition: {
      ...checkReviewTransition,
      delay: 7,
      repeatDelay: 14,
    },
  },
};

const notificationStackParentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
    },
  },
};

const notificationStackVariant = {
  visible: {
    y: [0, 0, -10, -10, -10, -10],
    opacity: [0, 0, 1, 1, 1, 0],
    transition: {
      // when: "afterChildren",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 4,
      duration: 8,
      type: "spring",
    },
  },
};

const offsiteVariant = {
  hidden: { pathLength: 0, opacity: 0.5 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      when: "afterChildren",
      delay: 2.25,
      pathLength: { type: "spring", duration: 7, bounce: 0 },
    },
  },
};

export const HeroAnimation = ({ loop, id }) => {
  const context = useThemeUI();
  switch (loop) {
    case "intersectingLines":
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 897 728"
          variants={intersectionVariant}
        >
          {/* <defs>
            <motion.linearGradient id={`${id}-heroGrad`}>
              <stop offset="0%" stopColor="black" />
              <stop offset="60%" stopColor="white" />
            </motion.linearGradient>
            <mask id={`${id}-hero`}>
              <rect width="100%" height="100%" fill={`url(#${id}-heroGrad)`} />
            </mask>
          </defs> */}

          <motion.path
            sx={{ width: "100%", height: "100%" }}
            fillRule="evenodd"
            clipRule="evenodd"
            d={path.intersections}
            fill="currentColor"
          />
        </motion.svg>
      );
    case "introPaths":
      return (
        <motion.svg
          width="896.5"
          height="727.5"
          viewBox="0 0 897 728"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={childVariant}
            custom={1}
            d="M448.5 112.5H476.5C491.964 112.5 504.5 125.036 504.5 140.5V168.5H560.5H588.5C603.964 168.5 616.5 181.036 616.5 196.5V224.5H700.5C715.964 224.5 728.5 237.036 728.5 252.5V280.5H756.5C771.964 280.5 784.5 293.036 784.5 308.5V336.5H812.5C827.964 336.5 840.5 349.036 840.5 364.5V448.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={17}
            d="M419.5 280C419.5 295.188 407.188 307.5 392 307.5C376.812 307.5 364.5 295.188 364.5 280C364.5 264.812 376.812 252.5 392 252.5C407.188 252.5 419.5 264.812 419.5 280Z"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={3}
            d="M448.5 112.5V168.5V224.5H504.5V280.5H448.5V336.5H504.5V392.5V448.5H560.5V504.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={4}
            d="M448.5 0.5V112.5H420.5C405.036 112.5 392.5 125.036 392.5 140.5V168.5H308.5C293.036 168.5 280.5 181.036 280.5 196.5V224.5H196.5C181.036 224.5 168.5 237.036 168.5 252.5V280.5H140.5C125.036 280.5 112.5 293.036 112.5 308.5V336.5V392.5V448.5V504.5H84.5C69.036 504.5 56.5 517.036 56.5 532.5V560.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={5}
            d="M392.5 168.5H504.5V224.5H560.5V280.5H616.5H672.5V336.5H784.5V392.5V392.5C799.964 392.5 812.5 405.036 812.5 420.5V448.5H840.5V476.5C840.5 491.964 853.036 504.5 868.5 504.5H897"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={6}
            d="M392.5 168.5V224.5H336.5V336.5H280.5H224.5V392.5H112.5V448.5H168.5V504.5H112.5V532.5C112.5 547.964 99.964 560.5 84.5 560.5H56.5"
            stroke="currentColor"
          />

          <motion.path
            variants={childVariant}
            custom={7}
            d="M336.5 168.5V224.5H280.5V252.5C280.5 267.964 267.964 280.5 252.5 280.5H168.5V392.5H224.5V476.5C224.5 491.964 211.964 504.5 196.5 504.5H168.5H112.5V532.5C112.5 547.964 99.964 560.5 84.5 560.5H56.5H28.5C13.036 560.5 0.5 573.036 0.5 588.5V728"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={8}
            d="M504.5 504.5V448.5H112.5V392.5H84.5C69.036 392.5 56.5 379.964 56.5 364.5V364.5C56.5 349.036 69.036 336.5 84.5 336.5H224.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={9}
            d="M448.5 224.5V280.5H336.5V336.5H280.5V476.5C280.5 491.964 293.036 504.5 308.5 504.5H672.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={10}
            d="M504.5 280.5V336.5H560.5V392.5H588.5V391.5M588.5 391.5V391.5C588.5 376.588 600.588 364.5 615.5 364.5H672.5C687.964 364.5 700.5 377.036 700.5 392.5V392.5C700.5 407.964 687.964 420.5 672.5 420.5H616.5C601.036 420.5 588.5 407.964 588.5 392.5V391.5Z"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={11}
            d="M616.5 280.5V336.5H672.5V392.5H616.5V448.5H812.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={12}
            d="M616.5 336.5V392.5H672.5V504.5H700.5C715.964 504.5 728.5 491.964 728.5 476.5V392.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={13}
            d="M280.5 392.5H308.5C323.964 392.5 336.5 405.036 336.5 420.5V504.5H392.5V448.5H448.5V504.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={14}
            d="M560.5 168.5V224.5H616.5V280.5H728.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={15}
            d="M448.5 224.5H336.5V336.5H392.5V448.5H616.5V504.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={16}
            d="M672.5 224.5V280.5H728.5V392.5H784.5"
            stroke="currentColor"
          />
          <motion.path
            variants={childVariant}
            custom={17}
            d="M504.5 280.5H560.5V392.5H392.5C377.036 392.5 364.5 379.964 364.5 364.5V336.5H448.5"
            stroke="currentColor"
          />
        </motion.svg>
      );
    case "flow-4":
      return (
        <motion.circle
          r="3"
          x="3"
          y="3"
          fill="currentColor"
          variants={flowVariant}
          custom={2}
          style={{
            offsetDistance: "var(--offset)",
            offsetRotate: "0deg",
            offsetPath: `path(
          "M448.5 112.5V168.5V224.5H504.5V280.5H448.5V336.5H504.5V392.5V448.5H560.5V504.5"
          )`,
          }}
        />
      );
    case "flow-3":
      return (
        <motion.circle
          r="3"
          x="3"
          y="3"
          fill="currentColor"
          variants={flowVariant}
          custom={4}
          style={{
            offsetDistance: "var(--offset)",
            offsetRotate: "0deg",
            offsetPath: `path("M419.5 280C419.5 295.188 407.188 307.5 392 307.5C376.812 307.5 364.5 295.188 364.5 280C364.5 264.812 376.812 252.5 392 252.5C407.188 252.5 419.5 264.812 419.5 280Z")`,
          }}
        />
      );
    case "flow-2":
      return (
        <motion.circle
          r="3"
          x="3"
          y="3"
          fill="currentColor"
          variants={flowVariant}
          custom={6}
          style={{
            offsetDistance: "var(--offset)",
            offsetRotate: "0deg",
            offsetPath: `path("M336.5 168.5V224.5H280.5V252.5C280.5 267.964 267.964 280.5 252.5 280.5H168.5V392.5H224.5V476.5C224.5 491.964 211.964 504.5 196.5 504.5H168.5H112.5V532.5C112.5 547.964 99.964 560.5 84.5 560.5H56.5H28.5C13.036 560.5 0.5 573.036 0.5 588.5V728")`,
          }}
        />
      );
    case "flow-1":
      return (
        <motion.circle
          r="3"
          x="3"
          y="3"
          fill="currentColor"
          variants={flowVariant}
          custom={8}
          style={{
            offsetDistance: "var(--offset)",
            offsetRotate: "0deg",
            offsetPath: `path("M616.5 280.5V336.5H672.5V392.5H616.5V448.5H812.5")`,
          }}
        />
      );

    case "checkReview":
      return (
        <>
          <motion.g variants={fadeInVariant}>
            <g transform="translate(190,243)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37258 0 0 5.37258 0 12V70C0 73.3137 2.68629 76 6 76H119C122.314 76 125 73.3137 125 70V6C125 2.68629 122.314 0 119 0H12ZM13 16C13 14.3431 14.3431 13 16 13H33C34.6569 13 36 14.3431 36 16V24C36 25.6569 34.6569 27 33 27H16C14.3431 27 13 25.6569 13 24V16ZM21.34 24.1C22.93 24.1 24 23.06 24 21.3V17.1C24 17.03 23.97 17 23.9 17H22.84C22.77 17 22.74 17.03 22.74 17.1V21.29C22.74 22.44 22.18 22.94 21.34 22.94C20.5 22.94 19.94 22.44 19.94 21.29V17.1C19.94 17.03 19.91 17 19.84 17H18.78C18.71 17 18.68 17.03 18.68 17.1V21.3C18.68 23.06 19.75 24.1 21.34 24.1ZM27.7097 24.1C29.3397 24.1 30.4097 23.3 30.4097 21.88C30.4097 20.77 29.2797 20.27 28.0897 19.94C27.1997 19.69 26.4297 19.42 26.4297 18.83C26.4297 18.31 26.9497 18.06 27.5997 18.06C28.2997 18.06 28.8397 18.37 28.9397 18.99C28.9497 19.06 28.9697 19.09 29.0397 19.09H30.0997C30.1697 19.09 30.1997 19.06 30.1997 18.99C30.1697 17.9 29.1697 16.9 27.6197 16.9C26.3497 16.9 25.1697 17.61 25.1697 18.89C25.1697 20.04 26.0597 20.57 27.5597 20.95C28.5197 21.19 29.1497 21.51 29.1497 22.01C29.1497 22.56 28.6197 22.94 27.7697 22.94C26.9097 22.94 26.3197 22.55 26.2497 21.74C26.2397 21.67 26.2197 21.64 26.1497 21.64H25.0997C25.0297 21.64 24.9997 21.67 24.9997 21.74C25.0097 23.04 26.1497 24.1 27.7097 24.1Z"
                fill="currentColor"
              />
              <path
                transform="translate(13,40)"
                d={path.cardText1}
                fill="white"
              />
            </g>
          </motion.g>
          <motion.svg
            y="310"
            x="160"
            variants={notificationVariant}
            width="189"
            height="42"
            viewBox="0 0 189 42"
            fill="none"
            overflow="auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="4.5"
              width="200"
              height="37"
              rx="18.5"
              fill="white"
              stroke="currentColor"
            />
            <motion.rect
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: {
                  opacity: [0.2, 0.2, 0.2, 0.2, 0.1],
                  scale: [1, 1, 1, 1.2, 1.8],
                  transition: { ...checkReviewTransition },
                },
              }}
              x="9"
              y="14"
              width="18"
              height="18"
              rx="9"
              fill="currentColor"
            />
            <motion.rect
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: {
                  opacity: [0.5, 0.5, 0.5, 1, 0],
                  scale: [1, 1, 1, 1.2, 0],
                  transition: { ...checkReviewTransition },
                },
              }}
              x="9"
              y="14"
              width="18"
              height="18"
              rx="9"
              fill="currentColor"
            />
            <path
              d="M15 23L17 25L21 21"
              stroke="#ffffff"
              strokeLinecap="round"
            />
            <path
              transform="translate(38,13)"
              d={path.notificationText1}
              fill="currentColor"
            />
            <rect
              transform="translate(16,1)"
              x="173"
              y="2"
              width="14"
              height="14"
              rx="7"
              fill="currentColor"
            />
            <path
              transform="translate(16,1)"
              d="M179.918 13H180.938C181.008 13 181.038 12.97 181.038 12.9V6.1C181.038 6.03 181.008 6 180.938 6H180.378C180.318 6 180.268 6.02 180.218 6.05L178.568 6.94C178.508 6.97 178.458 7.02 178.458 7.09V8.16C178.458 8.23 178.488 8.25 178.538 8.25C178.568 8.25 178.598 8.24 178.638 8.22L179.818 7.56V12.9C179.818 12.97 179.848 13 179.918 13Z"
              fill="#ffffff"
            />
          </motion.svg>
          <g transform="translate(225, 234)">
            <motion.g variants={fadeInVariant} custom={1}>
              <motion.g
                variants={{
                  hidden: { "--offset": "0%" },
                  visible: {
                    "--offset": "100%",
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{
                  offsetDistance: "var(--offset)",
                  offsetRotate: "0deg",
                  offsetPath: `path(
                "M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63"
                )`,
                }}
              >
                <motion.g variants={cursorCheckReviewVariant}>
                  <path
                    d="M54.5 0.5H16C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43959 31.5 16 31.5H39C47.5604 31.5 54.5 24.5604 54.5 16V0.5Z"
                    fill="white"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="49"
                    height="26"
                    rx="13"
                    fill="currentColor"
                  />
                  <path
                    d="M19.045 21.24C21.505 21.24 23.101 19.932 23.329 17.952H21.265C21.049 18.9 20.257 19.5 19.057 19.5C17.473 19.5 16.561 18.444 16.561 16.8C16.561 15.156 17.473 14.1 19.057 14.1C20.257 14.1 21.049 14.7 21.265 15.648H23.329C23.101 13.668 21.505 12.36 19.045 12.36C16.285 12.36 14.533 14.22 14.533 16.8C14.533 19.38 16.285 21.24 19.045 21.24ZM26.4143 21V18.096H29.6063V16.5H26.4143V14.232H29.6063V12.6H24.4703V21H26.4143ZM34.9936 21.24C37.8136 21.24 39.4816 19.188 39.4816 16.8C39.4816 14.412 37.8136 12.36 34.9936 12.36C32.1736 12.36 30.5056 14.412 30.5056 16.8C30.5056 19.188 32.1736 21.24 34.9936 21.24ZM34.9936 19.5C33.3856 19.5 32.5216 18.264 32.5336 16.8C32.5216 15.336 33.3856 14.1 34.9936 14.1C36.5896 14.1 37.4536 15.336 37.4536 16.8C37.4536 18.264 36.5896 19.5 34.9936 19.5Z"
                    fill="white"
                  />
                </motion.g>
              </motion.g>
            </motion.g>
          </g>
        </>
      );

    case "liquidate":
      return (
        <>
          <motion.svg y="420" x="490" variants={liquidateVariant}>
            <svg
              width="84"
              height="74"
              viewBox="0 0 84 74"
              fill="none"
              overflow="auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="82"
                height="70"
                rx="16"
                fill="white"
                stroke="currentColor"
              />
              <motion.rect
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: [0.1, 0.1, 0.2, 0.5, 0, 0.1],
                    transition: {
                      ...checkReviewTransition,
                      delay: 7,
                      repeatDelay: 14,
                    },
                  },
                }}
                x="8"
                y="44"
                width="68"
                height="20"
                rx="8"
                fill="currentColor"
              />
              <path
                d="M15 23L17 25L21 21"
                stroke="#ffffff"
                strokeLinecap="round"
              />
              <g transform="translate(15, 16)">
                <path d={path.notificationText2} fill="currentColor" />
              </g>
              <path
                d="M179.918 13H180.938C181.008 13 181.038 12.97 181.038 12.9V6.1C181.038 6.03 181.008 6 180.938 6H180.378C180.318 6 180.268 6.02 180.218 6.05L178.568 6.94C178.508 6.97 178.458 7.02 178.458 7.09V8.16C178.458 8.23 178.488 8.25 178.538 8.25C178.568 8.25 178.598 8.24 178.638 8.22L179.818 7.56V12.9C179.818 12.97 179.848 13 179.918 13Z"
                fill="#ffffff"
              />
            </svg>
          </motion.svg>
          <g transform="translate(620, 301)">
            <motion.g variants={fadeInVariant} custom={3}>
              <motion.g
                variants={{
                  hidden: { "--offset": "0%" },
                  visible: {
                    "--offset": "100%",
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  },
                }}
                style={{
                  offsetDistance: "var(--offset)",
                  offsetRotate: "0deg",
                  offsetPath: `path(
                "M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63"
                )`,
                }}
              >
                <motion.g variants={cursorLiquidateVariant}>
                  <path
                    d="M0.5 0.5H77C85.5604 0.5 92.5 7.43959 92.5 16C92.5 24.5604 85.5604 31.5 77 31.5H16C7.43959 31.5 0.5 24.5604 0.5 16V0.5Z"
                    fill="white"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="87"
                    height="26"
                    rx="13"
                    fill="currentColor"
                  />
                  <path
                    d="M14.9221 20V16.664H17.8261V20H19.7701V11.6H17.8261V14.996H14.9221V11.6H12.9781V20H14.9221ZM27.0319 16.808C27.0319 15.176 25.8079 14.06 24.0079 14.06C22.1239 14.06 20.8879 15.212 20.8879 17.108C20.8879 19.04 22.0999 20.156 24.0679 20.156C25.6039 20.156 26.7679 19.4 26.9479 18.26H25.1479C24.9919 18.62 24.6319 18.776 24.0679 18.776C23.2519 18.776 22.7479 18.368 22.7119 17.612H26.9839C27.0199 17.288 27.0319 17.108 27.0319 16.808ZM22.7119 16.472C22.7239 15.764 23.2039 15.296 23.9959 15.296C24.7759 15.296 25.2079 15.704 25.2199 16.472H22.7119ZM30.4799 20.156C31.2839 20.156 32.0039 19.76 32.3159 19.184V20H34.1399V14.216H32.3159V15.044C32.0039 14.456 31.3439 14.06 30.5039 14.06C28.8239 14.06 27.7559 15.38 27.7559 17.108C27.7559 18.848 28.7519 20.156 30.4799 20.156ZM31.0079 18.632C30.1559 18.632 29.6279 17.984 29.6279 17.108C29.6279 16.232 30.1559 15.596 31.0079 15.596C31.9199 15.596 32.3879 16.28 32.3879 17.108C32.3879 17.948 31.9199 18.632 31.0079 18.632ZM39.8042 15.044C39.4922 14.456 38.8322 14.06 37.9922 14.06C36.3122 14.06 35.2442 15.38 35.2442 17.108C35.2442 18.848 36.2402 20.156 37.9682 20.156C38.7722 20.156 39.4922 19.76 39.8042 19.184V20H41.6282V11.6H39.8042V15.044ZM38.4962 18.632C37.6442 18.632 37.1162 17.984 37.1162 17.108C37.1162 16.232 37.6442 15.596 38.4962 15.596C39.4082 15.596 39.8762 16.28 39.8762 17.108C39.8762 17.948 39.4082 18.632 38.4962 18.632ZM48.8305 20.156C50.8105 20.156 52.0345 18.872 52.0345 17.108C52.0345 15.344 50.8105 14.06 48.8305 14.06C46.8385 14.06 45.6145 15.344 45.6145 17.108C45.6145 18.872 46.8385 20.156 48.8305 20.156ZM48.8305 18.608C47.9545 18.608 47.4505 17.984 47.4505 17.108C47.4505 16.232 47.9545 15.608 48.8305 15.608C49.6945 15.608 50.2105 16.232 50.2105 17.108C50.2105 17.984 49.6945 18.608 48.8305 18.608ZM56.1522 12.896C56.3202 12.896 56.4642 12.92 56.6562 12.932V11.624C56.4282 11.552 56.0922 11.492 55.6002 11.492C54.7362 11.492 53.4762 11.876 53.4762 13.652V14.216H52.4442V15.668H53.4762V20H55.3122V15.668H56.6562V14.216H55.3122V13.628C55.3122 12.992 55.7562 12.896 56.1522 12.896ZM64.0245 20V13.328H66.3405V11.6H59.7885V13.328H62.0925V20H64.0245ZM68.6713 20.156C69.4753 20.156 70.1953 19.76 70.5073 19.184V20H72.3313V14.216H70.5073V15.044C70.1953 14.456 69.5353 14.06 68.6953 14.06C67.0153 14.06 65.9473 15.38 65.9473 17.108C65.9473 18.848 66.9433 20.156 68.6713 20.156ZM69.1993 18.632C68.3473 18.632 67.8193 17.984 67.8193 17.108C67.8193 16.232 68.3473 15.596 69.1993 15.596C70.1113 15.596 70.5793 16.28 70.5793 17.108C70.5793 17.948 70.1113 18.632 69.1993 18.632ZM75.4276 20L76.4716 18.272L77.5036 20H79.6996L77.5996 17.084L79.6636 14.216H77.4676L76.4716 15.896L75.4636 14.216H73.2796L75.3436 17.084L73.2436 20H75.4276Z"
                    fill="white"
                  />
                </motion.g>
              </motion.g>
            </motion.g>
          </g>
        </>
      );
    case "liquidateCard":
      return (
        <motion.g variants={fadeInVariant}>
          <g transform="translate(414,355)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0C2.68629 0 0 2.68629 0 6V70C0 73.3137 2.68629 76 6 76H119C122.314 76 125 73.3137 125 70V6C125 2.68629 122.314 0 119 0H6ZM13 16C13 14.3433 14.3438 13 16 13H33C33.8164 13 34.5586 13.3271 35.1016 13.8579C35.6562 14.4023 36 15.1611 36 16V24C36 25.6567 34.6562 27 33 27H16C14.3438 27 13 25.6567 13 24V16ZM18.8203 24H19.8789C19.9492 24 19.9805 23.9702 19.9805 23.8999V19.1299L23.0312 23.9199C23.0703 23.98 23.1211 24 23.1914 24H24.2188C24.2891 24 24.3203 23.9702 24.3203 23.8999V17.1001C24.3203 17.0298 24.2891 17 24.2188 17H23.1602C23.0898 17 23.0586 17.0298 23.0586 17.1001V21.8701L20.0117 17.0801C19.9688 17.02 19.9219 17 19.8516 17H18.8203C18.75 17 18.7188 17.0298 18.7188 17.1001V23.8999C18.7188 23.9702 18.75 24 18.8203 24ZM25.8594 24H30.4297C30.5 24 30.5312 23.9702 30.5312 23.8999V22.9399C30.5312 22.897 30.5195 22.8687 30.4922 22.8535C30.4766 22.8442 30.457 22.8398 30.4297 22.8398H27.0195V17.1001C27.0195 17.0298 26.9922 17 26.9219 17H25.8594C25.793 17 25.7617 17.0298 25.7617 17.1001V23.8999C25.7617 23.9702 25.793 24 25.8594 24Z"
              fill="currentColor"
            />

            <path
              transform="translate(13,40)"
              d={path.cardText2}
              fill="white"
            />
            <g>
              <motion.g
                variants={{
                  hidden: { opacity: 0, y: 4 },
                  visible: {
                    y: [4, 4, 0, 0, 0, 0],
                    opacity: [0, 0, 1, 1, 1, 1, 0],
                    transition: {
                      type: "spring",
                      times: [0.14, 0.22, 0.32, 0.56, 0.7, 0.84, 1],
                      duration: 10,
                      repeat: Infinity,
                      delay: 7,
                      repeatDelay: 7,
                      repeatType: "loop",
                    },
                  },
                }}
              >
                <rect
                  transform="translate(-0.5,-0.5)"
                  ry="6"
                  width="126"
                  height="77"
                  fill="currentColor"
                ></rect>
                <g transform="translate(13,13)">
                  <g transform="translate(0,32)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM6.70711 12.7071L9 10.4142L11.2929 12.7071L12.7071 11.2929L10.4142 9L12.7071 6.70711L11.2929 5.29289L9 7.58579L6.70711 5.29289L5.29289 6.70711L7.58579 9L5.29289 11.2929L6.70711 12.7071Z"
                      fill="#fff"
                    />
                  </g>

                  <motion.path
                    variants={{
                      hidden: { scale: 1.1 },
                      visible: {
                        scale: [1.1, 1.1, 1, 1, 1, 0.9],
                        transition: {
                          duration: 10,
                          repeat: Infinity,
                          delay: 7,
                          repeatDelay: 7,
                          repeatType: "loop",
                        },
                      },
                    }}
                    d={path.cardText3}
                    fill="#fff"
                  />
                </g>
              </motion.g>
            </g>
          </g>
        </motion.g>
      );
    case "taxAdvisor":
      return (
        <g transform="translate(200,400)">
          <motion.g variants={fadeInVariant} custom={4}>
            <motion.g
              variants={{
                hidden: { "--offset": "0%" },
                visible: {
                  "--offset": "100%",
                  transition: {
                    delay: 2,
                    duration: 18,
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                },
              }}
              style={{
                offsetDistance: "var(--offset)",
                offsetRotate: "0deg",
                offsetPath: `path(
              "M47.0876 2.99051C29.4313 0.646036 -4.36034 -1.55573 1.72321 8.39298C9.32763 20.8289 48.9231 21.0327 58.1008 15.6303C67.2786 10.2278 58.8876 -0.0674992 47.0876 1.4615C35.2875 2.99051 12.4742 0.544102 12.7365 5.23304C12.9987 9.92198 17.9809 16.8535 40.2697 15.6303C62.5586 14.4071 60.9853 5.23304 51.8075 5.23304C42.6297 5.23304 52.332 4.09275 47.0876 2.99051Z"
              )`,
              }}
            >
              <g>
                <path
                  d="M92.5 0.5H16C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43958 31.5 16 31.5H77C85.5604 31.5 92.5 24.5604 92.5 16V0.5Z"
                  fill="white"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="3"
                  width="87"
                  height="26"
                  rx="13"
                  fill="currentColor"
                />
                <path
                  d="M17.7081 20V13.328H20.0241V11.6H13.4721V13.328H15.7761V20H17.7081ZM22.3549 20.156C23.1589 20.156 23.8789 19.76 24.1909 19.184V20H26.0149V14.216H24.1909V15.044C23.8789 14.456 23.2189 14.06 22.3789 14.06C20.6989 14.06 19.6309 15.38 19.6309 17.108C19.6309 18.848 20.6269 20.156 22.3549 20.156ZM22.8829 18.632C22.0309 18.632 21.5029 17.984 21.5029 17.108C21.5029 16.232 22.0309 15.596 22.8829 15.596C23.7949 15.596 24.2629 16.28 24.2629 17.108C24.2629 17.948 23.7949 18.632 22.8829 18.632ZM29.1112 20L30.1552 18.272L31.1872 20H33.3832L31.2832 17.084L33.3472 14.216H31.1512L30.1552 15.896L29.1472 14.216H26.9632L29.0272 17.084L26.9272 20H29.1112ZM44.2155 20L41.3595 11.6H39.4035L36.5595 20H38.6115L38.8995 18.98H41.8755L42.1635 20H44.2155ZM40.3875 13.724L41.4435 17.456H39.3315L40.3875 13.724ZM49.1167 15.044C48.8047 14.456 48.1447 14.06 47.3047 14.06C45.6247 14.06 44.5567 15.38 44.5567 17.108C44.5567 18.848 45.5527 20.156 47.2807 20.156C48.0847 20.156 48.8047 19.76 49.1167 19.184V20H50.9407V11.6H49.1167V15.044ZM47.8087 18.632C46.9567 18.632 46.4287 17.984 46.4287 17.108C46.4287 16.232 46.9567 15.596 47.8087 15.596C48.7207 15.596 49.1887 16.28 49.1887 17.108C49.1887 17.948 48.7207 18.632 47.8087 18.632ZM55.825 20L58.333 14.216H56.293L54.997 17.852L53.701 14.216H51.673L54.169 20H55.825ZM59.9629 13.712C60.6229 13.712 61.1029 13.208 61.1029 12.596C61.1029 11.972 60.6229 11.468 59.9629 11.468C59.3029 11.468 58.8349 11.972 58.8349 12.596C58.8349 13.208 59.3029 13.712 59.9629 13.712ZM60.8749 20V14.216H59.0509V20H60.8749ZM64.7185 20.156C66.2545 20.156 67.2505 19.448 67.2505 18.248C67.2505 17.372 66.6985 16.82 65.7865 16.58L64.5625 16.244C64.0945 16.124 63.9265 15.956 63.9265 15.692C63.9265 15.416 64.1905 15.224 64.5865 15.224C65.0785 15.224 65.3785 15.44 65.3785 15.848H67.1905C67.1905 14.696 66.2425 14.06 64.6105 14.06C63.1225 14.06 62.1385 14.78 62.1385 15.872C62.1385 16.748 62.6665 17.336 63.5905 17.564L64.8025 17.864C65.2945 17.984 65.4265 18.14 65.4265 18.404C65.4265 18.74 65.1505 18.932 64.7545 18.932C64.1905 18.932 63.8065 18.656 63.8065 18.26H61.9825C61.9825 19.388 63.0745 20.156 64.7185 20.156ZM71.1859 20.156C73.1659 20.156 74.3899 18.872 74.3899 17.108C74.3899 15.344 73.1659 14.06 71.1859 14.06C69.1939 14.06 67.9699 15.344 67.9699 17.108C67.9699 18.872 69.1939 20.156 71.1859 20.156ZM71.1859 18.608C70.3099 18.608 69.8059 17.984 69.8059 17.108C69.8059 16.232 70.3099 15.608 71.1859 15.608C72.0499 15.608 72.5659 16.232 72.5659 17.108C72.5659 17.984 72.0499 18.608 71.1859 18.608ZM77.2815 20V17.768C77.2815 16.484 77.8095 15.836 78.8055 15.836C79.0335 15.836 79.1415 15.848 79.3575 15.872V14.168C79.2135 14.132 79.0935 14.12 78.8775 14.12C78.1695 14.12 77.4855 14.564 77.2815 15.428V14.216H75.4455V20H77.2815Z"
                  fill="white"
                />
              </g>
            </motion.g>
          </motion.g>
        </g>
      );
    case "taxManager":
      return (
        <g transform="translate(200,210)">
          <motion.g variants={fadeInVariant} custom={2}>
            <motion.g
              variants={{
                hidden: { "--offset": "0%" },
                visible: {
                  "--offset": "100%",
                  transition: {
                    delay: 2,
                    duration: 40,
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                },
              }}
              style={{
                offsetDistance: "var(--offset)",
                offsetRotate: "0deg",
                offsetPath: `path(
                "M225.5 43C235.667 40.1667 251.8 33 235 27C214 19.5 190 -2.50001 175 1.99999C160 6.49999 100.5 56.5 59.0002 47C17.5002 37.5 -13.4998 42 8.50017 52C30.5002 62 89.5 57.5 83.5 82C77.5 106.5 78 103.5 109 100.5C140 97.5 140 107 147.5 111C155 115 179 98.5 198.5 103.5C218 108.5 223.5 135 251.5 134.5C279.5 134 310 109 297 103.5C284 98 252.5 66.5 284 67.5C315.5 68.5 328.5 120 280 115.5C231.5 111 182.5 94 183 76C183.5 58 117 38 112 47C107 56 92.5 89 193 62C206 58.5075 198.5 47 225.5 43Z"
                )`,
              }}
            >
              <g>
                <path
                  d="M96.5 0.5H16C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43958 31.5 16 31.5H81C89.5604 31.5 96.5 24.5604 96.5 16V0.5Z"
                  fill="#fff"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="3"
                  width="91"
                  height="26"
                  rx="13"
                  fill="currentColor"
                />
                <path
                  d="M15.3077 20V13.328H17.6237V11.6H11.0717V13.328H13.3757V20H15.3077ZM19.9545 20.156C20.7585 20.156 21.4785 19.76 21.7905 19.184V20H23.6145V14.216H21.7905V15.044C21.4785 14.456 20.8185 14.06 19.9785 14.06C18.2985 14.06 17.2305 15.38 17.2305 17.108C17.2305 18.848 18.2265 20.156 19.9545 20.156ZM20.4825 18.632C19.6305 18.632 19.1025 17.984 19.1025 17.108C19.1025 16.232 19.6305 15.596 20.4825 15.596C21.3945 15.596 21.8625 16.28 21.8625 17.108C21.8625 17.948 21.3945 18.632 20.4825 18.632ZM26.7108 20L27.7548 18.272L28.7868 20H30.9828L28.8828 17.084L30.9468 14.216H28.7508L27.7548 15.896L26.7468 14.216H24.5628L26.6268 17.084L24.5268 20H26.7108ZM36.7151 20V14.516L38.6231 20H40.0631L41.9231 14.552V20H43.7831V11.6H41.5751L39.3431 17.564L37.1111 11.6H34.8551V20H36.7151ZM47.6577 20.156C48.4617 20.156 49.1817 19.76 49.4937 19.184V20H51.3177V14.216H49.4937V15.044C49.1817 14.456 48.5217 14.06 47.6817 14.06C46.0017 14.06 44.9337 15.38 44.9337 17.108C44.9337 18.848 45.9297 20.156 47.6577 20.156ZM48.1857 18.632C47.3337 18.632 46.8057 17.984 46.8057 17.108C46.8057 16.232 47.3337 15.596 48.1857 15.596C49.0977 15.596 49.5657 16.28 49.5657 17.108C49.5657 17.948 49.0977 18.632 48.1857 18.632ZM54.6779 20V16.976C54.6779 16.088 55.0619 15.608 55.7939 15.608C56.5379 15.608 56.8139 16.052 56.8139 17.024V20H58.6619V16.424C58.6619 14.852 57.9539 14.06 56.5499 14.06C55.6739 14.06 55.0139 14.408 54.6779 15.056V14.216H52.8419V20H54.6779ZM62.435 20.156C63.239 20.156 63.959 19.76 64.271 19.184V20H66.095V14.216H64.271V15.044C63.959 14.456 63.299 14.06 62.459 14.06C60.779 14.06 59.711 15.38 59.711 17.108C59.711 18.848 60.707 20.156 62.435 20.156ZM62.963 18.632C62.111 18.632 61.583 17.984 61.583 17.108C61.583 16.232 62.111 15.596 62.963 15.596C63.875 15.596 64.343 16.28 64.343 17.108C64.343 17.948 63.875 18.632 62.963 18.632ZM71.7593 15.044C71.4713 14.444 70.7633 14.06 69.9713 14.06C68.3033 14.06 67.1993 15.344 67.1993 17.048C67.1993 18.752 68.2313 20 69.9473 20C70.7033 20 71.4713 19.64 71.7593 19.064V19.832C71.7593 20.864 71.2433 21.236 70.3913 21.236C69.6473 21.236 69.2513 20.96 69.1673 20.504H67.2953C67.3193 21.128 67.7393 21.752 68.3273 22.112C68.8913 22.448 69.5873 22.58 70.4153 22.58C71.2433 22.58 71.9513 22.436 72.4793 22.064C73.1873 21.572 73.5833 20.744 73.5953 19.628V14.216H71.7593V15.044ZM70.4513 18.584C69.6233 18.584 69.0833 17.948 69.0833 17.072C69.0833 16.196 69.6233 15.56 70.4513 15.56C71.3273 15.56 71.8433 16.232 71.8433 17.072C71.8433 17.912 71.3273 18.584 70.4513 18.584ZM80.7956 16.808C80.7956 15.176 79.5716 14.06 77.7716 14.06C75.8876 14.06 74.6516 15.212 74.6516 17.108C74.6516 19.04 75.8636 20.156 77.8316 20.156C79.3676 20.156 80.5316 19.4 80.7116 18.26H78.9116C78.7556 18.62 78.3956 18.776 77.8316 18.776C77.0156 18.776 76.5116 18.368 76.4756 17.612H80.7476C80.7836 17.288 80.7956 17.108 80.7956 16.808ZM76.4756 16.472C76.4876 15.764 76.9676 15.296 77.7596 15.296C78.5396 15.296 78.9716 15.704 78.9836 16.472H76.4756ZM83.6818 20V17.768C83.6818 16.484 84.2098 15.836 85.2058 15.836C85.4338 15.836 85.5418 15.848 85.7578 15.872V14.168C85.6138 14.132 85.4938 14.12 85.2778 14.12C84.5698 14.12 83.8858 14.564 83.6818 15.428V14.216H81.8458V20H83.6818Z"
                  fill="#fff"
                />
              </g>
            </motion.g>
          </motion.g>
        </g>
      );

    case "globalNotifications":
      return (
        <motion.g variants={notificationStackParentVariant}>
          <svg
            sx={{ overflow: "visible" }}
            x="512"
            y="238"
            width="197"
            height="42"
            viewBox="0 0 197 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g variants={notificationStackVariant}>
              <rect
                x="0.5"
                y="4.5"
                width="191"
                height="37"
                rx="18.5"
                fill="white"
                stroke="currentColor"
              />
              <g transform="translate(12,14)">
                <rect width="18" height="18" rx="9" fill="currentColor" />
                <path
                  d="M10 5.92285H7C5.89543 5.92285 5 6.81828 5 7.92285V8.99977M10 5.92285L8.92299 4.8457M10 5.92285L8.92299 6.99986"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 12.0769H11C12.1046 12.0769 13 11.1814 13 10.0769V8.99994M8 12.0769L9.07692 13.1538M8 12.0769L9.07692 10.9999"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>

              <path
                transform="translate(38,13)"
                d={path.notificationText3}
                fill="currentColor"
              />
              <rect
                x="181"
                y="2"
                width="14"
                height="14"
                rx="7"
                fill="currentColor"
              />
              <path
                d="M188.844 12V5.88H187.908C187.908 6.636 187.665 6.924 186.522 6.924V7.788H187.818V12H188.844Z"
                fill="white"
              />
            </motion.g>
          </svg>
          <svg
            sx={{ overflow: "visible" }}
            x="512"
            y="234"
            width="197"
            height="42"
            viewBox="0 0 197 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g variants={notificationStackVariant}>
              <rect
                x="0.5"
                y="4.5"
                width="191"
                height="37"
                rx="18.5"
                fill="white"
                stroke="currentColor"
              />
              <g transform="translate(12,14)">
                <rect width="18" height="18" rx="9" fill="currentColor" />
                <path
                  d="M6 9L8 11L12 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>

              <path
                transform="translate(38,13)"
                d={path.notificationText4}
                fill="currentColor"
              />
              <rect
                x="181"
                y="2"
                width="14"
                height="14"
                rx="7"
                fill="currentColor"
              />
              <path
                d="M188.844 12V5.88H187.908C187.908 6.636 187.665 6.924 186.522 6.924V7.788H187.818V12H188.844Z"
                fill="white"
              />
            </motion.g>
          </svg>
          <svg
            sx={{ overflow: "visible" }}
            x="512"
            y="230"
            width="197"
            height="42"
            viewBox="0 0 197 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g variants={notificationStackVariant}>
              <rect
                x="0.5"
                y="4.5"
                width="191"
                height="37"
                rx="18.5"
                fill="white"
                stroke="currentColor"
              />
              <g transform="translate(12,14)">
                <rect width="18" height="18" rx="9" fill="currentColor" />
                <path
                  d="M9.06418 4.48425L5.37552 8.58276C5.23072 8.74364 5.3449 9 5.56134 9H7.5C8.05228 9 8.5 9.44772 8.5 10V13.3485C8.5 13.5776 8.78255 13.6861 8.93582 13.5158L12.6245 9.41724C12.7693 9.25636 12.6551 9 12.4387 9H10.5C9.94772 9 9.5 8.55228 9.5 8V4.65149C9.5 4.42237 9.21745 4.31394 9.06418 4.48425Z"
                  fill="white"
                />
              </g>

              <path
                transform="translate(38,13)"
                d={path.notificationText5}
                fill="currentColor"
              />
              <rect
                x="181"
                y="2"
                width="14"
                height="14"
                rx="7"
                fill="currentColor"
              />
              <path
                d="M188.844 12V5.88H187.908C187.908 6.636 187.665 6.924 186.522 6.924V7.788H187.818V12H188.844Z"
                fill="white"
              />
            </motion.g>
          </svg>
        </motion.g>
      );
    case "secondaryCards":
      return (
        <>
          <motion.g variants={fadeInVariant} custom={1}>
            <rect
              x="408"
              y="128"
              width="80"
              height="80"
              opacity="0.1"
              fill={context.theme.colors.text}
              rx="12"
            />
          </motion.g>

          <motion.g variants={fadeInVariant} custom={2}>
            <rect
              x="352"
              y="242"
              width="136"
              height="76"
              opacity="0.1"
              fill={context.theme.colors.text}
              rx="38"
            />
          </motion.g>

          <motion.g variants={fadeInVariant} custom={3}>
            <rect
              x="526"
              y="242"
              width="125"
              height="76"
              opacity="0.1"
              fill={context.theme.colors.text}
              rx="12"
            />
          </motion.g>
          <motion.g variants={fadeInVariant} custom={4}>
            <rect
              x="576"
              y="353"
              width="136"
              height="78"
              opacity="0.1"
              fill={context.theme.colors.text}
              rx="42"
            />
          </motion.g>
          <motion.g variants={fadeInVariant} custom={5}>
            <clipPath id="clipCard">
              <rect x="281" y="447" width="280" height="58"></rect>
            </clipPath>
            <rect
              clipPath="url(#clipCard)"
              x="357"
              y="467"
              width="125"
              height="80"
              opacity="0.1"
              fill={context.theme.colors.text}
              rx="12"
            />
          </motion.g>
        </>
      );

    case "offSite":
      return (
        <svg
          y="503.5"
          x="895.5"
          width="3000"
          height="2"
          viewBox="0 0 3000 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={offsiteVariant}
            shapeRendering="geometricPrecision"
            d="M1 0H3000"
            stroke="currentColor"
          />
        </svg>
      );
    default:
      return <></>;
  }
};
