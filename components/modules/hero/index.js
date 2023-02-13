import { Themed, Button, Paragraph } from "theme-ui";
import { LayoutGroup, motion } from "framer-motion";
import { HeroAnimation } from "./heroAnimation";
import CustomLink from "../../../components/link";
import Reveal from "../../reveal";
import { keyframes } from "@emotion/react";

const style = {
  hero: {
    position: "relative",
    overflow: "hidden",
    color: "var(--heroColor)",
  },
  heroInner: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    flexDirection: "column",
    justifyContent: "space-between",
    variant: "layout.row",
  },
  heroBg: {
    background: "beige",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    borderRadius: "large",
  },
};

const Hero = ({ data }) => {
  const { header, lead, ticker } = data;
  const parentVariant = {
    visible: {
      transition: {
        type: "spring",
        duration: 1,
        staggerChildren: 0.05,
      },
    },
  };
  const bgVariant = {
    hidden: {
      height: "70%",
      opacity: 0,
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        ease: [0.9, 0.2, 0.2, 0.9],
        damping: 30,
        duration: 1.7,
      },
    },
  };

  return (
    <section
      sx={{
        "--heroColor": (t) => `${t.colors.text}`,
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Themed.h1
          sx={{
            pr: [4, 4, 0],
            pl: [4, 4, 4],
            pt: 4,
            pb: 2,
            m: 0,
            fontSize: 5,
            maxWidth: ["100%", "32ch", "19ch", "19ch"],
            width: "100%",
            gridArea: "1/1/ span 1 / span 2",
          }}
        >
          <span>{header} </span>

          <motion.div
            sx={{
              display: "inline-grid",
              position: "relative",
              pr: "1ch",
            }}
          >
            <motion.div
              sx={{
                display: "inline-grid",
                position: "relative",
              }}
            >
              {ticker?.map((e, i) => {
                const inValue = (i / ticker.length) * 100;
                const outValue = ((i + 1) / ticker.length) * 100;
                const between = (inValue + outValue) / 2;

                const fadeIn = keyframes`
                  ${inValue}% {
                    opacity: 0;
                    transform: translateY(-5px);
                  }
                  ${between}% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                  ${outValue}% {
                    opacity: 0;
                    transform: translateY(5px);
                  }
                `;

                return (
                  <div
                    sx={{
                      animationName: `${fadeIn}`,
                      animationDuration: `${ticker.length * 2.5}s`,
                      animationIterationCount: "infinite",
                      animationFillMode: "both",
                      animationTimingFunction:
                        "cubic-bezier(0.7, 0.1, 0.1, 0.7)",
                      opacity: 0,
                      zIndex: 1,
                      display: "inline-flex",
                      position: "relative",
                      gridArea: "-1/1",
                      minWidth: "100%",
                      height: "100%",
                      whiteSpace: "nowrap",
                    }}
                    key={e + i}
                  >
                    <span
                      sx={{
                        background: "beige",
                        boxShadow: "0 0 0 1px currentColor",
                        borderRadius: "0.25em",
                        mt: "0.2rem",

                        pt: ["0.15rem", null, "0.25rem"],
                        pb: ["0.15rem", null, "0.45rem"],
                        px: [".5rem"],
                      }}
                    >
                      {" "}
                      {e}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </Themed.h1>
        <Paragraph
          sx={{
            gridArea: "3/1/span 1/span 2",
            ml: [0, 0, 4],
            px: [4, 4, 0],
            mb: ["1rem", "3rem"],
            width: "100%",
            maxWidth: ["100%", "32ch", "28ch", "28ch"],
          }}
        >
          {lead}
        </Paragraph>

        <Reveal
          delay={0.5}
          effect={[
            { opacity: 0, y: -5 },
            { opacity: 1, y: 0 },
          ]}
          sx={{
            pb: [4, 0, 4, 4],
            pl: 4,
            pr: [4, 8, 0, 0],
            gridArea: [
              "4/1/span 1/span 2",
              "3/2/span 1/span 1",
              "4/1/span 1/span 2",
            ],
            gap: "1rem",
            zIndex: 1,
            position: "relative",
            flexWrap: "wrap",
            placeSelf: ["start", "end", "start"],
            mb: [0, "3rem", 0],
            display: "flex",
          }}
        >
          <Button as={CustomLink} cta link={data.primaryCTA}></Button>
        </Reveal>

        <div
          sx={{
            gridArea: ["2/1/span 1/span 2", null, "1/1/span 1/span 2"],
            maskImage: [
              `linear-gradient(225deg, black 91%, transparent 91%)`,
              null,
              "none",
            ],
            position: ["relative", null, "absolute"],
            ml: [null, null, "43.5%", 20],
            left: ["-30%", 0, null],
            mb: ["-30%", "-10%", null],
            mt: ["-15%", "-10%", "0%", null],
            width: ["160%", "100%", "897px", "897px"],
            maskImage: [
              "linear-gradient(to top,  transparent calc(17%), #000 calc(22%), #000 calc(85%), transparent calc(90%))",
              null,
              "none",
            ],
          }}
        >
          <LayoutGroup id={data._key}>
            <motion.svg
              sx={{ overflow: "visible" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 896.5 727.5"
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              variants={parentVariant}
            >
              <HeroAnimation id={data._key} loop="intersectingLines" />
              <HeroAnimation id={data._key} loop="introPaths" />

              <HeroAnimation loop="flow-1" />
              <HeroAnimation loop="flow-2" />
              <HeroAnimation loop="flow-3" />
              <HeroAnimation loop="flow-4" />

              <HeroAnimation loop="secondaryCards" />
              <HeroAnimation loop="liquidateCard" />
              <HeroAnimation loop="checkReview" id={data._key} />

              <HeroAnimation loop="globalNotifications" />
              <HeroAnimation loop="liquidate" id={data._key} />
              <HeroAnimation loop="taxManager" />
              <HeroAnimation loop="taxAdvisor" />
              <HeroAnimation loop="offSite" />
            </motion.svg>
          </LayoutGroup>
        </div>
        <motion.div
          className="heroBg"
          variants={bgVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={style.heroBg}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
