import { ArchiveBox } from 'phosphor-react'

export default {
  name: 'whitepaper',
  title: 'Whitepaper',
  type: 'document',
  icon: ArchiveBox,
  // __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      title: 'Display Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Url',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
