import { DotsThree } from 'phosphor-react'
import customImage from '../../lib/custom-image'

export default {
  title: 'Logotypes',
  name: 'logotypes',
  type: 'object',
  icon: DotsThree,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      // of: [{ title: 'Logo Image', name: 'logoImage', type: 'image' }]
      of: [
        {
          type: 'object',
          fields: [
            { title: 'Company', name: 'company', type: 'string' },
            {
              title: 'Logo Image',
              name: 'logoImage',
              type: 'object',
              icon: Image,
              fields: [customImage()]
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      logos: 'logos[0]'
    },
    prepare({ photo }) {
      return {
        title: 'Logotypes',
        media: photo
      }
    }
  }
}
