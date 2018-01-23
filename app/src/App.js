import React, { Component } from 'react';
import UserCard from './components/UserCard'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <UserCard 
        image={'https://i.pinimg.com/736x/d5/52/57/d55257bb4542881c2c4aaddadfda23b9--computer-science.jpg'}
        name={'homero gato'}
        description={'la la lalalal ala la al ala al al ala la'}
      />
    );
  }
}

export default App;
