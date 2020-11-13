import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import userReducer from "./Reducers/UserReducer";
import snippetReducer from "./Reducers/snippetReducer";
import {Provider} from "react-redux"
import NavBarContainer from "./Containers/NavbarContainer";
import TestSnippetDisplayPageContainer from "./Containers/TestSnippetDisplayPageContainer"
import SnippetContainer from "./Containers/SnippetContainer";
import SnippetSearchContainer from "./Containers/SnippetSearchContainer";
import MySnippetsContainer from "./Containers/MySnippetsContainer";


const reducers = combineReducers({
    userReducer,
    snippetReducer
})

const store = createStore(reducers)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <NavBarContainer/>
            <div className="container">
                <Route path={[
                    '/',
                    '/search'
                ]} exact>
                    <SnippetSearchContainer/>
                </Route>
                <Route path="/concept_proof" exact>
                    <TestSnippetDisplayPageContainer username="NameOfUser"/>
                </Route>
                <Route path="/demo_snippet" exact>
                    <SnippetContainer/>
                </Route>
                <Route path="/mysnippets" exact>
                    <MySnippetsContainer/>
                </Route>
            {/*End of container*/}
            </div>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
