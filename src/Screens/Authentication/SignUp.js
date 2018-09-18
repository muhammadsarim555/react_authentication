import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
  }

 
  
  gettingInput(){
      const {signUpEmail , signUpPassword , submitData } = this.props;
    return(
      <div>
      <input type="email" onChange={signUpEmail }  />
      <input type="password" onChange={signUpPassword } />
      <button onClick={submitData}> Submit </button>
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

export default SignUp;
