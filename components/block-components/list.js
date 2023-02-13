import React from "react";
import bullet from "../../public/listBullet.svg";

export const List = ({ props }) => {
  return (
    <React.Fragment>
      {props.type === "number" && (
        <ol
          sx={{
            padding: 0,
            counterReset: "item",
            "& > li": {
              mt: "0.5rem",
              position: "relative",
              counterIncrement: "item",
              listStyle: "none",
              display: "table",
              "&:before": {
                right: " 100%",
                opacity: 0.7,
                paddingRight: "0.5em",
                content: 'counters(item, ".") " "',
                display: "table-cell",
              },
            },
          }}
        >
          {props.children}
        </ol>
      )}

      {props.type === "bullet" && (
        <ul
          sx={{
            padding: 0,
            "& > li": {
              mt: "0.5rem",
              position: "relative",
              listStyle: "none",
              display: "table",
              "ul li:before": {
                background: "none",
                maskImage: "none",
                content: `"◦"`,
              },
              "ul li ul li:before": {
                background: "none",
                maskImage: "none",
                content: `"▪"`,
              },
              "ul li ul li ul li:before": {
                background: "none",
                maskImage: "none",
                content: `"▫"`,
              },
              "&:before": {
                flexShrink: 0,
                width: "11px",
                height: "11px",
                right: "100%",
                paddingRight: "0.5rem",
                display: "table-cell",
                content: '""',
                maskPosition: "0 0.35em",
                maskRepeat: "no-repeat",
                maskSize: "11px",
                maskImage: `url(${bullet.src})`,
                background: "currentColor",
              },
            },
          }}
        >
          {props.children}
        </ul>
      )}
    </React.Fragment>
  );
};
