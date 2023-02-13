import { List } from 'phosphor-react'

export default {
  title: 'Article Listing',
  name: 'articleList',
  type: 'object',
  icon: List,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Limit posts',
      name: 'limit',
      type: 'number',
      description: 'Default is 5'
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title }) {
      return {
        title: `Article Listing`,
        subtitle: `${title}`
      }
    }
  }
}
