import { getArticle, getAllDocSlugs } from "../../data";
import BlockContent from "../../components/block-content";
import Layout from "../../components/layout";
import Reveal from "../../components/reveal";
import { Button, Flex, Themed, Text } from "theme-ui";
import Link from "next/link";
import Photo from "../../components/photo";
import { Width } from "../../components/width";
import { Author } from "../../components/author";
import TimeAgo from "react-timeago";
import React from "react";
import Head from "next/head";
//https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
// do this

const Article = ({ data }) => {
  const { page, site } = data;
  const siteTitle = site.title;
  return (
    <Layout site={site} page={page}>
      <Head>
        <title>{`${siteTitle} · ${page?.seo?.metaTitle || page?.title}`}</title>
      </Head>
      <article sx={{ variant: "layout.row", my: 3 }}>
        <Reveal
          effect={[
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0 },
          ]}
          childDelay={0.2}
        >
          <Themed.h1
            sx={{
              textAlign: ["left", "center"],
              mx: [0, "auto"],
              maxWidth: ["100%", "70%"],
            }}
            className="balanced"
          >
            {page?.title}
          </Themed.h1>
          {page?.name && (
            <Flex
              sx={{
                gap: "1rem",
                alignItems: "center",
                justifyContent: ["flex-start", "center"],
                flexWrap: "wrap",
              }}
            >
              <Flex
                sx={{
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Author
                  sx={{ width: "5rem", height: "5rem" }}
                  name={page?.name}
                  asset={page?.authorImage}
                ></Author>
                <Text>{page?.name}</Text>
              </Flex>
              <span sx={{ display: ["none", "block"] }}>{"·"}</span>
              {page?.date && (
                <Text>
                  <TimeAgo date={new Date(page?.date).toDateString()} />
                </Text>
              )}
            </Flex>
          )}

          <Width value={[12, 12, 10]} sx={{ m: "0 auto" }}>
            <Photo
              photo={page?.image}
              srcSizes={[400, 1064, 1512, 2128]}
              quality={90}
              sx={{
                my: "4rem",
                img: {
                  borderRadius: "default",
                },
              }}
            />
          </Width>
          <section
            sx={{
              mt: "4rem",
              display: "flex",
              flexDirection: "column",
              maxWidth: "60ch",
              mx: [0, "auto"],
            }}
          >
            <BlockContent blocks={page?.content} />
            <Link href="/articles" passHref scroll={false}>
              <Button
                variant="primarySmall"
                sx={{ mt: 3, mx: [0, "auto"], placeSelf: ["start", "center"] }}
                as="a"
              >
                More articles
              </Button>
            </Link>
          </section>
        </Reveal>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params, preview, previewData }) {
  const articleData = await getArticle(params.slug, {
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      data: articleData,
    },
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllDocSlugs("article");

  return {
    paths:
      allArticles?.map((page) => {
        return {
          params: {
            slug: page.slug,
          },
        };
      }) || [],
    fallback: false,
  };
}

export default Article;
