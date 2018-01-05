import React, {Component} from 'react';

class Numberform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNumber:''
        }
        this.handleUserinput = this.handleUserinput.bind(this);
        this.submitNumber = this.submitNumber.bind(this);
    }
    handleUserinput(e) {
        this.setState({
            newNumber: e.target.value
        })
    }
    submitNumber(){
        this.props.addNumber(this.state.newNumber);
        this.setState({
            newNumber: ''
        })

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group">
                        <input type="number" className="form-control" placeholder="Type the number"
                               value={this.state.newNumber} onChange={this.handleUserinput}></input>
                        <span className="input-group-btn">
        <button className="btn btn-primary" type="button" onClick={this.submitNumber}>Check</button>
      </span>
                    </div>
                    <p className="text-center numberrange">Enter the number between the range of 1-10 and totally you've 3 attempts to guess the number   </p>
                </div>
            </div>
        )
    }
}

export default Numberform;