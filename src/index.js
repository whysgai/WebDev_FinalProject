import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import TestSnippetDisplayPageContainer from "./TestSnippetDisplayPage/TestSnippetDisplayPageContainer"

const reducers = combineReducers({})

const store = createStore(reducers)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <TestSnippetDisplayPageContainer username="NameOfUser"/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
