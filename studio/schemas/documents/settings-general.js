import React from 'react'

export default {
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fields: [
    {
      title: 'Home Page',
      name: 'home',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'This page will show at the root of your domain'
    },
    {
      title: 'Article Index',
      name: 'articles',
      type: 'reference',
      weak: true,
      to: [{ type: 'articles' }]
    },
    {
      title: 'Whitepaper Index',
      name: 'whitepapers',
      type: 'reference',
      weak: true,
      to: [{ type: 'whitepapers' }]
    },
    {
      title: 'Error Page (404)',
      name: 'error',
      type: 'reference',
      to: [{ type: 'page' }],
      description:
        'This page will show for any URL at your domain that does not exist yet'
    },
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'Set the title of your site for SEO purposes'
    },
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website',
      name: 'siteURL',
      type: 'url'
    },
    {
      title: 'Google Tag Manager (GTM)',
      description: 'To enable GTM enter your Container ID',
      name: 'gtmID',
      type: 'string'
    },
    {
      title: 'Klaviyo Site ID (Public API Key)',
      description: 'For product waitlist and newsletter forms',
      name: 'klaviyoAccountID',
      type: 'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings'
      }
    }
  }
}
