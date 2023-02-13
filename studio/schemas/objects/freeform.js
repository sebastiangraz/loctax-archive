import { TextAlignLeft } from 'phosphor-react'

import { getPtPreview } from '../../lib/helpers'

export default {
  title: 'Freeform',
  name: 'freeform',
  type: 'object',
  icon: TextAlignLeft,

  fields: [
    {
      title: ' ',
      name: 'content',
      type: 'complexPortableText'
    },
    { title: 'Text max width', name: 'maxWidth', type: 'maxWidth' }
  ],
  preview: {
    select: {
      content: 'content.0'
    },
    prepare({ content }) {
      return {
        title: 'Freeform',
        subtitle: getPtPreview(content)
      }
    }
  }
}
