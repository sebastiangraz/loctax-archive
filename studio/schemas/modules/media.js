import { Image } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  icon: Image,
  fields: [
    {
      title: 'Overlay Content',
      name: 'content',
      type: 'complexPortableText'
    },
    {
      title: 'Dark theme',
      name: 'theme',
      type: 'boolean',
      initialValue: true
    },
    { title: 'Text max width', name: 'maxWidth', type: 'maxWidth' },
    {
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'photos',
      type: 'object',
      fields: [
        customImage({
          title: 'Background Photo (mobile)',
          name: 'mobilePhoto'
        }),
        customImage({
          title: 'Background Photo (desktop)',
          name: 'desktopPhoto'
        })
      ],
      hidden: ({ parent }) => {
        return parent.bgType !== 'photo'
      }
    },
    {
      name: 'video',
      type: 'object',
      fields: [
        {
          title: 'Background Video',
          name: 'id',
          type: 'string',
          description:
            'Alternatively, enter a vimeo ID to show a looping video instead'
        },
        {
          title: 'Background Video Title',
          name: 'title',
          type: 'string',
          description: 'Short title/description of the video'
        }
      ],
      hidden: ({ parent }) => {
        return parent.bgType !== 'video'
      }
    }
  ],
  preview: {
    select: {
      photo: 'photo',
      content: 'content.0.children'
    },
    prepare({ photo, content }) {
      return {
        title: 'Media',
        subtitle: content && content[0]?.text,
        media: photo
      }
    }
  }
}
