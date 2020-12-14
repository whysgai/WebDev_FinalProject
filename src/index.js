import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
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
import SingleSnippetContainer from "./Containers/EditSnippetContainer";
import CreateSnippetContainer from "./Containers/CreateSnippetContainer";
import UserAdminListContainer from "./Containers/UserAdminListContainer";
import LoginComponent from "./Components/LoginComponent";
import LandingPageContainer from "./Containers/LandingPageContainer";
import ImportGistContainer from "./Containers/ImportGistContainer";
import RecommendedSnippetContainer from "./Containers/RecommendedSnippetContainer";
import PrivacyPolicyComponent from "./Components/PrivacyPolicyComponent";
import UserRegisterComponent from "./Components/Users/UserRegisterComponent";
import UserLoginComponent from "./Components/Users/UserLoginComponent";
import FavoriteSnippetsContainer from "./Containers/FavoriteSnippetsContainer";
import UserProfileEditContainer from "./Containers/UserProfileEditContainer";
import UserProfileDisplayContainer from "./Containers/UserProfileDisplayContainer";

const reducers = combineReducers({
    gistReducer: GistReducer,
    snippetReducer,
    userReducer: UserReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="">
                <NavBarContainer/>
                <div className="container">
                    <Route path="/" exact>
                        <LandingPageContainer/>
                    </Route>
                    <Route path={[
                        '/search',
                        '/search/:terms'
                    ]}
                    exact
                    component={SnippetSearchContainer}
                    />
                     <Route path="/mysnippets" exact component={MySnippetsContainer}/>

                    <Route path="/admin" exact>
                        <UserAdminListContainer/>
                    </Route>
                    <Route path={["/profile/:username"]} exact component={UserProfileDisplayContainer}/>
                    <Route path={"/profile"} exact component={UserProfileEditContainer}/>
                    <Route path="/snippet/:snippetId" exact component={SingleSnippetContainer}/>
                    <Route path="/newsnippet" exact component={CreateSnippetContainer}/>
                    <Route path="/import_gist" exact component={ImportGistContainer}/>
                    <Route path="/recommended" exact component={RecommendedSnippetContainer}/>
                    <Route path="/favorites" exact component={FavoriteSnippetsContainer}/>
                    <Route path="/login" exact component={UserLoginComponent}/>
                    <Route path="/login2" exact component={LoginComponent}/>
                    <Route path="/privacy" exact component={PrivacyPolicyComponent}/>
                    <Route path="/register" exact component={UserRegisterComponent}/>
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
