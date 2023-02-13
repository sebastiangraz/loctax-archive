import React from 'react'
import PropTypes from 'prop-types'

export default class HR extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string
    }).isRequired
  }

  focus() {
    return false
  }

  render() {
    return (
      <hr
        style={{
          all: 'unset',
          margin: '3rem 0',
          height: '1px',
          width: '100%',
          background: 'black',
          display: 'inline-block'
        }}
      />
    )
  }
}
