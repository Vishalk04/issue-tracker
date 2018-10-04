import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueListComponent from './IssueListComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssueListComponent/>
      </div>
    );
  }
}

export default App;
//<HeaderComponent/>