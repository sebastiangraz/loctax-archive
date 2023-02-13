import React from 'react'

import {
  Header1,
  Header2,
  Header3,
  Button
} from '../../components/block-renders'

import customImage from '../../lib/custom-image'

export default {
  title: 'Rich Text',
  name: 'complexPortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        {
          title: 'H1',
          value: 'h1',
          blockEditor: {
            render: Header1
          }
        },
        {
          title: 'H2',
          value: 'h2',
          blockEditor: {
            render: Header2
          }
        },
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: Header3
          }
        }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
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
                  ]
                },
                initialValue: 'external',
                validation: Rule => Rule.required()
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
                validation: Rule =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel']
                  }),
                hidden: ({ parent }) => parent.linkType !== 'external'
              },
              {
                title: 'Style as Button?',
                name: 'isButton',
                type: 'boolean',
                initialValue: false
              },
              {
                name: 'styles',
                type: 'object',
                fields: [
                  {
                    title: 'Secondary',
                    name: 'isSecondary',
                    type: 'boolean',
                    options: {
                      layout: 'checkbox'
                    },
                    initialValue: false
                  },
                  {
                    title: 'Small Size',
                    name: 'isSmall',
                    type: 'boolean',
                    options: {
                      layout: 'checkbox'
                    },
                    initialValue: false
                  }
                ],
                hidden: ({ parent }) => !parent.isButton
              }
            ]
          }
        ]
      }
    },
    customImage(),
    {
      type: 'horizontalRule'
    }
  ]
}
