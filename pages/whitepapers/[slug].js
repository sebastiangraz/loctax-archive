import { getWhitepaper, getAllDocSlugs } from "../../data";
import BlockContent from "../../components/block-content";
import Layout from "../../components/layout";
import Reveal from "../../components/reveal";
import { Themed } from "theme-ui";

//https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
// do this

const Article = ({ data }) => {
  const { page, site } = data;

  return (
    <Layout site={site} page={page}>
      <article sx={{ variant: "layout.row", my: 3 }}>
        <Reveal
          effect={[
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0 },
          ]}
          childDelay={0.2}
        >
          <Themed.h1>{page?.title}</Themed.h1>
          <section sx={{ maxWidth: "65ch" }}>
            <BlockContent blocks={page?.content} />
          </section>
        </Reveal>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params, preview, previewData }) {
  const articleData = await getWhitepaper(params.slug, {
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
  const allArticles = await getAllDocSlugs("whitepaper");

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
