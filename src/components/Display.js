import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="calc-display">{this.props.currentDisplay}</div>;
  }
}

export default Display;
