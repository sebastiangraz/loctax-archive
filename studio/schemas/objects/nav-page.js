import { LinkSimpleHorizontal } from 'phosphor-react'

import { getStaticRoute, getDynamicRoute } from '../../../lib/routes'

export default {
  title: 'Page',
  name: 'navPage',
  type: 'object',
  icon: LinkSimpleHorizontal,
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
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'articles' }, { type: 'whitepapers' }]
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
      pageType: 'page._type',
      pageSlug: 'page.slug.current'
    },
    prepare({ title, pageType, pageSlug }) {
      const isStatic = getStaticRoute(pageType)
      const isDynamic = getDynamicRoute(pageType)

      return {
        title: title,
        subtitle:
          isStatic !== false
            ? `/${isStatic}`
            : `/${isDynamic ? `${isDynamic}/` : ''}${pageSlug}`
      }
    }
  }
}
