import { Flex, Paragraph, Button, Themed, Text } from "theme-ui";
import Reveal from "../../reveal";
import { Width } from "../../width";
import { transparentize } from "@theme-ui/color";
import { FeatureHeroAnimation } from "./featureHeroAnimation";
import { List } from "../../list";
import React, { useState } from "react";
import Photo from "../../photo";
import CustomLink from "../../../components/link";
import { LayoutGroup, motion } from "framer-motion";
import ScrollParallax from "../../scroll-parallax";
import Accordion from "../../accordion";

const accordionAnim = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const FeatureHero = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const onToggle = (id, status) => {
    setActiveAccordion(status ? id : null);
  };
  const { header, lead, featureHeader, features } = data;

  return (
    <section>
      <div
        sx={{
          background: "text",
          overflow: "hidden",
          color: "purple",
          position: "relative",
          display: "grid",
        }}
      >
        <div
          sx={{
            variant: "layout.row",
            display: "grid",
            gridArea: "1/-1",
            zIndex: 3,
          }}
        >
          <ScrollParallax offset={-32} sx={{ width: "100%", height: "100%" }}>
            <Reveal
              sx={{
                display: "flex",
                alignSelf: "start",
                flexDirection: ["column", "row"],
                textAlign: ["center", "left"],
                alignItems: ["center", "start"],
                justifyContent: ["center", "space-between"],
                width: "100%",
                pt: ["4rem", "6rem"],
              }}
            >
              <Themed.h1
                sx={{ maxWidth: ["13ch"], mr: ["0", "2rem"], mb: 0, mt: 0 }}
              >
                {header}
              </Themed.h1>
              <Themed.h4
                sx={{
                  maxWidth: ["26ch", "30ch"],
                  justifySelf: "flex-end",
                  mt: ["2rem", 0],
                }}
              >
                {lead}
              </Themed.h4>
            </Reveal>
          </ScrollParallax>
        </div>

        <div
          sx={{
            variant: "layout.row",
            gridArea: "1/-1",
          }}
        >
          <div
            sx={{
              maxWidth: ["auto", null, "100%", "1177px"],
              width: ["auto", null, null, "100%"],

              zIndex: 1,
              position: "relative",
              mx: [-15, 0, 2],
              mb: [0, -2, 0],
              mt: ["4rem", 0],
              display: "flex",
              minHeight: "28rem",
              alignItems: "flex-end",
            }}
          >
            <div
              sx={{
                position: "absolute",
                bottom: 0,
                left: "-56px",
                zIndex: 2,
                width: "calc(100% + 112px)",
                pb: `calc(((924/ 1177) * 100%) + 2px)`,
                background: (t) => [
                  `linear-gradient(to bottom, ${transparentize(
                    "text",
                    0
                  )(t)} 0%, transparent 80%, var(--theme-ui-colors-text) 100%)`,
                  `linear-gradient(to bottom, ${transparentize(
                    "text",
                    0
                  )(t)} 0%, transparent 100%)`,
                ],
              }}
            ></div>

            <LayoutGroup id={data._key}>
              <FeatureHeroAnimation id={data._key} />
            </LayoutGroup>
          </div>
          <div
            sx={{
              zIndex: 3,
              position: "relative",
              mb: 0,
              p: 2,
              background: "purple",
              borderRadius: "large",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              color: "text",
            }}
          >
            <Flex
              sx={{
                flexWrap: "wrap",
                mb: ["2rem", "4rem"],
                justifyContent: "space-between",
                alignItems: "flex-end",
                rowGap: "2rem",
              }}
            >
              <Themed.h1 sx={{ mb: 0, maxWidth: "14ch" }}>
                {featureHeader}
              </Themed.h1>

              {data.primaryCTA && (
                <Button
                  sx={{ placeSelf: "end" }}
                  as={CustomLink}
                  cta
                  link={data.primaryCTA}
                ></Button>
              )}
            </Flex>
            <div
              sx={{
                m: 0,
                p: 0,
              }}
            >
              {features.map((feature) => {
                const {
                  featureDescription,
                  featureTitle,
                  image,
                  listItems,
                  id,
                } = feature;

                return (
                  <div
                    key={id}
                    sx={{
                      boxShadow: `0 -1px 0 0 var(--theme-ui-colors-text)`,
                      listStyle: "none",
                      display: "grid",
                      gridTemplateColumns: ["1fr", "1fr 2fr"],
                      gridGap: [0, "1rem", "2rem"],
                      mb: "5rem",
                      position: "relative",
                    }}
                  >
                    <div
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: ["1.5rem", "3rem"],
                        mt: "2rem",
                      }}
                    >
                      <Text
                        sx={{
                          textTransform: "uppercase",
                          mb: 0,
                          fontWeight: "600",
                          letterSpacing: "subheading",
                        }}
                      >
                        {featureTitle}
                      </Text>
                      <Photo
                        layout="contain"
                        photo={image}
                        hasPlaceholder={false}
                        sx={{
                          height: ["4.5rem", null, "4.5rem"],
                          width: ["6rem", null, "6rem"],
                          display: "block",
                        }}
                      />
                    </div>

                    <div sx={{ mt: ["1rem", "2rem"] }}>
                      <Themed.h3 sx={{ m: 0 }}>{featureDescription}</Themed.h3>

                      <Accordion
                        id={id}
                        title={"Details"}
                        isOpen={id === activeAccordion}
                        onToggle={onToggle}
                        buttonStyle={{
                          all: "unset",
                          variant: "text.navlink",
                          border: "none",
                          height: "2rem",
                          px: "1rem",
                          fontSize: 0,
                          letterSpacing: "0.04em",
                          background: "text",
                          display: "flex",
                          color: "purple",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "pill",
                          flex: "1",
                          mt: "1.5rem",
                          span: {
                            variant: "text.small",
                          },
                        }}
                      >
                        <List
                          large={listItems.size === "large"}
                          sx={{
                            mt: "1.5rem",
                            mb: 0,
                            gridColumn: "span 2",
                            maxWidth: ["100%"],
                          }}
                        >
                          {listItems.featureList.map((item) => {
                            const { id, string, soon } = item;

                            return (
                              <span key={id}>
                                {string}{" "}
                                {soon && (
                                  <Text
                                    variant="small"
                                    sx={{
                                      display: "inline-block",
                                      borderRadius: "pill",

                                      p: "0 0.5rem",
                                      background: "text",
                                      color: "purple",
                                    }}
                                  >
                                    soon
                                  </Text>
                                )}
                              </span>
                            );
                          })}
                        </List>
                      </Accordion>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
