import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render() {
    return (
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
          {this.props.children}
        </div>
      </div>
    )
  }
}