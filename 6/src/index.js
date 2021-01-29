import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


import store from "./Redux/Redux";
import './index.css';
import AppContainer from "./containers/App/AppContainer";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
        <AppContainer />
        </Provider>
    </HashRouter>
  ,
  document.getElementById('root')
);

