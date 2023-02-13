import { WarningCircle } from 'phosphor-react'

export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fieldsets: [
    {
      title: 'Navigation',
      name: 'mobile',
      description: 'Navigation settings',
      options: { collapsed: false }
    }
  ],
  fields: [
    {
      title: 'Primary',
      name: 'menuMobilePrimary',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'mobile'
    },
    {
      title: 'Secondary',
      name: 'menuMobileSecondary',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'mobile'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    }
  }
}
