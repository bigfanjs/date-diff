import React, { Component } from "react";

import DateDiff from "./DateDiff";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Count the duration between two dates.</h1>
        <DateDiff />
      </div>
    );
  }
}

export default App;
