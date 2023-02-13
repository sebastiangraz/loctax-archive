import { Button, label } from '../../components/block-renders'

export default {
  title: 'Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        {
          title: 'Label',
          value: 'label',
          blockEditor: {
            render: label
          }
        }
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              render: Button
            },
            fields: [
              {
                title: 'Link Type',
                name: 'linkType',
                type: 'string',
                options: {
                  list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'External URL', value: 'external' }
                  ],
                  layout: 'radio',
                  direction: 'horizontal'
                },
                initialValue: 'external',
                validation: Rule =>
                  Rule.required().error(
                    'Need to choose internal or external link type'
                  )
              },
              {
                title: 'Internal Page',
                name: 'page',
                type: 'reference',
                to: [
                  { type: 'page' },
                  { type: 'articles' },
                  { type: 'whitepapers' }
                ],
                hidden: ({ parent }) => parent.linkType !== 'internal'
              },
              {
                title: 'External URL',
                name: 'href',
                type: 'url',
                hidden: ({ parent }) => parent.linkType !== 'external'
              },
              {
                title: 'Style as Button?',
                name: 'isButton',
                type: 'boolean',
                initialValue: false
              }
            ]
          }
        ]
      }
    }
  ]
}
