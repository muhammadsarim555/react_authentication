import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
  }

 
  
  gettingInput(){
      const { signUpName , signUpEmail , signUpPassword , submitData, state } = this.props;
      // console.log(state.email);
    return(
      <div>
      <input type="text" value={state.name} onChange={signUpName }  />
      <input type="email" value={state.email} onChange={signUpEmail }  />
      <input type="password" value={state.password} onChange={signUpPassword } />
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
