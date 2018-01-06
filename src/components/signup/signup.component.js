import React, {Component} from 'react';
import {database_config} from "../../config/config";
import firebase from "firebase/app/index";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Signin from "../signin/signin.component";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCreds: {},
            email: '',
            password: '',
            userWelcome: '',
            showSignin: false
        }
        this.onsignUp = this.onsignUp.bind(this);
        this.firebases = firebase.initializeApp(database_config);
        this.userCredRef = this.firebases.database().ref().child('usercredentials');
    }


    componentWillMount = () => {
        this.userCredRef.on('child_added', snapshot => {
            let user = snapshot.val().email;
            this.setState({
                userWelcome: `Welcome ${user}!`
            })
        })

    }

    signupSubmit = () => {
        const username = this.state.email;
        const password = this.state.password;
        this.userCredRef.push().set({email: username, password: password})
    }

    submitCredentials = () => {
        this.setState({
            email: '',
            password: ''
        })
    }
    onsignUp = () =>{
        this.setState({
            showSignin: true,
        });
    }

    render() {
        return (
            <div>
                <div className="login">

                    <div className="container">
                        <div className="row">
                            {this.state.userWelcome && <div>{this.state.userWelcome}</div>}
                            <div className="col-sm-12">

                                <div className="login-card">
                                    <form className="signup-container">
                                        <div className="auth-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3 className="text-left txt-primary">Sign Up</h3>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="input-group">
                                                <label for="username">Email</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-envelope fa-sm"></i>
                                                </div>
                                                <input type="email" id="username" className="form-control"
                                                       value={this.state.email}
                                                       onChange={event => this.setState({email: event.target.value})}></input>
                                            </div>
                                            <div className="input-group">
                                                <label for="password">Password</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-lock fa-sm"></i>
                                                </div>
                                                <input type="password" id="password" className="form-control"
                                                       value={this.state.password}
                                                       onChange={event => this.setState({password: event.target.value})}></input>

                                                <p>{this.state.useremail}</p>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                                                            onClick={this.signupSubmit}>Sign
                                                        Up
                                                    </button>

                                                </div>
                                                <div className="text-center">
                                                    <span className="createaccount">Do you have an account?</span><a onClick={this.onsignUp}>Sign In</a>
                                                    {this.state.showSignin ?
                                                        <Signin /> :
                                                        null
                                                    } </div>
                                                <div>

                                                </div>
                                            </div>


                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Signup;