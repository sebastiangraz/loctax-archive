import React, { useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import Icon from "../components/icon";
import { Text } from "theme-ui";

const accordionAnim = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: "0px",
    // transition: {
    //   height: { delay: 0.5 },
    // },
  },
};

const style = {
  accordion: {
    width: "100%",
  },
  accordionButton: {
    all: "unset",
    variant: "text.navlink",
    width: "100%",
    alignItems: "center",
    display: "flex",
    borderBottom: "1px solid currentColor",
    justifyContent: "space-between",
    py: 2,
    px: "0px",
    fontSize: 2,
    textDecoration: "none",
  },
  accordionContent: {
    overflow: "hidden",
  },
};

const Accordion = ({
  id,
  title,
  isOpen = false,
  isControlled = false,
  onToggle = () => {},
  className,
  children,
  buttonStyle,
}) => {
  return (
    <div key={id} sx={style.accordion}>
      {!isControlled && (
        <button
          onClick={() => onToggle(id, !isOpen)}
          aria-expanded={isOpen}
          sx={{ ...(buttonStyle ? buttonStyle : style.accordionButton) }}
          aria-controls={`accordion-${id}`}
        >
          <Text sx={{ mr: "0.25rem" }}>{title}</Text>
          <div
            sx={{
              position: "relative",
              svg: {
                transition: ".3s cubic-bezier(.22,1,.36,1)",
                width: "11.5px",
                height: "8px",
                transformOrigin: "50% 45%",
                transform: "rotate(0deg)",
                ...(isOpen && {
                  transform: "rotate(180deg)",
                }),
              },
            }}
          >
            <Icon
              viewBox="0 0 11.5 6.5"
              name="Chevron Down"
              color="currentColor"
              id={id}
            />
          </div>
        </button>
      )}

      <motion.div
        id={`accordion-${id}`}
        sx={style.accordionContent}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={accordionAnim}
        transition={{ duration: 0.5, ease: [0.9, 0.2, 0.22, 1.0] }}
      >
        <Text>{children}</Text>
      </motion.div>
    </div>
  );
};

export default Accordion;
