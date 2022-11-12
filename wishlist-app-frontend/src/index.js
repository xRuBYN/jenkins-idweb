import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import ReactDOM from "react-dom"

import rootReducer from "./store/reducers/combineReducers"

import App from "./App"

import "semantic-ui-css/semantic.min.css"
import "./style.css"

const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
