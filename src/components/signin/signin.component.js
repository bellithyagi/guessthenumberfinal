import React, {Component} from 'react';
import Signup from '../signup/signup.component';
/*import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'*/
import PropTypes from 'prop-types';
import {database_config} from "../../config/config";
import firebase from "firebase/app/index";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.myapp = firebase.initializeApp(database_config);
        this.db = this.myapp.database().ref().child('usercredentials');
        this.state = {
            credentials: []
        }
        this.signinPass = this.signinPass.bind(this);

    }

    componentWillMount() {
        this.db.on('value', (data) => {

            const credentials = data.val();
            console.log(credentials);

            const keys = Object.keys(credentials);


            var userData = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var username = credentials[key].email;
                var password = credentials[key].password;

                userData.push({useremail: username, password: password});
            }

            this.setState({
                credentials: userData
            })
        }, (err) => {
            console.log('Error');
            console.log(err)
        });
    }

    signinPass() {
        var userdata = this.state.credentials;
        var inputUseremail = document.querySelector('#username').value;
        var inputPassword = document.querySelector('#password').value;
        var matchFound = false;
        for (var i = 0; i < userdata.length; i++) {
            if (inputUseremail === userdata[i].useremail && inputPassword === userdata[i].password) {
                matchFound = true;
                console.log('Success');
            }
        }
        if (matchFound === false) {
            alert('Invalid');
        }
    }

    render() {
        return (
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
                                                <input type="email" id="username" className="form-control"
                                                       required></input>
                                            </div>
                                            <div className="input-group">
                                                <label for="password">Password</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-lock fa-sm"></i>
                                                </div>
                                                <input type="password" id="password" className="form-control"
                                                       required></input>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button type="button"
                                                            className="btn btn-primary btn-md btn-block waves-effect"
                                                            onClick={this.signinPass}>Sign
                                                        In
                                                    </button>
                                                </div>
                                            </div>
                                            {/*<Router>
                                                <div className="text-center">
                                                    <span className="createaccount">Don't have an account?</span>
                                                    <Link to="/">Sign Up</Link>
                                                    <Route exact path="/" component={Signup}/>
                                                    <Route path="/signin" component={Signin}/>
                                                </div>
                                            </Router>*/}


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


export default Signin;