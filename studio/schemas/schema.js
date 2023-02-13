import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import article from './documents/article'
import articles from './documents/articles'

import whitepaper from './documents/whitepaper'
import whitepapers from './documents/whitepapers'
import colorSetting from './objects/colorSetting'

import generalSettings from './documents/settings-general'
import cookieSettings from './documents/settings-cookie'
import promoSettings from './documents/settings-promo'
import headerSettings from './documents/settings-header'
import footerSettings from './documents/settings-footer'
import seoSettings from './documents/settings-seo'
import menu from './documents/menu'
import redirect from './documents/redirect'

// Module types
import grid from './modules/grid'
import media from './modules/media'
import articleList from './modules/articleList'
import hero from './modules/hero'
import newsletter from './modules/newsletter'
import parallax from './modules/parallax'
import featureSelector from './modules/feature-selector'
import featureHero from './modules/feature-hero'
import logotypes from './modules/logotypes'

// Object types
import gridColumn from './objects/grid-column'
import gridSize from './objects/grid-size'
import seo from './objects/seo'

import navDropdown from './objects/nav-dropdown'
import navPage from './objects/nav-page'
import navLink from './objects/nav-link'
import socialLink from './objects/social-link'
import horizontalRule from './objects/horizontal-rule'
import maxWidth from './objects/maxWidth'

import simplePortableText from './objects/portable-simple'
import complexPortableText from './objects/portable-complex'

import freeform from './objects/freeform'
import accordions from './objects/accordions'
import accordion from './objects/accordion'

import imageFeature from './objects/image-feature'
import horizontalCard from './objects/horizontal-card'
import author from './objects/author'

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */
export default createSchema({
  // The name of our schema
  name: 'content',

  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    page,
    article,
    articles,
    whitepaper,
    whitepapers,
    author,
    colorSetting,

    generalSettings,
    cookieSettings,
    promoSettings,
    headerSettings,
    footerSettings,
    seoSettings,
    menu,
    redirect,

    /* --------------- */
    /* 2: Module types */
    grid,
    media,
    hero,
    newsletter,
    parallax,
    articleList,
    featureSelector,
    featureHero,
    logotypes,

    /* ----------------------- */
    /* 3: Generic Object types */
    gridColumn,
    gridSize,
    seo,

    navDropdown,
    navPage,
    navLink,
    socialLink,
    horizontalRule,
    maxWidth,

    simplePortableText,
    complexPortableText,

    freeform,
    accordions,
    accordion,
    imageFeature,
    horizontalCard
  ])
})
