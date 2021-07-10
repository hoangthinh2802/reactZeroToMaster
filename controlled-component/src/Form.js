import React, { Component } from "react"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email:"", password: "" };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value})
    }
    handleEmailChange(evt) {
        this.setState({email: evt.target.value})
    }
    handlePasswordChange(evt){
        this.setState({password: evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`)
        this.setState({username: ""})
    }

    render(){
        return(
            <div>
                <h1>Form demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}
export default Form;