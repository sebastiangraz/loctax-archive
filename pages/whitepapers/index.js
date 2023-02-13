import Link from "next/link";
import { Paragraph, Themed } from "theme-ui";
import Layout from "../../components/layout";
import { Reveal } from "../../components/reveal";
import { Width } from "../../components/width";
import { getWhitepapers } from "../../data";

const Blog = ({ data }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1>Whitepapers</Themed.h1>
        <ul
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            // gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))",
            padding: "0",
            a: {
              listStyle: "none",
              textDecoration: "none",
              background: "background",
              display: "flex",
              listStyle: "none",
              maskSize: "100% 100%",
              borderRadius: "default",
              zIndex: 1,
              minHeight: "440px",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: " 0 0 0 1px inset",
              mt: "3rem",
              backgroundColor: "background",
              maskImage:
                "linear-gradient(45deg, #000 calc(100% - 44px), transparent calc(100% - 44px))",
              background:
                "linear-gradient(45deg, #0000 calc(100% - 45px), #000 calc(100% - 45px), #000 calc(100% - 44px), #0000 calc(100% - 44px))",

              "&:after": {
                content: `""`,
                transform: "translate(0px, 0px)",
                transition: "all 0.2s ease",
                position: "absolute",
                left: "0px",
                top: "0px",
                zIndex: -2,
                borderRadius: "default",
                width: "100%",
                height: "100%",
                boxShadow: "0 0 0 1px currentColor inset",
              },
              "&:before": {
                maskImage:
                  "linear-gradient(45deg, #000 calc(100% - 45px), transparent calc(100% - 45px))",
                content: `""`,
                position: "absolute",
                top: 0,
                background: "background",
                right: 0,
                zIndex: -1,
                borderRadius: "0 0 0 12px",
                boxShadow: "0 0 0 1px inset",
                width: "63px",
                height: "63px",
                display: "block",
              },
              "&:hover, &:focus-visible": {
                "&:after": {
                  transform: "translate(0, 8px)",
                },
              },
            },
          }}
        >
          {page?.posts?.map(
            ({
              url,
              id,
              title = "",
              description,
              slug = "",
              publishedAt = "",
            }) => {
              return (
                slug && (
                  <Width key={id} value={[12, 6, 4]}>
                    <a
                      target="_blank"
                      sx={{ variant: "text.link", flexDirection: "column" }}
                      href={url && url}
                      rel="noreferrer"
                    >
                      <Reveal>
                        <Themed.h3 sx={{ mt: 0, mr: "3rem" }}>
                          {title}
                        </Themed.h3>
                        <Paragraph variant="label"> {description}</Paragraph>
                      </Reveal>
                    </a>
                  </Width>
                )
              );
            }
          )}
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const articlesData = await getWhitepapers({
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      data: articlesData,
    },
  };
}

export default Blog;
