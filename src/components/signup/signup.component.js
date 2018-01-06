import React, {Component} from 'react';
import {
    Link
} from 'react-router';
import firebase from '../../config/index'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userCreds: {},
            email: '',
            password: '',
            showSignin: false
        }
        //const router= React.PropTypes;
        this.userCredRef = firebase.database().ref().child('usercredentials');
    }

    signupSubmit = () => {
        const username = this.state.email;
        const password = this.state.password;
        this.userCredRef.push().set({email: username, password: password});
        if (username && password) {
            alert('Credentials saved successfully! You can press Sign-in link now');
        }
    }

    render() {
        return (

                <div className="login">

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">

                                <div className="login-card">
                                    <form className="signup-container">
                                        <div className="auth-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3 className="text-left txt-primary">Sign Up</h3>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="input-group">
                                                <label>Email</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-envelope fa-sm"/>
                                                </div>
                                                <input type="email" id="username" className="form-control"
                                                       value={this.state.email}
                                                       onChange={event => this.setState({email: event.target.value})}
                                                       required/>
                                            </div>
                                            <div className="input-group">
                                                <label>Password</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-lock fa-sm"/>
                                                </div>
                                                <input type="password" id="password" className="form-control"
                                                       value={this.state.password}
                                                       onChange={event => this.setState({password: event.target.value})}
                                                       required/>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">

                                                    <input value="Sign Up" type="submit"
                                                           className="btn btn-primary btn-md btn-block waves-effect text-center"
                                                           onClick={this.signupSubmit}>
                                                    </input>

                                                </div>
                                                <div className="text-center">
                                                    <span className="createaccount">Do you have an account?</span><Link
                                                    to='/signin'>Sign In</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

        )
    }
}

/*
Signup.contextTypes = {
  router: React.PropTypes.func.isRequired
}; */


export default Signup;