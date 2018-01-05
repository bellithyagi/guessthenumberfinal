import React, { Component } from 'react';
import Signup from '../signup/signup.component';
//import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

class Signin extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="login">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <div className="login-card">
                                    <form className="signup-container">
                                        <div className="auth-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3 className="text-left txt-primary">Sign In</h3>
                                                </div>
                                            </div>
                                            <hr></hr>
                                                <div className="input-group">
                                                    <label for="username">Email</label>
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-envelope fa-sm"></i>
                                                    </div>
                                                    <input type="email" id="username" className="form-control" required></input>
                                                </div>
                                                <div className="input-group">
                                                    <label for="password">Password</label>
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-lock fa-sm"></i>
                                                    </div>
                                                    <input type="password" id="password" className="form-control" required></input>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign In</button>
                                                    </div>
                                                </div>
                                            <div className="text-center">
                                                <span className="createaccount">Don't have an account?</span>
                                                <a href="signup.html">Sign Up</a>
                                            </div>
                                            {/*<BrowserRouter>
                                                <div>
                                                <Route path="/signup" component={Signup}></Route>
                                                </div>
                                            </BrowserRouter>*/}

                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div></div>
        )
    }
}


export default Signin;