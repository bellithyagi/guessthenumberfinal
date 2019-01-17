import React, {Component} from 'react';

const Inputnumber = (props) => {

        return(
            <div>
                <div className="panel panel-number">
                    <div className="panel-body">
                        <span>
                        <i>You just did type the number,
                            <b>{props.addedNumber}</b></i></span>
						<p>Pradyu</p>
                    </div>
                </div>
            </div>
        )


}

export default Inputnumber;