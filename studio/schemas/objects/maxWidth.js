export default {
  title: 'Text max width',
  name: 'maxWidth',
  type: 'object',
  fields: [
    {
      title: 'Text max Width',
      name: 'value',
      type: 'number',
      description:
        'Apply a max-width to this block, inside the column (helps with legibility)',
      options: {
        list: [
          { title: 'None', value: 0 },
          { title: 'Narrow', value: 1 },
          { title: 'Mid', value: 2 },
          { title: 'Wide', value: 3 }
        ]
      }
    }
  ]
}
