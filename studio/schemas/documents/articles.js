import { Notebook } from 'phosphor-react'

export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',
  icon: Notebook,
  fields: [
    {
      title: 'Link Title',
      name: 'title',
      type: 'string',
      initialValue: 'Articles',
      readOnly: true
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Custom slug, do not change',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Display Title',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}
