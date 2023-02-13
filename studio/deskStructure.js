import S from '@sanity/desk-tool/structure-builder'

import { settingsMenu } from './desk/settings'
import { pagesMenu } from './desk/pages'
import { menusMenu } from './desk/menus'
import { articleMenu } from './desk/articles'
import { whitepaperMenu } from './desk/whitepapers'

const hiddenDocTypes = listItem =>
  ![
    'page',
    'articles',
    'article',
    'whitepapers',
    'whitepaper',
    'productVariant',
    'generalSettings',
    'cookieSettings',
    'promoSettings',
    'headerSettings',
    'footerSettings',
    'seoSettings',
    'menu',
    'siteSettings',
    'redirect'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website')
    .items([
      pagesMenu,
      S.divider(),
      articleMenu,
      S.divider(),
      whitepaperMenu,
      S.divider(),
      menusMenu,
      S.divider(),
      settingsMenu,
      S.divider(),
      // Filter out docs already defined above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
