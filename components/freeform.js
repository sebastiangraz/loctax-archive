import React from "react";
import { getMaxWidth } from "../lib/helpers";
import BlockContent from "../components/block-content";

const Freeform = ({ data }) => {
  const { content, maxWidth } = data;
  return (
    <BlockContent
      sx={{
        maxWidth: getMaxWidth(maxWidth?.value),
      }}
      blocks={content}
    />
  );
};

export default Freeform;
