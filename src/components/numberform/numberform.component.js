import React, {Component} from 'react';

class Numberform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNumber: '',
            hiddenNumber: 5,
            showsuccesMessage: false
        }
        this.handleUserinput = this.handleUserinput.bind(this);
        this.submitNumber = this.submitNumber.bind(this);
    }

    handleUserinput = (e) => {
        this.setState({
            newNumber: e.target.value
        })

        if (parseInt(e.target.value) > 10) {

            document.querySelector('.rangeerror').style.display = 'block';
        } else {
            document.querySelector('.rangeerror').style.display = 'none';
        }
    }
    submitNumber = () => {

        if (this.state.newNumber == this.state.hiddenNumber) {
            this.setState({
                showsuccesMessage: true
            })
        }
        if (this.state.newNumber.length && this.state.newNumber != this.state.hiddenNumber) {
            this.props.addNumber(this.state.newNumber);
        }

        this.setState({
            newNumber: ''
        })


    }
    attemptPopup = () => {
        return (
            <div>
                <div className="alert alert-success" role="alert"><strong>Oh wow!</strong> You guessed it right! and the
                    number is {this.state.hiddenNumber}
                </div>
            </div>
        )
    }

    render() {
        const showsuccesMessage = this.state.showsuccesMessage;
        let successmessage;
        if (showsuccesMessage) {
            successmessage = this.attemptPopup();
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input type="number" className="form-control" placeholder="Type the number"
                                   value={this.state.newNumber} onChange={this.handleUserinput}/>
                            <span className="input-group-btn">
        <button className="btn btn-primary" type="button" onClick={this.submitNumber}>Check</button>
      </span>
                        </div>

                    </div>
                    <p className="rangeerror text-center"><b>Please enter a number between the range 1-10</b></p>
                    <p className="text-center numberrange">You've
                        3 attempts to guess the number. </p>


                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">{successmessage}</div>
                </div>
            </div>
        )
    }
}

export default Numberform;
