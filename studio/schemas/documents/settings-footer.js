export default {
  title: 'Footer Settings',
  name: 'footerSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish

  fieldsets: [
    {
      title: 'Block One',
      name: 'footerBlock1',
      description: 'Settings for the first footer block',
      options: { collapsible: true }
    },
    {
      title: 'Block Two',
      name: 'footerBlock2',
      description: 'Settings for the second footer block',
      options: { collapsible: true }
    },
    {
      title: 'Block Three',
      name: 'footerBlock3',
      description: 'Settings for the third footer block',
      options: { collapsible: true }
    },
    {
      title: 'Block Four',
      name: 'footerBlock4',
      description: 'Settings for the fourth footer block',
      options: { collapsible: true }
    }
  ],
  fields: [
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
      title: 'Block Title',
      name: 'blockTitle1',
      type: 'string',
      fieldset: 'footerBlock1'
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'newsletter',
      fieldset: 'footerBlock1'
    },
    {
      title: 'Block Title',
      name: 'blockTitle2',
      type: 'string',
      fieldset: 'footerBlock2'
    },
    {
      title: 'Block Menu',
      name: 'blockMenu2',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'footerBlock2'
    },
    {
      title: 'Block Title',
      name: 'blockTitle3',
      type: 'string',
      fieldset: 'footerBlock3'
    },
    {
      title: 'Block Menu',
      name: 'blockMenu3',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'footerBlock3'
    },
    {
      title: 'Block Title',
      name: 'blockTitle4',
      type: 'string',
      fieldset: 'footerBlock4'
    },
    {
      title: 'Social Links',
      name: 'social',
      type: 'array',
      of: [{ type: 'socialLink' }],
      fieldset: 'footerBlock4'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings'
      }
    }
  }
}
