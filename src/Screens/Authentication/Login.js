import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }

 
  
  gettingInput(){
      const {loginEmail , loginPassword , loginButton } = this.props;
    return(
      <div>
      <input type="email" onChange={loginEmail }  />
      <input type="password" onChange={loginPassword } />
      <button onClick={loginButton}> Login</button>
        </div>
    )
  }



  render() {
    return (
      <div className="App">
          {this.gettingInput()}
      </div>

    );
  }
}

export default Login;
