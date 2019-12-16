import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Display from './Components/Display';


class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response.data);
      this.setState({players: response.data})
    })
    .catch('ERROR', error => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({
        players: response.data
      });
    })
    .catch('ERROR', error => {
      console.log(error);
    })
  }

  render(){
    return (
      <div className="App">
        <Display players={this.state.players}/>
      </div>

    )
  }
}

export default App;
