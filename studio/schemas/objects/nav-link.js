import { ArrowSquareOut } from 'phosphor-react'

export default {
  title: 'Link',
  name: 'navLink',
  type: 'object',
  icon: ArrowSquareOut,
  fieldsets: [
    {
      title: 'Link settings',
      name: 'settings',
      options: { columns: 2 }
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
      validation: Rule => Rule.required()
    },
    {
      title: 'Highlighted',
      name: 'highlighted',
      type: 'boolean',
      fieldset: 'settings',
      initialValue: false
    },
    {
      title: 'Hide on Mobile',
      name: 'hideOnMobile',
      type: 'boolean',
      fieldset: 'settings',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url'
    },
    prepare({ title, url }) {
      return {
        title: title,
        subtitle: url
      }
    }
  }
}
