// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const articlesID = `*[_type=="generalSettings"][0].articles->_id`;
export const whitepapersID = `*[_type=="generalSettings"][0].whitepapers->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;

// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isArticles": _id == ${articlesID},
  "isWhitepapers": _id == ${whitepapersID}
`;

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  title,
  url,
  highlighted,
  hideOnMobile,
  "page": page->{
    ${page}
  }
`;

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->alt),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`;

export const articleList = `
"_id": _id, 
"slug": slug.current,
"title": title,
"featured": featured,
"image": postImage.photo{
  ${imageMeta}
},
"author": author, 
"name": author->name,
"authorImage": author->picture,
"date": publishedAt
`;

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.href,
      "isButton": @.isButton,
      "styles": @.styles{isSecondary, isSmall},
      "page":@.page->{
        ${page}
      }
    }
  },
  _type == "photo" => {
    ${imageMeta}
  }
`;

// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  },
  _type == 'imageFeature' => {
    _type,
    _key,
    "id": _key,
    title,
    content,
    align,
    "image": image.photo{
        ${imageMeta}
    }
  },
  _type == 'horizontalCard' => {
    _type,
    _key,
    "id": _key,
    title,
    lead[]{
      ${ptContent}
    },
    "image": image.photo{
        ${imageMeta}
    }
  }

`;

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    _type,
    _key,
    indented,
    hide,
    columns[]{
      sizes,
      blocks[]{
        ${blocks}
      }
    }
  },
  _type == 'media' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    theme,
    maxWidth,
    bgType,
    photos{
      ...,
      mobilePhoto{
        ${imageMeta}
      },
      desktopPhoto{
        ${imageMeta}
      }
    },
    video{
      id,
      title
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    header,
    lead,
    ticker,
    primaryCTA{
      title,
      linkType,
      url,
      "page": page->{
        ${page}
      }
    }
  },
  _type == 'parallax' => {
    _type,
    _key,
    header,
    parallaxContainer[]{
      "id": _key,
      sizes,
      title,
      heading,
      lead,
      "image": image.photo{
        ${imageMeta}
      },
      listItems{
        "id": _key,
        size,
        featureList[]{
          "id": _key,
          string,
          soon
        }
      },
      "color" : color.colorValue.value
    }
  },
  _type == 'articleList' => {
    _type,
    _key,
    header,
    limit,
    "articleList": *[_type == "article"]{${articleList}}  | order(dateTime(date) desc),
  },
  _type == 'featureSelector' => {
    _type,
    _key,
    header,
    hide,
    features[]{
      featureTitle,
      featureDescription,
      "image": image.photo{
        ${imageMeta}
      },
    }
  },
  _type == 'featureHero' => {
    _type,
    _key,
    header,
    lead,
    featureHeader,
    primaryCTA{
      title,
      linkType,
      url,
      "page": page->{
        ${page}
      }
    },
    features[]{
      "id": _key,
      featureTitle,
      featureDescription,
      "image": image.photo{
        ${imageMeta}
      },
      listItems{
        "id": _key,
        size,
        featureList[]{
          "id": _key,
          string,
          soon
        }
      }
    }
  },
  _type == 'logotypes' => {
    _type,
    _key,
    header,
    logos[]{
      "logoImage": logoImage.photo{
        ${imageMeta}
      },
    }
  },
`;

export const whitepaper = `
  "id": _id,
  title,
  url,
  slug,
  description
`;

// Construct our "site" GROQ
export const site = `
  "site": {
    "title": *[_type == "generalSettings"][0].siteTitle,
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "cookieConsent": *[_type == "cookieSettings"][0]{
      enabled,
      message,
      "link": link->{"type": _type, "slug": slug.current}
    },
    "header": *[_type == "headerSettings"][0]{
      "promo": *[_type == "promoSettings"][0]{
        enabled,
        display,
        text,
        "link": link->{
          ${page}
        }
      },
      menuMobilePrimary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      },
      menuMobileSecondary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      }
    },
    "footer": *[_type == "footerSettings"][0]{
      primaryCTA{
        title,
        linkType,
        url,
        "page": page->{
          ${page}
        }
      },
      "blocks": [
        {
          "title": blockTitle1,
          newsletter{
            "id": "footer",
            klaviyoListID,
            submit,
            successMsg[]{
              ${ptContent}
            },
            errorMsg[]{
              ${ptContent}
            },
            terms[]{
              ${ptContent}
            }
          }
        },
        {
          "title": blockTitle2,
          "menu": blockMenu2->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle3,
          "menu": blockMenu3->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle4,
          social[]{
            icon,
            url
          }
        }
      ]
    },
    "seo": *[_type == "seoSettings"][0]{
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      shareGraphic,
      "favicon": favicon.asset->url,
      "faviconLegacy": faviconLegacy.asset->url,
      touchIcon
    },
    "gtmID": *[_type == "generalSettings"][0].gtmID,
  }
`;
