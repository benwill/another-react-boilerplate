import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import * as Actions from '../actions/counter'

// Components
import Counter from '../components/counter'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { counter, actions } = this.props;
    return (
      <div>
         <Counter
          value={counter.count}
          onIncrement={actions.increment}
          onDecrement={actions.decrement}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)