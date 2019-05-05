import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history"
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

import rootReducers from "./reducers"
import './styles/index.scss';
import App from "./components/App"
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory()

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const store = createStore(
  rootReducers(history),
  composeWithDevTools(
    applyMiddleware(
      logger,
      routerMiddleware(history),
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
