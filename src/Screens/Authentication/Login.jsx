import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }

 
  
  gettingInput(){
      const {loginEmail , loginPassword , loginButton , state } = this.props;
    return(
      <div>
      <input type="email" value={state.loginEmail} onChange={loginEmail }  />
      <input type="password" value={state.loginPassword} onChange={loginPassword } />
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
