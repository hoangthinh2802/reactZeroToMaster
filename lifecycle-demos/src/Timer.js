import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state= {time:new Date()}
        console.log("In Constructor!")
    }
    componentDidMount() {
        console.log("In Component Did Mount");
        this.TimerID = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    render() {
        console.log("In render");
        return <h1>{this.state.time.getSeconds()}</h1>
    }
}

export default Timer