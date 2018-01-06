import React, {Component} from 'react';
import {Link} from 'react-router';
import firebase from '../../config';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.database().ref().child('usercredentials');
        this.state = {
            credentials: []
        }
        this.signinPass = this.signinPass.bind(this);

    }

    componentWillMount() {
        this.db.on('value', (data) => {

            const credentials = data.val();
            console.log(credentials); //This is just to know that data is being saved in database

            const keys = Object.keys(credentials);


            let userData = [];
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let username = credentials[key].email;
                let password = credentials[key].password;

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
        let userdata = this.state.credentials;
        let inputUseremail = document.querySelector('#username').value;
        let inputPassword = document.querySelector('#password').value;
        let matchFound = false;
        for (let i = 0; i < userdata.length; i++) {
            if (inputUseremail === userdata[i].useremail && inputPassword === userdata[i].password) {
                matchFound = true;
                console.log('Success');
            }
        }
        if (matchFound === false) {
            alert('Invalid User. Due to router glitch, we are taking you to number entry screen. Sorry for the inconvenience.');
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
                                            <hr/>
                                            <div className="input-group">
                                                <label>Email</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-envelope fa-sm"/>
                                                </div>
                                                <input type="email" id="username" className="form-control"
                                                       required/>
                                            </div>
                                            <div className="input-group">
                                                <label >Password</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-lock fa-sm"/>
                                                </div>
                                                <input type="password" id="password" className="form-control"
                                                       required/>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <Link to='/guessnumber' disabled>
                                                        <button type="button"
                                                                className="btn btn-primary btn-md btn-block waves-effect"
                                                                onClick={this.signinPass}>Sign
                                                            In
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="text-center">
                                                    <span className="createaccount">Don't have an account?</span><Link
                                                    to='/'>Sign Up</Link>
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


export default Signin;