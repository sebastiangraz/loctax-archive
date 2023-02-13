import { Pill } from 'phosphor-react'
import customImage from '../../lib/custom-image'

export default {
  title: 'Feature Selector',
  name: 'featureSelector',
  type: 'object',
  icon: Pill,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Feature Title',
              name: 'featureTitle',
              type: 'string'
            },
            {
              title: 'Feature Description',
              name: 'featureDescription',
              type: 'string'
            },
            {
              title: 'Image',
              name: 'image',
              type: 'object',
              icon: Image,
              fields: [customImage()]
            }
          ]
        }
      ]
    },
    {
      title: 'Hide component',
      name: 'hide',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title }) {
      return {
        title: `Feature Selector`,
        subtitle: `${title}`
      }
    }
  }
}
