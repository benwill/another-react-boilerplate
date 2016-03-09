import React, { PropTypes, Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './button.scss'

class Button extends Component {
  render() {
    return (
      <button styleName="default" className="btn btn-primary" type="button" onClick={this.props.click}>
        {this.props.buttonText}
      </button>
    )
  }
}
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

export default cssModules(Button, styles)
