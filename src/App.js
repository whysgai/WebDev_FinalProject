import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import './App.css';

import SnippetSearchComponent from "./Containers/SnippetSearchContainer";
import LoginComponent from "./Components/LoginComponent";
import fire from "./config/db";

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
        <div>{this.state.user ? ( <SnippetSearchComponent/>) : (<LoginComponent />)}</div>)
  }
}

export default App;

