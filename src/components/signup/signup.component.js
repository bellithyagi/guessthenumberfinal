import React, {Component} from 'react';
import {database_config} from "../../config/config";
import firebase from "firebase/app/index";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useremail:[],
            password:[]

        }
        this.app = firebase.initializeApp(database_config);
        this.db = this.app.database().ref().child('usercredentials');
    }

    componentWillMount() {
        const usercredential = this.state.usercredential;
        this.db.on('child_added', snap => {
            usercredential.push({
                useremail: snap.val().useremail,
                password: snap.val().password
            })
            this.setState({
                usercredential: usercredential
            })
        })

    }

    pushCredentials(useremail, password){
        this.db.push().set({useremail: useremail, password:password})

    }


    signupSubmit(useremail, password){
        this.db.push().set({useremail: useremail, password: password})
    }

    submitCredentials() {
        this.setState({
            useremail: '',
            password: ''
        })
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
                                                       value={this.state.useremail}
                                                       onChange={event => this.setState({useremail : event.target.value})}></input>
                                            </div>
                                            <div className="input-group">
                                                <label for="password">Password</label>
                                                <div className="input-group-addon">
                                                    <i className="fa fa-lock fa-sm"></i>
                                                </div>
                                                <input type="password" id="password" className="form-control"
                                                       onChange={event => this.setState({password : event.target.value})}></input>

                                                <p>{this.state.useremail}</p>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign
                                                        Up
                                                    </button>
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