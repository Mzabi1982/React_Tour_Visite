import React, { Component } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import List from './Components/List/List'


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <List />

    </React.Fragment>
    )
  
   
  
  }
}

export default App;
