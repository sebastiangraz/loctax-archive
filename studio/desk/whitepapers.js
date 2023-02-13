import S from '@sanity/desk-tool/structure-builder'
import { ArchiveBox } from 'phosphor-react'

import { standardViews } from './previews/standard'

// Our exported "Shop" Menu
export const whitepaperMenu = S.listItem()
  .title('Whitepapers')
  .child(
    S.documentTypeList('whitepaper')
      .title('Whitepapers')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('whitepaper')
          .views(standardViews)
      )
  )
  .icon(ArchiveBox)
