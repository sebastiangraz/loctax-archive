import React from "react";
import { useRouter } from "next/router";
import { Text } from "theme-ui";
import { ConditionalWrapper } from "../lib/helpers";
import { motion } from "framer-motion";
import CustomLink from "../components/link";

const PromoBar = React.memo(({ data = {} }) => {
  const { enabled, display, text, link } = data;
  const router = useRouter();

  // bail if no display or text
  const notDisplayed = !enabled || !display || !display.trim() || !text;
  const isHome = display === "home" && router.asPath !== "/";

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: ["auto", "32px"],
        py: !notDisplayed && !isHome ? "0.5rem" : 0,
        borderBottom: !notDisplayed && !isHome ? ["1px solid", "none"] : "none",
      }}
    >
      {!notDisplayed && !isHome && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              flex: "1",
              display: ["none", "flex"],
              alignItems: "center",
              position: "relative",
            }}
          >
            <motion.div
              style={{ originX: 0 }}
              initial={{ width: "90%" }}
              animate={{ width: "100%" }}
              exit={{ duration: 0.2 }}
              transition={{
                ease: [0.1, 0.05, 0.01, 0.9],
                opacity: { delay: 0.25, duration: 1 },
                duration: 1,
                delay: 0.2,
              }}
              sx={{
                width: "100%",
                bg: "currentColor",
                height: "1px",
              }}
            />
            <motion.div
              style={{ originX: "2px", originY: "2px" }}
              initial={{ scale: 0.1, rotate: "45deg" }}
              animate={{ scale: 1, rotate: "45deg" }}
              exit={{ delay: 0, duration: 0.2 }}
              transition={{ duration: 1 }}
              sx={{
                flexShrink: 0,
                height: "5px",
                width: "5px",
                background: "currentColor",
              }}
            ></motion.div>
          </motion.div>
          <div sx={{ display: [null, "contents"], variant: "layout.row" }}>
            <Text
              variant="small"
              sx={{
                px: ["0", "1rem"],
                py: "0.5em",
              }}
            >
              <span sx={{ mr: "0.5rem" }}>{text}</span>
              <ConditionalWrapper
                condition={link}
                wrapper={(children) => (
                  <CustomLink cta link={{ ...{ page: link } }}>
                    {children}
                  </CustomLink>
                )}
              >
                <span sx={{ whiteSpace: "pre" }}>{"Read about it"}</span>
              </ConditionalWrapper>
            </Text>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              flex: "1",
              display: ["none", "flex"],
              alignItems: "center",
              position: "relative",
              justifyContent: "flex-end",
            }}
          >
            <motion.div
              style={{ originX: "2px", originY: "2px" }}
              initial={{ scale: 0.1, rotate: "45deg" }}
              animate={{ scale: 1, rotate: "45deg" }}
              exit={{ delay: 0, duration: 0.2 }}
              transition={{ duration: 1 }}
              sx={{
                flexShrink: 0,
                height: "5px",
                width: "5px",
                background: "currentColor",
              }}
            ></motion.div>
            <motion.div
              style={{ originX: 0 }}
              initial={{ width: "90%" }}
              animate={{ width: "100%" }}
              exit={{ duration: 0.2 }}
              transition={{
                ease: [0.1, 0.05, -0.01, 0.9],
                opacity: { delay: 0.25, duration: 1 },
                duration: 1,
                delay: 0.2,
              }}
              sx={{
                width: "100%",
                bg: "currentColor",
                height: "1px",
              }}
            />
          </motion.div>
        </>
      )}
    </div>
  );
});

PromoBar.displayName = "PromoBar";
export default PromoBar;
