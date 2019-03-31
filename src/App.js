import React from "react";
import {Provider} from "react-redux";
import store from './store/store';
import {Layout} from "antd";
import {Header, Main,  Footer} from "layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/index.css";

const App = () => (
  <Provider store={store}>
    <Layout className="layout">
      <Header/>
      <Main/>
      <Footer/>
    </Layout>
  </Provider>
);

export default App;
