import React from 'react'

import defaultResolve, {
  PublishAction,
  DiscardChangesAction,
  DeleteAction
} from 'part:@sanity/base/document-actions'

import { Eye } from 'phosphor-react'

const remoteURL = window.location.protocol + '//' + window.location.hostname
const localURL = 'http://localhost:3000'
const frontendURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

const singletons = [
  'generalSettings',
  'cookieSettings',
  'headerSettings',
  'footerSettings',
  'seoSettings'
]

const editAndDelete = ['product', 'productVariant']

const previews = ['page', 'product']

const PreviewAction = props => {
  const slug = props.draft
    ? props.draft.slug?.current
    : props.published?.slug?.current
  return {
    label: 'Open Preview',
    icon: () => <Eye weight="light" data-sanity-icon="eye" />,
    onHandle: () => {
      window.open(
        `${frontendURL}/api/preview?token=LOC&type=${props.type}&slug=${slug ||
          ''}`
      )
    }
  }
}

export default function resolveDocumentActions(props) {
  const isSingle = singletons.indexOf(props.type) > -1
  const canEditDelete = editAndDelete.indexOf(props.type) > -1
  const canPreview = previews.indexOf(props.type) > -1
  const isProduct = props.type === 'product'

  if (isSingle) {
    return [
      PublishAction,
      DiscardChangesAction,
      ...(canPreview ? [PreviewAction] : [])
    ]
  }

  if (canEditDelete) {
    return [
      PublishAction,
      DiscardChangesAction,
      DeleteAction,
      ...(canPreview ? [PreviewAction] : [])
    ]
  }

  return [...defaultResolve(props), ...(canPreview ? [PreviewAction] : [])]
}
