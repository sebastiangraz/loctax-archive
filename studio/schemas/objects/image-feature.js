import { TextAlignLeft } from 'phosphor-react'
import customImage from '../../lib/custom-image'
import { getPtPreview } from '../../lib/helpers'

export default {
  title: 'Image Feature',
  name: 'imageFeature',
  type: 'object',
  icon: TextAlignLeft,

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
      title: ' ',
      name: 'content',
      type: 'simplePortableText'
    },
    {
      title: 'Text Alignment',
      name: 'align',
      type: 'string',
      description: `Vertically centers the text, default is Center`,
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' }
        ],
        layout: 'radio'
      },
      initialValue: 'center'
    }
  ],

  preview: {
    select: {
      content: 'content.0'
    },
    prepare({ content }) {
      return {
        title: 'Image Feature',
        subtitle: getPtPreview(content)
      }
    }
  }
}
