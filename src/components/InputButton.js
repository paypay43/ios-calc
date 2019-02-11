import React, { Component } from 'react';
import './InputButton.css';

export default class InputButton extends Component {
  render() {
    return (
      <div className="input-component">
        <button>{this.props.action}</button>
      </div>
    );
  }
}
