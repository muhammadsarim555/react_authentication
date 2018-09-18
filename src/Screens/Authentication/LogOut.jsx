import React, { Component } from 'react';

class LogOut extends Component {
  constructor(props) {
    super(props)
  }

 
  
  

  

  render() {
      const {state , logOut} = this.props;
      console.log(state.currentUser)
    return (
      <div className="App">
    <button onClick={logOut} >Logout</button>
      </div>

    );
  }
}

export default LogOut;
