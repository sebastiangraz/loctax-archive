import { Star } from 'phosphor-react'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: Star,
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
      title: 'Word ticker',
      name: 'ticker',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title, lead }) {
      return {
        title: `Hero`,
        subtitle: `${title}`
      }
    }
  }
}
