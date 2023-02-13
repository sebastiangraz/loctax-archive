import { TextAlignLeft } from 'phosphor-react'
import { Avatar } from '@sanity/ui'
import React from 'react'
import { getTypeTitles } from '../../lib/helpers'

export default {
  title: 'Column',
  name: 'gridColumn',
  type: 'object',
  icon: TextAlignLeft,
  fields: [
    {
      title: 'Column Sizes',
      name: 'sizes',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
          { title: '10', value: 10 },
          { title: '11', value: 11 },
          { title: '12', value: 12 }
        ]
      }
    },
    {
      title: 'Content Blocks',
      name: 'blocks',
      type: 'array',
      description: 'The content that exists inside this column',
      of: [
        { type: 'freeform' },
        { type: 'accordions' },
        { type: 'imageFeature' },
        { type: 'horizontalCard' }
      ]
    }
  ],
  preview: {
    select: {
      sizes: 'sizes',
      blocks: 'blocks'
    },
    prepare({ sizes, blocks }) {
      const types = blocks.map(block => block._type)

      const title = getTypeTitles(types)
      const subtitle = ''

      return {
        title: title || 'Block',
        subtitle: subtitle || '',
        media: <Avatar initials={sizes} size={1} />
      }
    }
  }
}
