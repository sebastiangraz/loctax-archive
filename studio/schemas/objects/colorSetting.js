import React from 'react'
import { getSwatch } from '../../lib/helpers'
import { PaintBucket } from 'phosphor-react'
import { brandColors } from '../../../public/globalColors'

const colorMap = Object.entries(brandColors).map(([key, value]) => {
  return { title: key, value: value }
})

export default {
  name: 'colorSetting',
  title: 'Color Settings',
  type: 'object',
  icon: PaintBucket,
  fields: [
    {
      title: 'Color picker',
      name: 'colorValue',
      type: 'colorlist',
      description: `Background color for this card`,
      options: {
        list: colorMap,
        layout: 'radio'
      },
      initialValue: 'center'
    }
  ],
  preview: {
    select: {
      title: 'colorTitle',
      color: 'colorValue'
    },
    prepare({ title, color }) {
      return {
        title: title,
        subtitle: color?.hex ? color.hex.toUpperCase() : '',
        media: color?.hex ? getSwatch(color.hex.toUpperCase()) : null
      }
    }
  }
}
