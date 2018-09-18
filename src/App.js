import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Screens/Authentication/SignUp';

class App extends Component {
  constructor() {
    super()
    this.state ={
      email : '',
      password: '',
    };
    this.signUpEmail = this.signUpEmail.bind(this);
    this.signUpPassword = this.signUpPassword.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  signUpEmail(e){
    this.setState({
      email : e.target.value,
    })
  }
  
  signUpPassword(e){
    this.setState({
      password:e.target.value,
    })
  }
  
  
  submitData(){

    localStorage.setItem("email" , this.state.email);
    localStorage.setItem("password" , this.state.password);
    
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <SignUp signUpEmail={this.signUpEmail} signUpPassword={this.signUpPassword} submitData={this.submitData}/>
        </header>
      </div>

    );
  }
}

export default App;
