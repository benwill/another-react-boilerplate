import { createStore } from 'redux'
import RootReducer from './rootReducer'
import DevTools from './tools/devTools'

export default function configureStore() {
  const store = createStore(RootReducer, DevTools.instrument())

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
