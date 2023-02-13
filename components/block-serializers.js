import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import cx from "classnames";
import { Themed, Text, Paragraph, Heading } from "theme-ui";
import { List } from "../components/block-components/list";
import Photo from "../components/photo";
import CustomLink from "../components/link";

export const blockSerializers = {
  types: {
    block: (props) => {
      const { markDefs, style = "normal" } = props.node;

      // check if our block contains a button
      const hasButton =
        markDefs &&
        markDefs.some((c) => c._type === "link" && c.isButton === true);

      // build our mock header styles
      if (style === "h1") {
        return (
          <Themed.h1 sx={{ all: hasButton && "unset" }} className="balanced">
            {props.children}
          </Themed.h1>
        );
      }

      if (style === "h2") {
        return (
          <Themed.h2 sx={{ all: hasButton && "unset" }}>
            {props.children}
          </Themed.h2>
        );
      }

      if (style === "h3") {
        return (
          <Themed.h3 sx={{ all: hasButton && "unset" }} className={cx("is-h3")}>
            {props.children}
          </Themed.h3>
        );
      }

      if (style === "h4") {
        return (
          <Themed.h4 sx={{ all: hasButton && "unset" }} className={cx("is-h4")}>
            {props.children}
          </Themed.h4>
        );
      }

      if (style === "label") {
        return (
          <Text
            variant="label"
            sx={{ all: hasButton && "unset" }}
            className={cx("label")}
          >
            {props.children}
          </Text>
        );
      }

      if (style === "normal") {
        return (
          <Paragraph variant="block" className={cx("paragraph")}>
            {props.children}
          </Paragraph>
        );
      }

      // go through our remaing, true header styles
      if (/^h\d/.test(style)) {
        return React.createElement(
          style,
          { className: hasButton ? "has-btn" : null },
          props.children
        );
      }

      // handle all other blocks with the default serializer
      return BlockContent.defaultSerializers.types.block(props);
    },
    photo: ({ node }) => {
      return (
        <Photo
          sx={{
            my: "5rem",
            img: {
              borderRadius: "default",
            },
          }}
          photo={node}
        />
      );
    },
    horizontalRule: () => (
      <hr
        sx={{
          all: "unset",
          my: "6rem",
          height: "1px",
          width: "100%",
          background: "text",
          display: "inline-block",
        }}
      />
    ),
  },
  marks: {
    link: ({ mark, children }) => {
      return <CustomLink cta link={{ ...mark, ...{ title: children[0] } }} />;
    },
  },
  list: (props) => <Text>{<List props={props} />}</Text>,
};
