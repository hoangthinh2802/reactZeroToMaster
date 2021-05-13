import React, {Component} from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrokenClick2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrokenClick2 />
      </div> 
    )
  }
}

export default App;
