import React, {Component} from 'react';
import Signin from "../signin/signin.component";
import Inputnumber from '../inputnumber/inputnumber.component';
import Numberform from '../numberform/numberform.component';
import firebase from '../../config'
import {Link} from 'react-router';

class Landingpage extends Component {

    constructor(props) {
        super(props);
        this.db = firebase.database().ref().child('typedNumber');

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
        if (this.state.typedNumber.length < 3) {
            this.db.push().set({addedNumber: number})
        } else {
            alert('You have exceeded your attempt limit');
        }
        console.log(this.state.typedNumber.length); //This is to know that user entered number is being saved in the database
    }
   

    render() {
      
        return (
            <div className="landingcontainer">
                <div className="logoff clearfix">
                    <Link to='/signin'>
                    <button className="btn btn-primary pull-right">Log Out <i className="fa fa-power-off fa-1x"></i> </button>
                    </Link>
                </div>
                <div className="container">
                    <h2 className="text-center">Welcome</h2>
                    <Numberform addNumber={this.addNumber} typedNumber = {this.state.typedNumber}/>
                    
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

export default Landingpage;
