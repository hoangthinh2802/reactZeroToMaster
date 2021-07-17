import React, { Component} from "react"
import axios from "axios";
import "./ZenQuote.css"


class ZenQuote extends Component {
    constructor(props){
        super(props)
        this.state = { quote: "", isLoaded: false}
    }
    componentDidMount(){
        //load data 
        axios.get("http://api.github.com/zen").then(response => 
        { 
           setTimeout(
               function() {
                this.setState({quote: response.data, isLoaded: true})
               }.bind(this), 3000
           ) 
        });
    }
    componentDidUpdate(){
        console.log("Inside component did update")
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div class='loader'>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                        <div class='circle'></div>
                    </div>
                )}
                
                
            </div>
        )
    }
}
export default ZenQuote