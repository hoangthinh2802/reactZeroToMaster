import logo from './logo.svg';
import './App.css';
import CoinContainer from './CoinContainer';
import { Component } from 'react';


class App extends Component {
  render(){
    return(
      <div className="App">
        <CoinContainer />
      </div>
    )
  }
}

export default App;
