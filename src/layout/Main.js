import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MainPage} from "pages";

const Main = () => (
  <div>
    <Router>
      <Route path='/' component={MainPage} />
    </Router>
  </div>
);

export default Main;
