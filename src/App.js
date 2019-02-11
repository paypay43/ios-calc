import React from 'react';
import Display from './components/Display.js';
import InputPanel from './components/InputPanel.js';
import './App.css';

class App extends React.Component {
  state = {
    currentDisplay: 0,
    total: null,
    operator: null
  };

  render() {
    return (
      <div className="calc-app">
        <Display currentDisplay={this.state.currentDisplay} />
        <InputPanel />
      </div>
    );
  }
}

export default App;
