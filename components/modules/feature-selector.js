import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Box, Flex, Text, Themed } from "theme-ui";
import Photo from "../photo";
import Reveal from "../reveal";
import { Width } from "../width";

const FeatureSelector = ({ data }) => {
  const selectorVariant = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: -8,
    },
  };

  const selectorImageVariant = {
    hidden: {
      y: 14,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    hide: {
      y: -14,
      opacity: 0,
    },
  };

  const selectorTransitionDelay = {
    type: "spring",
    duration: 0.7,
  };

  const [selectedTab, setSelectedTab] = useState(data?.features[0]);

  return (
    <LayoutGroup id={data._key}>
      <section className="section">
        <div sx={{ variant: "layout.row" }}>
          <Reveal>
            <Themed.h1>{data.header}</Themed.h1>
          </Reveal>
          <Flex
            sx={{
              justifyContent: "space-between",
              width: "100%",
              gap: 2,
              flexDirection: ["column", "column", "row"],
            }}
          >
            <Width
              value={[12, 12, 8]}
              sx={{
                order: [1, null, 0],
                borderRadius: "default",
                flex: 1,
                display: "grid",
                background: "ui",
                height: "100%",
                minHeight: ["360px", "500px"],
                overflow: "hidden",
              }}
            >
              <Reveal childStyle={{ display: "flex" }} sx={{ display: "grid" }}>
                <AnimatePresence exitBeforeEnter>
                  <div
                    key={selectedTab.featureTitle + data._key}
                    sx={{
                      display: "grid",
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Flex
                      sx={{
                        p: 4,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        gridArea: "-1/1",
                      }}
                    >
                      <motion.div
                        variants={selectorVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hide"
                        transition={selectorTransitionDelay}
                      >
                        <Themed.h2
                          sx={{ my: 0, mr: [0, "3rem"], maxWidth: "18ch" }}
                        >
                          {selectedTab
                            ? selectedTab.featureDescription
                            : "Empty"}
                        </Themed.h2>
                      </motion.div>
                    </Flex>
                    <div
                      sx={{
                        maskImage: [
                          "linear-gradient(to top, #000 50%, transparent 90%)",
                          "none",
                        ],
                        maskSize: "100% 100%",
                        maskPosition: "0px 100%",
                        display: "grid",
                        gridArea: "-1/1",
                      }}
                    >
                      <motion.div
                        variants={selectorImageVariant}
                        transition={selectorTransitionDelay}
                        initial="hidden"
                        animate="visible"
                        exit="hide"
                      >
                        <Photo
                          photo={selectedTab.image}
                          hasPlaceholder={false}
                          layout="fill"
                          sx={{
                            position: "relative",
                            gridArea: "-1/1",
                            width: "100%",
                            height: "100%",
                            "img.object-cover": {
                              objectPosition: [
                                "90% 0%",
                                "80% 50%",
                                null,
                                "inherit",
                              ],
                            },
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </AnimatePresence>
              </Reveal>
            </Width>

            <Width value={[12, 12, 4]} sx={{ order: [0, null, 1] }}>
              <nav>
                <div
                  sx={{
                    m: 0,
                    mb: 2,
                    p: 0,
                    display: "inline-grid",
                    gap: "0.25rem",
                  }}
                >
                  <Reveal
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    childStyle={{
                      width: ["auto", null, "100%"],
                    }}
                    effect={[
                      { opacity: 0, y: -10 },
                      { opacity: 1, y: 0 },
                    ]}
                    duration={1}
                    childDelay={0.25}
                  >
                    {data?.features.map((item) => (
                      <button
                        sx={{
                          all: "unset",
                          mb: "0.25rem",
                          mr: "0.25rem",
                          display: ["inline-block"],
                          position: "relative",
                          cursor: "pointer",
                          listStyle: "none",
                          padding: ["0.25rem 0.75rem", "0.5rem 1.25rem"],
                          borderRadius: "24px",
                          "&:hover, &:focus-visible": {
                            boxShadow: "0 0 0 1px rgba(0,0,0,0.2) inset",
                          },
                        }}
                        key={item.featureTitle}
                        className={item === selectedTab ? "selected" : ""}
                        onClick={() => setSelectedTab(item)}
                      >
                        <Text
                          sx={{ display: "inline-flex", m: 0 }}
                        >{`${item.featureTitle}`}</Text>

                        {item === selectedTab ? (
                          <motion.div
                            style={{
                              top: 0,
                              left: 0,
                              borderRadius: "24px",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              boxShadow: "0px 0px 0px 1px currentColor inset",
                              zIndex: -1,
                            }}
                            className="underline"
                            layoutId="underline"
                          />
                        ) : null}
                      </button>
                    ))}
                  </Reveal>
                </div>
              </nav>
            </Width>
          </Flex>
        </div>
      </section>
    </LayoutGroup>
  );
};

export default FeatureSelector;
