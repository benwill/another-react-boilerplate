import React from 'react'
import { Link } from 'react-router'

const Layout = (props) =>
  <div>
    <header>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Examples">Examples</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Other">Other</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className="container">
      {props.children}
    </div>
  </div>
Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Layout
