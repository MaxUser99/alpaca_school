import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from './store/store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
