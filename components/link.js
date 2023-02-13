import React from "react";
import NextLink from "next/link";
import { getStaticRoute, getDynamicRoute } from "../lib/routes";

const Link = ({ link, cta, children, ...rest }) => {
  const isInternal = link.linkType === "internal";
  const isLink = !!link.url;
  const isHighlighted = !!link.highlighted;
  const isHideOnMobile = !!link.hideOnMobile;
  const isStatic = getStaticRoute(link.page?.type);
  const style = {
    linkStyle: {
      ...(!cta
        ? {
            variant: "text.navlink",
          }
        : {
            variant: "text.link",
          }),
      ...(isHighlighted && {
        variant: "text.navlink.highlighted",
      }),
      // ...(isHideOnMobile && {
      //   display: ["none", "inherit"],
      // }),
      ...(link.isButton && {
        variant: "buttons.primary",
        ...(link.styles?.isSmall && {
          px: "0.85rem",
          py: "0.25rem",
          display: "inline",
        }),
        ...(link.styles?.isSecondary && {
          variant: "buttons.secondary",
        }),
      }),
    },
  };

  // Link that can be both
  // Todo make links explicit for internal or external, dont rely on isLink, because in the CMS it can be both sometimes.
  if (isInternal) {
    const isDynamic = getDynamicRoute(link.page?.type);
    const isHome = link.page?.isHome;
    const isArticle = link.page?.type === "article";
    return (
      <NextLink
        passHref
        href={
          isHome
            ? "/"
            : isStatic !== false
            ? `/${isStatic}`
            : `${isArticle ? "/articles" : ""}/${
                isDynamic ? `${isDynamic}/` : ""
              }${link.page?.slug}`
        }
        scroll={false}
      >
        <a sx={style.linkStyle} {...rest}>
          {link.title || children}
        </a>
      </NextLink>
    );
  }
  // External Link
  if (isLink) {
    return (
      <a
        href={link.url}
        target={!link.url.match("^mailto:") ? "_blank" : null}
        rel="noopener noreferrer"
        sx={style.linkStyle}
        {...rest}
      >
        {link.title || children}
      </a>
    );
    // Internal Page
  } else {
    const isDynamic = getDynamicRoute(link.page?.type);
    const isHome = link.page?.isHome;
    const isArticle = link.page?.type === "article";
    return (
      <NextLink
        passHref
        href={
          isHome
            ? "/"
            : isStatic !== false
            ? `/${isStatic}`
            : `${isArticle ? "/articles" : ""}/${
                isDynamic ? `${isDynamic}/` : ""
              }${link.page?.slug}`
        }
        scroll={false}
      >
        <a sx={style.linkStyle} {...rest}>
          {link.title || children}
        </a>
      </NextLink>
    );
  }
};

export default Link;
