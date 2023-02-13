import React, { memo } from "react";

import { Box, Grid, Paragraph, Themed, useThemeUI } from "theme-ui";
import { List } from "./list";
import Photo from "./photo";

const style = {
  section: {
    position: ["sticky", "relative"],
    top: "0",
    maxWidth: "1288px",
    height: "100vh",
    pointerEvents: "none",
    flexDirection: "column",
    "&:first-of-type": {
      "& > *": {
        ml: "0px",
      },
    },
  },
  innerSection: {
    mt: ["0", "25vh"],
    gridColumn: "span 12",
    top: ["14rem", 0],
    position: "relative",
    borderRadius: ["default", "large"],
    overflow: "hidden",
    pointerEvents: "all",
    transition: "background 1s ease, box-shadow 1s ease",
    background: "#fff",
  },
};

function getTextColorFromBg(data, context) {
  let textColor = null;
  switch (data) {
    case context.theme.rawColors.green:
      textColor = context.theme.rawColors.cyan;
      break;
    case context.theme.rawColors.salmon:
      textColor = context.theme.rawColors.maroon;
      break;
    case context.theme.rawColors.maroon:
      textColor = context.theme.rawColors.salmon;
      break;
    case context.theme.rawColors.cyan:
      textColor = context.theme.rawColors.green;
      break;
    default:
      break;
  }
  return textColor;
}

export const ParallaxCard = memo(
  ({ data, index, isSolo, columnCountEqualTo12, onClick, active }) => {
    const context = useThemeUI();
    const textColor = getTextColorFromBg(data.color, context);
    const { color, heading, id, image, lead, listItems, sizes, title } = data;
    return (
      <div
        data-index={index}
        sx={{
          ...style.section,
        }}
      >
        <div
          onClick={isSolo || columnCountEqualTo12 ? null : onClick}
          sx={{
            ...style.innerSection,
            color: textColor,
            top: [`calc(13rem + ${index * 0.75}rem)`, 0],
            //Safari dynamic width fix
            height: [`calc(100dvh - 15rem - ${index * 0.75}rem)`, "70%"],
            height: [`calc(100vh - 15rem - ${index * 0.75}rem)`, "70%"],
            transition: "opacity 0.5s ease",

            willChange: "opacity",
            background: color ? color : "ui",
          }}
        >
          <div
            sx={{
              height: "100%",
              transition: "opacity 0.5s ease",
              opacity: [active ? 1 : 0],
            }}
          >
            <Grid
              sx={{
                gap: 0,
                height: "100%",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto 1fr",
                alignContent: "stretch",
              }}
            >
              <Box
                sx={{
                  pt: ["2rem", "3rem", "4rem"],
                  px: ["2rem", "3rem", "4rem"],

                  gridArea: "1/1",
                  gridColumn: "span 2",
                }}
              >
                <Themed.h1 className="balanced" sx={{ m: 0 }}>
                  {heading}
                </Themed.h1>
                <Themed.h4 sx={{ maxWidth: "37ch" }}>{lead}</Themed.h4>
              </Box>
              <Photo
                layout="contain"
                photo={image}
                hasPlaceholder={false}
                sx={{
                  height: ["17rem", "100%"],
                  width: ["100%", "100%", "110%"],
                  gridArea: ["-1/1 / span 1 / span 2", "2/2"],

                  placeSelf: "end",
                  "img.object-contain": {
                    objectFit: "contain",
                    objectPosition: ["100% 100%"],
                    pl: [5, 0],
                  },
                }}
              />
              <List
                large={listItems?.size === "large"}
                sx={{
                  width: ["100%", "25rem", "30rem"],
                  display: ["none", "block"],
                  gridArea: "2/1",
                  pb: ["2rem", "3rem", "4rem"],
                  px: ["2rem", "3rem", "4rem"],
                  alignSelf: "end",
                  gridColumn: ["span 2", "span 1"],
                }}
              >
                {listItems?.featureList?.map((item) => {
                  const { id, string } = item;
                  return <React.Fragment key={id}>{string}</React.Fragment>;
                })}
              </List>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
);

ParallaxCard.displayName = "ParallaxCard";
