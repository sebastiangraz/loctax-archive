import { Cards } from 'phosphor-react'
import customImage from '../../lib/custom-image'
import { getPtPreview } from '../../lib/helpers'

export default {
  title: 'Horizontal Card',
  name: 'horizontalCard',
  type: 'object',
  icon: Cards,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'object',
      icon: Image,
      fields: [customImage()]
    },
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Lead',
      name: 'lead',
      type: 'simplePortableText'
    }
  ],

  preview: {
    select: {
      content: 'lead.0'
    },
    prepare({ content }) {
      return {
        title: 'Image Feature',
        subtitle: getPtPreview(content)
      }
    }
  }
}
