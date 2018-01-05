import React, { Component } from 'react';
import Signup from './components/signup/signup.component';
import Signin from './components/signin/signin.component';
import Landingpage from './components/landingpage/landingpage.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
         {/* <Landingpage useremail ="Belli"/>*/}
      </div>
    );
  }
}

export default App;
