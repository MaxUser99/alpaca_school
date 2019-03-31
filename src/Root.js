import React from "react";
import {Provider} from "react-redux";
import store from './store/store';
import {Header, Main,  Footer} from "layout";

const Root = () => (
  <Provider store={store}>
    <Header/>
    <Main/>
    <Footer/>
  </Provider>
);

export default Root;
