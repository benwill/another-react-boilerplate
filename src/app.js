import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Layout, Home, About, Other } from './views'
import configureStore from './redux/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from './redux/tools/devTools'

// TODO Configurable by environment (DevTools)
let store = configureStore();

const history = syncHistoryWithStore(hashHistory, store)

// TODO Split routes into different file
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="other" component={Other}/>
        </Route>
      </Router>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('mount')
)