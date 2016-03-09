import { INCREMENT, DECREMENT } from '../../actions/counter'

const initialState = {
  count: 1
}

export default function update(state = initialState, action) {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 }
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 }
  }
  return state
}
