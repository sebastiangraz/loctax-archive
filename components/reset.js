// styles/Reset.tsx
import { css, Global, GlobalProps } from "@emotion/react";

export function Reset(props) {
  return (
    <Global
      {...props}
      styles={css`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url("/fonts/walsheim-regular.woff2") format("woff2");
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 500;
          font-style: normal;
          font-display: swap;
          src: url("/fonts/walsheim-medium.woff2") format("woff2");
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 700;
          font-style: normal;
          font-display: swap;
          src: url("/fonts/walsheim-bold.woff2") format("woff2");
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 400;
          font-style: italic;
          font-display: swap;
          src: url("/fonts/walsheim-regular-oblique.woff2") format("woff2");
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 500;
          font-style: italic;
          font-display: swap;
          src: url("/fonts/walsheim-medium-oblique.woff2") format("woff2");
        }

        @font-face {
          font-family: "Walsheim";
          font-weight: 700;
          font-style: italic;
          font-display: swap;
          src: url("/fonts/walsheim-bold-oblique.woff2") format("woff2");
        }
      `}
    />
  );
}
