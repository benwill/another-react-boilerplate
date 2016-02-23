import React, { Component, PropTypes } from 'react'

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
      <div className="counter">
        <p className="summary">
          Clicked: {value} times
        </p>
        <p className="actions">
          <button className="btn btn-info" onClick={onIncrement}>
            +
          </button>
          <button className="btn btn-info" onClick={onDecrement}>
            -
          </button>
          <button className="btn btn-info" onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          <button className="btn btn-info" onClick={this.incrementAsync}>
            Increment async
          </button>
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

export default Counter