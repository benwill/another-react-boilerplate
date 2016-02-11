import React from 'react'
import { Link } from 'react-router'

import Styles from '../assets/styles/layout.scss'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Other">Other</Link>
          </li>
        </ul>
      </header>
      <div>
      {children}
      </div>
    </div>
  )
}
