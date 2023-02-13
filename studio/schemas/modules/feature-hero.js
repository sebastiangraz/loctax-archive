import { ListChecks } from 'phosphor-react'
import customImage from '../../lib/custom-image'

export default {
  title: 'Feature Hero',
  name: 'featureHero',
  type: 'object',
  icon: ListChecks,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Lead',
      name: 'lead',
      type: 'string'
    },
    {
      title: 'Feature Header',
      name: 'featureHeader',
      type: 'string'
    },
    {
      title: 'Primary CTA',
      name: 'primaryCTA',
      type: 'object',
      options: {
        collapsible: true
      },
      fieldsets: [
        {
          name: 'cta',
          description: 'Settings for the first footer block'
        }
      ],
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Link Type',
          name: 'linkType',
          type: 'string',
          fieldset: 'cta',
          options: {
            list: [
              { title: 'Internal Page', value: 'internal' },
              { title: 'External URL', value: 'external' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          initialValue: 'internal',
          validation: Rule =>
            Rule.required().error(
              'Need to choose internal or external link type'
            )
        },
        {
          title: 'Internal Page',
          name: 'page',
          type: 'reference',
          fieldset: 'cta',
          to: [{ type: 'page' }, { type: 'articles' }, { type: 'whitepapers' }],
          hidden: ({ parent }) => parent.linkType !== 'internal'
        },
        {
          title: 'External URL',
          name: 'url',
          type: 'url',
          fieldset: 'cta',
          hidden: ({ parent }) => parent.linkType !== 'external'
        }
      ]
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
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title }) {
      return {
        title: `Feature Hero`,
        subtitle: `${title}`
      }
    }
  }
}
