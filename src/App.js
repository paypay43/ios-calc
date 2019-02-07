import React from 'react';
import Display from './Display.js';
import InputPanel from './InputPanel.js';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      input: null,
      operator: null
    };
  }

  render() {
    return (
      <div class="calc-app">
        <Display />
        <InputPanel />
      </div>
    );
  }
}

export default App;
