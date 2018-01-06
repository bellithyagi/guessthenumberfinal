import React, {Component} from 'react';
import Signin from "../signin/signin.component";
import PropTypes from 'prop-types';
import Inputnumber from '../inputnumber/inputnumber.component';
import Numberform from '../numberform/numberform.component';
import {database_config} from "../../config/config";
import firebase from 'firebase/app';
import 'firebase/database';

class Landingpage extends Component {
    debugger;
    constructor(props) {
        super(props);
        this.app = firebase.initializeApp(database_config);
        this.db = this.app.database().ref().child('typedNumber');

        this.state = {
            typedNumber: []
        }
        this.addNumber = this.addNumber.bind(this);
    }

    componentWillMount() {

        const previousNumbers = this.state.typedNumber;
        this.db.on('child_added', snap => {
            previousNumbers.push({
                id: snap.id,
                addedNumber: snap.val().addedNumber
            })
            this.setState({
                typedNumber: previousNumbers
            })
        })

    }

    addNumber=(number) => {
        if(number === this.state.hiddenNumber){
            debugger;
            console.log('success');
        }
        if (this.state.typedNumber.length < 3) {
            this.db.push().set({addedNumber: number})
        } else {
            {
                const alertContent = this.attemptPopup();
                console.log(JSON.stringify(alertContent));
                document.querySelector('.alertcontainer').textContent = alertContent;

            }
        }
        console.log(this.state.typedNumber.length);
    }


    render() {
        return (
            <div className="landingcontainer">
                <div className="logoff clearfix">
                    <btn className="btn pull-right"><i className="fa fa-power-off fa-2x"></i> </btn>
                </div>
                <div className="container">
                    <h2 className="text-center">Welcome {this.useremail} </h2>
                    <Numberform addNumber={this.addNumber}/>

                    <div className="alertcontainer"></div>
                    <div className="numberpanel">
                        {
                            this.state.typedNumber.map((number) => {
                                return (
                                    <Inputnumber addedNumber={number.addedNumber} numberId={number.id} key={number.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Signin.propTypes = {
    useremail: PropTypes.string
}
export default Landingpage;