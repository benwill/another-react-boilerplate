import React, { PropTypes, Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './collapse.scss'

class Collapse extends Component {
  constructor(props) {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: props.open
    }
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const styleName = this.state.open ? 'open' : 'closed'

    return (
      <div styleName="default">
        <h1 styleName="header" onClick={this.toggle}>
          {this.props.title} - {styleName}
        </h1>
        <div styleName={styleName}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.number,
  children: PropTypes.array
}
export default cssModules(Collapse, styles)
