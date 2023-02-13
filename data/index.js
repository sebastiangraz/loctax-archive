import { getSanityClient } from "../lib/sanity";
import * as queries from "./queries";

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getSanityClient().fetch(
    `*[_type == "${doc}" && !(_id in [${queries.homeID}, ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current }`
  );
  return data;
}

// Fetch all our page redirects
export async function getAllRedirects() {
  const data = await getSanityClient().fetch(
    `*[_type == "redirect"]{ from, to }`
  );
  return data;
}

// Fetch a static page with our global data
export async function getStaticPage(pageData, preview) {
  const query = `
  {
    "page": ${pageData},
    ${queries.site}
  }
  `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
  const slugs = [`/${slug}`, slug, `/${slug}/`];

  const query = `
    {
      "page": *[_type == "page" && slug.current in ${JSON.stringify(
        slugs
      )}] | order(_updatedAt desc)[0]{
        modules[hide != true]{
          ${queries.modules}
        },
        title,
        seo
      },
      ${queries.site}
    }
    `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export async function getArticle(slug, preview) {
  const query = `
    {
      "page": *[_type == "article" && slug.current == "${slug}"][0]{
        "id": _id,
        title,
        slug,
        seo,
        "date": publishedAt,
        "image": postImage.photo{
          ${queries.imageMeta}
        },
        "author": author, 
        "name": author->name,
        "authorImage": author->picture,
        content[]{
          ${queries.ptContent}
        },
      },
      ${queries.site}
    }
  `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export async function getArticles(preview) {
  const query = `
  {
    "page": *[_type == "articles"][0]{
      "id": _id,
      title,
      heading,
      seo,
      "posts": *[_type == "article"] | order(dateTime(publishedAt) desc){
        ${queries.articleList},
        slug,
      },
    },
    ${queries.site}
  }`;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export async function getWhitepaper(slug, preview) {
  const query = `
    {
      "page": *[_type == "whitepaper" && slug.current == "${slug}"][0]{
        ${queries.whitepaper}
      },
      ${queries.site}
    }
  `;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export async function getWhitepapers(preview) {
  const query = `
  {
    "page": *[_type == "whitepapers"][0]{
      "id": _id,
      "posts": *[_type == "whitepaper"]{
        ${queries.whitepaper}
      },
      title,
      seo
    },
    ${queries.site}
  }`;

  const data = await getSanityClient(preview).fetch(query);

  return data;
}

export { queries };
