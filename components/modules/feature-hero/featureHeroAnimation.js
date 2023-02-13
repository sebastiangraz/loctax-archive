import { motion } from "framer-motion";
import { path } from "./featureHeroPaths";

const intersectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3.5,
      duration: 3,
    },
  },
};

const parentVariant = {
  visible: {
    transition: {
      type: "spring",
      duration: 1.4,
      staggerChildren: 0.03,
    },
  },
};

const childVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: [1, 0],
    transition: {
      pathLength: { type: "spring", duration: 4, bounce: 0 },
      opacity: { delay: 3, duration: 3 },
    },
  },
};

const flowVariant = {
  hidden: { "--offset": "10%", scale: 0 },
  visible: (i) => {
    let index = i ? i : 1;
    let delay = index * 2;
    return {
      "--offset": ["10%", "100%"],
      scale: [0, 1, 1, 1, 1, 0.1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: delay,
        delay,
        type: "linear",
        duration: 25,
      },
    };
  },
};

const labelflowVariant = {
  hidden: { "--offset": "50%", scale: 0 },
  visible: (i) => {
    let index = i ? i : 1;
    let delay = index * 1;
    return {
      "--offset": ["50%", "65%", "95%"],
      scale: [0.9, 1, 1, 1, 1, 1, 1],
      opacity: [0, 1, 1, 1, 1, 1, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: delay,
        delay,
        type: "spring",
        duration: 20,
        when: "afterChildren",
      },
    };
  },
};

export const FeatureHeroAnimation = ({ id }) => {
  return (
    <motion.svg
      sx={{ display: "block", width: "100%", overflow: "visible" }}
      viewBox="0 0 1177 924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        custom={0}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        custom={1}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
          )`,
        }}
      />
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
          "M364.5 0V615.5C364.5 630.964 351.964 643.5 336.5 643.5H140.5C125.036 643.5 112.5 656.036 112.5 671.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        custom={3}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M532.5 0V559.5C532.5 574.964 519.964 587.5 504.5 587.5H476.5C461.036 587.5 448.5 600.036 448.5 615.5V924"
          )`,
        }}
      />
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
          offsetPath: `path(
          "M840.5 0V391.5C840.5 406.964 853.036 419.5 868.5 419.5H1036.5C1051.96 419.5 1064.5 432.036 1064.5 447.5V924"
          )`,
        }}
      />
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
          offsetPath: `path(
          "M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        custom={5}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
          )`,
        }}
      />

      <motion.svg
        sx={{ display: "block" }}
        viewBox="0 0 1177 924"
        fill="none"
        variants={intersectionVariant}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d={path.intersection}
          fill="currentColor"
        />
      </motion.svg>

      <motion.path
        variants={childVariant}
        d="M280.5 0V475.5C280.5 490.964 267.964 503.5 252.5 503.5H28.5C13.036 503.5 0.5 516.036 0.5 531.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M308.5 0V671.5C308.5 686.964 295.964 699.5 280.5 699.5H0.5"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M336.5 0V559.5C336.5 574.964 323.964 587.5 308.5 587.5H84.5C69.036 587.5 56.5 600.036 56.5 615.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M364.5 0V615.5C364.5 630.964 351.964 643.5 336.5 643.5H140.5C125.036 643.5 112.5 656.036 112.5 671.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M392.5 0V391.5C392.5 406.964 379.964 419.5 364.5 419.5H196.5C181.036 419.5 168.5 432.036 168.5 447.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M476.5 0V783.5C476.5 798.964 463.964 811.5 448.5 811.5H364.5C349.036 811.5 336.5 824.036 336.5 839.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M504.5 0V531C504.5 546.464 491.964 559 476.5 559H420.5C405.036 559 392.5 571.536 392.5 587V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M532.5 0V559.5C532.5 574.964 519.964 587.5 504.5 587.5H476.5C461.036 587.5 448.5 600.036 448.5 615.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M560.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M588.5 0V671.5C588.5 686.964 575.964 699.5 560.5 699.5H532.5C517.036 699.5 504.5 712.036 504.5 727.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M616.5 0V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M644.5 0V727.5C644.5 742.964 631.964 755.5 616.5 755.5V755.5"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M672.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M700.5 0V615.5C700.5 630.964 713.036 643.5 728.5 643.5H812.5C827.964 643.5 840.5 656.036 840.5 671.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M728.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M756.5 0V559.5C756.5 574.964 769.036 587.5 784.5 587.5H868.5C883.964 587.5 896.5 600.036 896.5 615.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M784.5 0V447.5C784.5 462.964 797.036 475.5 812.5 475.5H1148.5C1163.96 475.5 1176.5 488.036 1176.5 503.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M812.5 0V503.5C812.5 518.964 825.036 531.5 840.5 531.5H980.5C995.964 531.5 1008.5 544.036 1008.5 559.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M840.5 0V391.5C840.5 406.964 853.036 419.5 868.5 419.5H1036.5C1051.96 419.5 1064.5 432.036 1064.5 447.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M896.5 0V475.5C896.5 490.964 909.036 503.5 924.5 503.5H1176.5"
        stroke="currentColor"
      />
      <motion.path
        variants={{
          ...childVariant,
          visible: {
            pathLength: 1,
            opacity: [1, 0],
            transition: {
              pathLength: { duration: 7.5, delay: 0 },
              opacity: { delay: 3, duration: 3 },
            },
          },
        }}
        d="M952.5 0V587.51M924.5 0V559.5C924.5 574.964 937.036 587.5 952.5 587.5V587.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={{
          ...childVariant,
          visible: {
            pathLength: 1,
            opacity: [1, 0],
            transition: {
              pathLength: { duration: 2.5, delay: 2 },
              opacity: { delay: 3, duration: 3 },
            },
          },
        }}
        d="M728.5 699.5H756.5C771.964 699.5 784.5 712.036 784.5 727.5V924"
        stroke="currentColor"
      />
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={0}
        sx={{
          offsetDistance: "var(--offset)",
          offsetAnchor: "10px 1px",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
              )`,
        }}
      >
        <rect
          width="106"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label0} fill="currentColor" />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={1}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
              )`,
        }}
      >
        <rect
          width="118"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label1} fill="currentColor" />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={3}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M644.5 0V727.5C644.5 742.964 631.964 755.5 616.5 755.5V755.5"
              )`,
        }}
      >
        <rect
          width="96"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label2} fill="currentColor" />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={2}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M532.5 0V559.5C532.5 574.964 519.964 587.5 504.5 587.5H476.5C461.036 587.5 448.5 600.036 448.5 615.5V924")`,
        }}
      >
        <rect
          width="96"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label3} fill="currentColor" />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={4}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M280.5 0V475.5C280.5 490.964 267.964 503.5 252.5 503.5H28.5C13.036 503.5 0.5 516.036 0.5 531.5V924")`,
        }}
      >
        <rect
          width="90"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label4} fill="currentColor" />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        custom={2}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path("M756.5 0V559.5C756.5 574.964 769.036 587.5 784.5 587.5H868.5C883.964 587.5 896.5 600.036 896.5 615.5V924")`,
        }}
      >
        <rect
          width="84"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path transform="translate(14,8)" d={path.label5} fill="currentColor" />
      </motion.g>
    </motion.svg>
  );
};
