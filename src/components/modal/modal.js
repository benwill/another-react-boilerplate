import React, { PropTypes, Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './modal.scss'

class Modal extends Component {
  render() {
    const styleName = this.props.open ? 'modal' : 'hidden'
    const overlay = this.props.open ? <span styleName="overlay" /> : null
    return (
      <div>
        {overlay}
        <div styleName={styleName}>
          <h1 styleName="header">
            {this.props.title} <span onClick={this.props.onClose}>Close</span>
          </h1>
          <div styleName="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.number.isRequired,
  children: PropTypes.array
}
export default cssModules(Modal, styles)
