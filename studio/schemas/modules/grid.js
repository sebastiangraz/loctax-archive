import { GridFour } from 'phosphor-react'
import React from 'react'

import { getTypeTitles } from '../../lib/helpers'

export default {
  title: 'Content Grid',
  name: 'grid',
  type: 'object',
  icon: GridFour,
  fieldsets: [
    {
      title: 'Grid settings',
      name: 'settings',
      options: { columns: 2 }
    }
  ],
  fields: [
    {
      title: 'Columns',
      name: 'columns',
      type: 'array',
      of: [{ type: 'gridColumn' }],
      description: 'The columns that are part of this grid'
    },
    {
      title: 'Indented',
      name: 'indented',
      type: 'boolean',
      fieldset: 'settings',
      initialValue: false
    },
    {
      title: 'Hide component',
      name: 'hide',
      type: 'boolean',
      fieldset: 'settings',
      initialValue: false
    }
  ],

  preview: {
    select: {
      columns: 'columns'
    },
    prepare({ columns }) {
      const name = getTypeTitles(columns.map(col => col.blocks[0]._type))

      const image = (columns[0].blocks[0].content || []).find(
        block => block._type === 'photo'
      )

      return {
        title: `Grid: ${columns.length} Column${columns.length > 1 ? 's' : ''}`,
        subtitle: name,
        media: image
      }
    }
  }
}
