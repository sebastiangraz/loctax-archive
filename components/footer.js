import Newsletter from "../components/newsletter";
import Menu from "../components/menu";
import Icon from "../components/icon";
import { Button, Flex, Paragraph, Text, Themed } from "theme-ui";
import { transparentize } from "@theme-ui/color";
import { List } from "./list";
import { Width } from "./width";
import CustomLink from "../components/link";
import Reveal from "./reveal";

const style = {
  borderTop: {
    background: "linear-gradient(to right, currentColor 80%, transparent 80%)",
    height: "1px",
    width: "100%",
    top: "-1px",
    position: "relative",
    variant: "layout.row",
  },
  wrapper: {
    contain: "layout",
    overflow: ["hidden", "visible"],
    borderTop: "1px solid",
    borderImage: [
      "none",
      "linear-gradient(to left, transparent 50%, black 50%) 1",
    ],
    position: "relative",
  },
  footer: {
    variant: "layout.row",
    my: 1,
  },
  footerGrid: {
    columnGap: 2,
    variant: "layout.grid",
  },
  footerItem: {
    py: ["1rem", "2rem"],
    gridColumn: `span 3`,
  },
  ul: {
    p: "0px",
    flexDirection: "column",
    li: {
      listStyle: "none",
      p: "0px",
      mt: "1rem",
      a: {
        fontSize: "inherit",
      },
    },
  },
};
const Footer = ({ data = {} }) => {
  const { blocks } = data;
  return (
    <>
      <div sx={{ variant: "layout.row" }}>
        <Flex
          sx={{
            my: "10rem",
            rowGap: "2em",
            alignItems: "start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: ["row", "column", "row"],
          }}
        >
          <Flex
            sx={{
              alignItems: ["flex-start", "center", "flex-start"],
              width: ["auto", "100%", "auto"],
              flexDirection: ["column", "row", "column"],
              justifyContent: "space-between",
            }}
          >
            <Themed.h1 sx={{ mt: 0 }}>
              <Reveal>
                <span>
                  Built for tomorrow. <br />
                </span>
                <span>Available today.</span>
              </Reveal>
            </Themed.h1>
            <Reveal delay={0.2}>
              <Button as={CustomLink} cta link={data.primaryCTA}></Button>
            </Reveal>
          </Flex>

          <Width value={[12, 12, 5]}>
            <List large sx={{ mt: 0 }}>
              <Text>Plug & play, no implementation needed</Text>
              <Text>No costly maintenance required</Text>
              <Text>One single platform for the tax team</Text>
            </List>
          </Width>
        </Flex>
      </div>

      <footer role="contentinfo" sx={style.wrapper}>
        <div sx={style.borderTop}>
          <svg
            sx={{
              position: "absolute",
              top: "calc(100% - 172px)",
              left: "80%",
            }}
            preserveAspectRatio="xMinYMax meet"
            width="1631"
            height="172"
            viewBox="0 0 1631 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 169.533V142C0.5 126.536 13.036 114 28.5 114H113.5M0.5 169.533H85.5C100.964 169.533 113.5 156.997 113.5 141.533V114M0.5 169.533H0M113.5 114H142.5C157.964 114 170.5 101.464 170.5 86V58.5M113.5 114V86.5C113.5 71.036 126.036 58.5 141.5 58.5H170.5M170.5 58.5H226M226 58.5V29C226 13.536 238.536 1 254 1H281M226 58.5H253C268.464 58.5 281 45.964 281 30.5V1M1631 1H281"
              stroke="currentColor"
            />
          </svg>
        </div>
        <div sx={style.footer}>
          <div sx={style.footerGrid}>
            {blocks &&
              blocks.map((block, key) => (
                <div key={key} sx={style.footerItem}>
                  {block.title && (
                    <Paragraph
                      variant="label"
                      sx={{ color: transparentize("text", 0.4) }}
                    >
                      {block.title}
                    </Paragraph>
                  )}

                  {block.menu?.items && (
                    <Menu items={block.menu.items} sx={style.ul} />
                  )}

                  {block.newsletter && <Newsletter data={block.newsletter} />}

                  {block.social && (
                    <div sx={{ display: "flex", flexWrap: "wrap" }}>
                      {block.social.map((link, key) => {
                        return (
                          <a
                            sx={{
                              fill: transparentize("text", 0.3),
                              width: "2rem",
                              display: "block",
                              variant: "text.navlink",
                            }}
                            key={key}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon name={link.icon} />
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* Put our extras in the last block */}
                  {key === 3 && (
                    <div sx={{ color: transparentize("text", 0.4) }}>
                      <Paragraph variant="label">
                        &copy; {new Date().getFullYear()}. All Rights Reserved.
                      </Paragraph>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
