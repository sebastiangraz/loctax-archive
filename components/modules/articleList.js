import { tint, darken } from "@theme-ui/color";
import {
  Themed,
  Flex,
  Text,
  Avatar,
  Box,
  Grid,
  Paragraph,
  NavLink,
} from "theme-ui";
import Link from "next/link";
import { Reveal } from "../../components/reveal";
import TimeAgo from "react-timeago";
import { Author } from "../../components/author";
import Icon from "../icon";

export const style = {
  grid: {
    gridTemplateColumns: (t) => `1fr minmax(max-content, 0.5fr)`,
    alignItems: ["start", "center"],
    // gridAutoFlow: ["row ", "column"],
    py: "1.5rem",
    px: [2, "1.5rem"],
    boxShadow: (t) => `0 1px 0 0 ${tint("text", 0.1)(t)} inset`,
    justifyContent: ["space-between"],
    display: ["flex", "grid"],
    rowGap: "0.5rem",
    flexDirection: ["column", "row"],
    transition:
      ".8s cubic-bezier(.22,1,.36,1) background, .8s cubic-bezier(.22,1,.36,1) box-shadow",
    "&:hover": {
      background: (t) => `${darken("background", 0.03)(t)}`,
      cursor: "pointer",
    },
  },
  paragraph: {
    whiteSpace: ["normal", null, "nowrap"],
    overflow: "hidden",
    textOverflow: "ellipsis",
    m: 0,
    display: "inline-block",
  },
  metaWrapper: {
    display: "flex",
    alignItems: ["center"],
    justifyContent: "space-between",
    gap: "2em",
    width: "100%",
    justifySelf: "flex-end",
  },
  author: {
    display: "flex",
    gap: "1rem",
    height: "100%",
    whiteSpace: "pre",
    alignItems: "center",
  },
  date: {
    display: ["none", null, "block"],
    lineHeight: "1.1",
    whiteSpace: "pre",
  },
};

const ArticleList = ({ data }) => {
  const { header, limit, articleList } = data;
  return (
    <section className="section" sx={{ position: "relative" }}>
      <div sx={{ variant: "layout.row" }}>
        <Themed.h1>{header}</Themed.h1>
        <Flex sx={{ flexDirection: "column" }}>
          <Reveal
            effect={[
              { opacity: 0, x: -5 },
              { opacity: 1, x: 0 },
            ]}
          >
            {articleList.slice(0, limit ? limit : 5).map((article) => {
              const { _id, slug, title, author, name, authorImage, date } =
                article;
              return (
                <Link
                  key={_id}
                  scroll={false}
                  passHref
                  href="/articles/[slug]"
                  as={`/articles/${slug}`}
                >
                  <a sx={{ textDecoration: "none", color: "inherit" }}>
                    <Grid sx={style.grid}>
                      <Themed.h4 sx={{ ...style.paragraph, m: 0 }}>
                        {title}
                      </Themed.h4>

                      <Flex sx={style.metaWrapper}>
                        {author && (
                          <Flex sx={style.author}>
                            <Author
                              sx={{ width: "2rem", height: "2rem" }}
                              name={name}
                              asset={authorImage}
                            />
                            {name}
                          </Flex>
                        )}
                        <Text variant="label" sx={style.date}>
                          {date && (
                            <TimeAgo date={new Date(date).toDateString()} />
                          )}
                        </Text>

                        <Icon
                          sx={{
                            width: "0.75rem",
                            display: ["none", "block"],
                          }}
                          name="Arrow"
                          id={slug}
                        />
                      </Flex>
                    </Grid>
                  </a>
                </Link>
              );
            })}
          </Reveal>
        </Flex>
      </div>
    </section>
  );
};

export default ArticleList;
