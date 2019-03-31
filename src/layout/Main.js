import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MainPage} from "pages";

const Main = () => (
  <Router>
    <Route path='/' component={MainPage} />
  </Router>
);

export default Main;
