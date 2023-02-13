import React from "react";

import BlockContent from "./block-content";
import Photo from "../components/photo";
import { Themed } from "theme-ui";

const ImageFeature = ({ data = {} }) => {
  const { title, content, align, image } = data;

  const style = {
    component: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      my: ["1rem", "2rem"],
    },
    image: {
      height: ["5rem"],
      display: "block",
      width: "100%",
      mb: "2rem",
      ".object-contain": {
        objectPosition: align === "center" ? "50% 50%" : "0 0",
      },
    },
    block: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div sx={style.component}>
      {title && <Themed.h4 sx={{ mt: 0 }}>{title}</Themed.h4>}
      <Photo
        layout="contain"
        photo={image}
        sx={style.image}
        hasPlaceholder={false}
      />
      <BlockContent className="balanced" sx={style.block} blocks={content} />
    </div>
  );
};

export default ImageFeature;
