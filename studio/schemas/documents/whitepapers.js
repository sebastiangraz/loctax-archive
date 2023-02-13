import { ArchiveBox } from 'phosphor-react'

export default {
  name: 'whitepapers',
  title: 'Whitepapers',
  type: 'document',
  icon: ArchiveBox,
  fields: [
    {
      title: 'Display Title',
      name: 'title',
      type: 'string',
      initialValue: 'Whitepapers',
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
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}
