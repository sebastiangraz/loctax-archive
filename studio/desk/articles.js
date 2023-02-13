import S from '@sanity/desk-tool/structure-builder'
import { Notebook } from 'phosphor-react'

import { standardViews } from './previews/standard'

// Our exported "Shop" Menu
export const articleMenu = S.listItem()
  .title('Articles')
  .child(
    S.documentTypeList('article')
      .title('Articles')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('article')
          .views(standardViews)
      )
  )
  .icon(Notebook)
