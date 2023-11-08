import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
        <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="/">{props.site}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/">Disabled</a>
  </li>
</ul>
    </div>
  )
}
Navbar.propsTypes = {
    site: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    site:'Site Name'
}