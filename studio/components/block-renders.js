import React from 'react'
import cx from 'classnames'

export const Header1 = props => (
  <h1
    style={{
      margin: '0',
      fontSize: '2rem',
      lineHeight: '1.5',
      fontWeight: 400
    }}
  >
    {props.children}
  </h1>
)

export const Header2 = props => (
  <h2
    style={{
      margin: '0',
      fontSize: '1.75rem',
      lineHeight: '1.375',
      fontWeight: 400
    }}
  >
    {props.children}
  </h2>
)

export const Header3 = props => (
  <h3
    style={{
      margin: '0',
      fontSize: '1.5rem',
      lineHeight: '1.25',
      fontWeight: 400
    }}
  >
    {props.children}
  </h3>
)

export const label = props => (
  <h4
    style={{
      margin: '0',
      fontSize: '0.8rem',
      lineHeight: '1.25',
      fontWeight: 400
    }}
  >
    {props.children}
  </h4>
)

export const Button = ({ isButton, styles, children }) => {
  if (!isButton) return children
  return (
    <span
      style={{
        display: 'inline-block',
        lineHeight: '1.5',
        background: '#000',
        padding: '1rem',
        color: '#fff',
        borderRadius: '8px'
      }}
    >
      {children}
    </span>
  )
}
