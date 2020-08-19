import './Header.scss'
import React from 'react'

const Header = () => {

  return (
    <div className="header">
      <div className="header-items">
        <ul>
          <li>
            Home
          </li>
          <li>
            Resume
          </li>
          <li>
            Portfolio
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header