import React from "react";
import { useRouter } from "next/router";

import { getStaticRoute, getActive } from "../lib/routes";

import Dropdown from "../components/menu-dropdown";
import CustomLink from "../components/link";

const Menu = ({
  items,
  isMobileNavOpen,
  hasFocus = true,
  onClick,
  ...rest
}) => {
  const router = useRouter();

  if (!items) return null;

  return (
    <ul {...rest}>
      {items.map((item, key) => {
        const isHiddenOnMobile = !!item.hideOnMobile;
        const isDropdown = !!item.dropdownItems;
        const isStatic = getStaticRoute(item.page?.type);
        const isActive = getActive(isStatic, item?.page?.slug, router);
        const isPostsActive = router.asPath.includes(item?.page?.slug);
        // Dropdown List
        if (isDropdown) {
          const { dropdownItems } = item;
          const activeDropdown =
            dropdownItems.filter((item) => {
              const isStatic = getStaticRoute(item.page?.type);
              return getActive(isStatic, item.page?.slug, router);
            }).length > 0;

          return (
            <li
              sx={{
                ...(isHiddenOnMobile && {
                  display: ["none", "inherit"],
                }),
              }}
              key={key}
              className={activeDropdown ? "is-active" : null}
            >
              <Dropdown
                title={item.title}
                id={item._key}
                items={item.dropdownItems}
                onMouseEnter={onClick}
              />
            </li>
          );

          // single link
        } else {
          return (
            <li
              sx={{
                ...(isHiddenOnMobile && {
                  display: ["none", "inherit"],
                }),
              }}
              key={key}
              className={isPostsActive || isActive ? "is-active" : null}
            >
              <CustomLink
                tabIndex={!hasFocus ? -1 : null}
                link={item}
                onClick={onClick}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
