import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage, CourseList} from "pages";

const Main = () => (
  <Router>
    <Switch>
      <Route path='/courses/' component={CourseList}/>
      <Route path='/' component={MainPage}/>
    </Switch>
  </Router>
);

export default Main;
