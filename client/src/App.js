import React from 'react';
import './App.css';
import './appStyles.scss'; 
import PlayerCard from './components/PlayerCard'; 
import NavBar from './components/NavBar'; 
import ChungusData from './components/DummyComponent'; 

import axios from 'axios'; 

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      searchPlayers: [], 
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data); 
      this.setState({
        searchPlayers: response.data,
      })
    })
    .catch(err => {
      console.log('oh no', err); 
    }); 
  }

  render() {
    return (
      <div className="App">
        <h2>The React APP Chung</h2> 
        <div>
          <NavBar />
          <ChungusData /> <br/><br/>
          <PlayerCard players={this.state.searchPlayers} />
        </div>
      </div>
    );
  }

}

export default App;
