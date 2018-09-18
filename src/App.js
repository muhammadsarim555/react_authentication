import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Screens/Authentication/SignUp.jsx';
import Login from './Screens/Authentication/Login.jsx';
import Test from './Screens/Authentication/Test.jsx';
import LogOut from './Screens/Authentication/LogOut.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      currentUser: false,
    };
    this.signUpName = this.signUpName.bind(this);
    this.signUpEmail = this.signUpEmail.bind(this);
    this.signUpPassword = this.signUpPassword.bind(this);
    this.submitData = this.submitData.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.logOut = this.logOut.bind(this);
  }


  // signup component working update state via parameter

  signUpName(e) {
    this.setState({
      name: e.target.value,
    })
  }

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
    const { name, email, password } = this.state;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // console.log(this.state.email);
    // console.log(this.state.password);
    this.setState({
      email: '',
      password: '',
      name: '',
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
      (this.setState({
        currentUser : true,
      }),
        alert("succeess"))
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

// logout button

  logOut(){
    this.setState({
      currentUser: false,
    })
  }
  render() {
    const {currentUser , logOut} = this.state;
    return (
      <div className="App">
       {currentUser && <LogOut state={this.state}  logOut={this.logOut}   />   }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
       
       
        { !currentUser &&  <SignUp signUpName={this.signUpName} signUpEmail={this.signUpEmail} 
        signUpPassword={this.signUpPassword} submitData={this.submitData} state={this.state} />}
        </header>
        <h3>Login Form </h3>
        
        { !currentUser && <Login loginEmail={this.loginEmail} loginPassword={this.loginPassword} 
        loginButton={this.loginButton} state={this.state} /> 
        }
       
         {currentUser &&  <Test/>}
      </div>

    );
  }
}

export default App;
