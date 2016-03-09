import { connect } from 'react-redux'

// Actions
import { increment, decrement } from '../actions/counter'

// Components
import Counter from '../components/counter/counter'

// Expose properties this component cares about
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

// Expose actions this component cares about
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

// Middleware to bind the props & actions
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
