import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Clicker from './Clicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    )
  }
}

export default App;
