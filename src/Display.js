import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0
    };
  }

  render() {
    return <div>this.state.displayValue</div>;
  }
}

export default Display;
