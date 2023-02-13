import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Icon from "../components/icon";
import { getStaticRoute, getActive } from "../lib/routes";
import CustomLink from "../components/link";

const Dropdown = ({ id, title, items, onClick }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function menuInteraction(bool) {
    setIsOpen(bool);
  }

  const list = {
    hidden: {
      height: "0rem",
      background: "var(--theme-ui-colors-background)",
      // opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "afterChildren",
      },
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      height: "2.5rem",
      background: "var(--theme-ui-colors-background)",
      // opacity: 1,
      display: "flex",
      transition: {
        duration: 0.1,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      onMouseEnter={() => menuInteraction(true)}
      onMouseLeave={() => menuInteraction(false)}
    >
      <button
        sx={{ all: "unset", variant: "text.navlink", paddingRight: "1rem" }}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div
          sx={{
            position: "absolute",
            display: "inline-block",
            ml: "4px",
            svg: {
              transition: ".3s cubic-bezier(.22,1,.36,1)",
              top: "0.1rem",
              position: "relative",
              width: ".75rem",
              height: "100%",
              transform: "rotate(0deg)",
              ...(isOpen && {
                transform: "rotate(45deg)",
              }),
            },
          }}
        >
          <Icon color="currentColor" name="Plus"></Icon>
        </div>
      </button>

      <div
        id={`dropdown-${id}`}
        sx={{
          width: "100%",
          position: ["relative", "absolute"],
          left: 0,
          display: "flex",
        }}
      >
        <motion.ul
          variants={list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          sx={{
            bg: "ui",
            p: "0px",
            position: "relative",
            left: "0px",
            listStyle: "none",
            display: "flex",
            top: "0.5rem",
            width: "100%",
            alignItems: "center",
            justifyContent: ["flex-start", "center"],
            "> * ": {
              pr: "0.75rem",
              pb: "0.75rem",
            },
            "> *:last-child": {
              pr: 0,
            },
          }}
        >
          {items.map((item, key) => {
            const isStatic = getStaticRoute(item.page?.type);
            const isActive = getActive(isStatic, item.page?.slug, router);

            return (
              <motion.li
                sx={{
                  variant: "text.small",
                  a: { padding: ["0.5rem 0.5rem 0.5rem 0", "0.5rem"] },
                }}
                variants={listItem}
                key={key}
                className={isActive ? "is-active" : null}
              >
                <CustomLink
                  tabIndex={!isOpen ? -1 : null}
                  link={item}
                  onClick={onClick}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Dropdown;
