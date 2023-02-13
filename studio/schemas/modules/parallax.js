import { ArchiveBox, Cards } from 'phosphor-react'
import customImage from '../../lib/custom-image'

export default {
  title: 'Parallax',
  name: 'parallax',
  type: 'object',
  icon: Cards,
  fields: [
    { title: 'Header', name: 'header', type: 'string', required: true },
    {
      title: 'Parallax Container',
      name: 'parallaxContainer',
      type: 'array',
      of: [
        {
          title: 'Section',
          name: 'parallaxSection',
          type: 'object',
          icon: ArchiveBox,
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            },
            {
              title: 'Heading',
              name: 'heading',
              type: 'string'
            },
            {
              title: 'Lead',
              name: 'lead',
              type: 'text'
            },
            {
              title: 'List Items',
              name: 'listItems',
              type: 'object',
              fields: [
                {
                  title: 'Size',
                  name: 'size',
                  type: 'string',
                  options: {
                    layout: 'radio',
                    direction: 'horizontal',
                    list: [
                      { value: 'default', title: 'Default' },
                      { value: 'large', title: 'Large' }
                    ]
                  },

                  initialValue: 'default'
                },
                {
                  title: 'Feature List',
                  name: 'featureList',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          title: 'String',
                          name: 'string',
                          type: 'string'
                        },
                        {
                          title: 'Coming soon',
                          name: 'soon',
                          type: 'boolean',
                          initialValue: false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Image',
              name: 'image',
              type: 'object',
              icon: Image,
              fields: [customImage()]
            },
            {
              title: 'Color',
              name: 'color',
              type: 'colorSetting'
            },
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
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      header: 'header',
      parallaxContainer: 'parallaxContainer'
    },
    prepare({ parallaxContainer, header }) {
      const heading = parallaxContainer.map(e => e.title)
      const subtitle = heading
        .toString()
        .split(',')
        .join(' + ')
      return {
        title: `${header ? header : 'Parallax'}: ${
          parallaxContainer.length
        } Card${parallaxContainer.length > 1 ? 's' : ''}`,
        subtitle: subtitle
      }
    }
  }
}
