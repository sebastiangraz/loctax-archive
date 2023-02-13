import { NotePencil, Image } from 'phosphor-react'
import customImage from '../../lib/custom-image'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: NotePencil,
  // __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      title: 'Display Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Post Image',
      name: 'postImage',
      type: 'object',
      icon: Image,
      fields: [customImage()]
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      title: 'Page Content',
      name: 'content',
      type: 'complexPortableText'
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
