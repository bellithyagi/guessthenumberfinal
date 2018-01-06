import React, { Component } from 'react';
import Signup from './components/signup/signup.component';
import Signin from './components/signin/signin.component';
import Landingpage from './components/landingpage/landingpage.component';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
            <div >
                <Signup/>
                {/*<Landingpage useremail ="Belli"/>*/}
             {/*   <Signin/>*/}
            </div>


    );
  }
}

export default App;
