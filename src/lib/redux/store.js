import React, { Component } from "react"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import controller from "./reducer"

const debug =
  typeof window === "undefined"
    ? false
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  controller,
})

const store = createStore(rootReducer, debug)

export default Controller =>
  class extends Component {
    render() {
      return (
        <Provider store={store}>
          <Controller {...this.props} />
        </Provider>
      )
    }
  }
