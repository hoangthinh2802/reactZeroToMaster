import React, { Component} from "react";

class AnnoyingForm extends Component {

    handleKeyUp(evt) {
        // alert ("You pressed something!");
        if (EventTarget.keyCode === 5) {
            alert ("****BABY YOU KNOW !*******")
        } else {
            alert("Boo!")
        }
    }

    render(){
        return (
            <div>
                <h3>Tyr Typing In Here: </h3>
                <textarea onKeyUp={this.handleKeyUp} />
            </div>
        )

    }
}
export default AnnoyingForm;