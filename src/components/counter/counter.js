import React, { PropTypes, Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './counter.scss'
import Button from '../button/button'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div styleName="default">
        <p>
          Clicked: {value} times
        </p>
        <p>
          <Button click={onIncrement} buttonText="+" />
          <Button click={onDecrement} buttonText="-" />
          <Button click={this.incrementIfOdd} buttonText="Increment if odd" />
          <Button click={this.incrementAsync} buttonText="Increment async" />
        </p>
      </div>
    )
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default cssModules(Counter, styles)
