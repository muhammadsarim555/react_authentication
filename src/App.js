import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Screens/Authentication/SignUp';
import Login from './Screens/Authentication/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      currentUser: false,
    };
    this.signUpEmail = this.signUpEmail.bind(this);
    this.signUpPassword = this.signUpPassword.bind(this);
    this.submitData = this.submitData.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
  }


  // signup component working update state via parameter

  signUpEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  signUpPassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  submitData() {

    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    // console.log(this.state.email);
    // console.log(this.state.password);
    this.setState({
      email: '',
      password: '',
    })
  }

  // login work for users

  loginEmail(e) {
    this.setState({
      loginEmail: e.target.value,
    })
  }

  loginPassword(e) {
    this.setState({
      loginPassword: e.target.value,
    })
  }

  loginButton() {
    const { loginEmail, loginPassword } = this.state;
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    loginEmail === email
      &&
      loginPassword === password
      ?
      (alert("succeess"))
      :
      (console.log("error"));
      this.setState({
        loginEmail: '',
        loginPassword: '',
      })
    // console.log(this.state.loginEmail);


    // console.log(email);
    // console.log(password);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <SignUp signUpEmail={this.signUpEmail} signUpPassword={this.signUpPassword} submitData={this.submitData} state={this.state} />

        </header>
        <h3>Login Form </h3>
        <Login loginEmail={this.loginEmail} loginPassword={this.loginPassword} loginButton={this.loginButton} state={this.state} />
      </div>

    );
  }
}

export default App;
