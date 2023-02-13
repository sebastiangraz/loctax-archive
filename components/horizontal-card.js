import React from "react";

import BlockContent from "./block-content";
import Photo from "./photo";
import { Themed } from "theme-ui";
import ScrollParallax from "./scroll-parallax";

const HorizontalCard = ({ data = {}, indented }) => {
  const { title, lead, image } = data;

  const style = {
    component: {
      flexDirection: "column",
    },
    image: {
      width: "100%",
      maxWidth: "24rem",
      minWidth: "12rem",
      display: "block",
      flex: "1",
      p: [4, 4, 2],
    },
    block: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div
      sx={{
        padding: [
          `calc(100% / ((1288 - ${4 * 56}) / 56))`,
          `calc(100% / ((1288 - ${4 * 56}) / 56))`,
        ],
        mx: `calc(100% / ((1288 - ${4 * 56}) / -${indented && 56}))`,
        mt: `calc(100% / ((1288 - ${4 * 56}) / -${indented && 56}))`,
        borderRadius: ["small", "default"],
        bg: "green",
        color: "cyan",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div sx={{ width: "46ch", mr: 4 }}>
        {title && (
          <Themed.h1 className="balanced" sx={{ mt: 0 }}>
            {title}
          </Themed.h1>
        )}
        <BlockContent sx={style.block} blocks={lead} />
      </div>
      <ScrollParallax sx={style.image} offset={-10}>
        <Photo photo={image} hasPlaceholder={false} />
      </ScrollParallax>
    </div>
  );
};

export default HorizontalCard;
