import React, {Component} from 'react';

const Inputnumber = (props) => {

        return(
            <div>
                <div className="panel panel-number">
                    <div className="panel-body">
                        You just did type the number,
                        {props.addedNumber}
                    </div>
                </div>
            </div>
        )


}

export default Inputnumber;