import React, {Component} from "react";
// import "./WiseSquare.css";

class WiseSquare extends Component {
    dispenseWisdom() {
        let messages = [
            "A fool thinks himself to be wise, but  wise man knows himself to e a fool.",
            "Educating the mind without educating the heart is no education at all",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ];
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render() {
        return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>😊</div>
    }
}

export default WiseSquare;