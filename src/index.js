import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import gistReducer from "./Reducers/GistReducer";
import snippetReducer from "./Reducers/snippetReducer";
import {Provider} from "react-redux"
import NavBarContainer from "./Containers/NavbarContainer";
import TestSnippetDisplayPageContainer from "./Containers/TestSnippetDisplayPageContainer"
import SnippetContainer from "./Containers/SnippetContainer";
import SnippetSearchContainer from "./Containers/SnippetSearchContainer";

import UserSnippetsContainer from "./Containers/UserSnippetsContainer";

import MySnippetsContainer from "./Containers/MySnippetsContainer";
import GistReducer from "./Reducers/GistReducer";
import UserReducer from "./Reducers/UserReducer";



const reducers = combineReducers({
    gistReducer: GistReducer,
    snippetReducer,
    userReducer: UserReducer
})

const store = createStore(reducers)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>

            <div className="">
                <NavBarContainer/>
                <div className="container">
                    <Route path={[
                        '/',
                        '/search'
                    ]} exact>
                        <SnippetSearchContainer/>
                    </Route>
                     <Route path="/mysnippets" exact>
                        <MySnippetsContainer/>
                     </Route>
                    <Route path="/user_snippets" exact>
                        <UserSnippetsContainer/>
                    </Route>
                    <Route path="/concept_proof" exact>
                        <TestSnippetDisplayPageContainer username="NameOfUser"/>
                    </Route>
                    <Route path="/demo_snippet" exact>
                        <SnippetContainer
                            snippet={
                                {
                                    id: 1,
                                    gistId: "1a",
                                    creator: "somedude",
                                    dateCreated: "Yesterday",
                                    lastModified: "Today",
                                    title: "LocalTestSnippet0",
                                    description: "A locally saved snippet to demo",
                                    codeText: "console.log('Hello, world.')",
                                    tags: 'JavaScript,Output',
                                    shareableURL: "",
                                    privacy: false,
                                    recommended: false
                                }
                            }
                            edit={true}
                        />
                    </Route>
                {/*End of container*/}
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
