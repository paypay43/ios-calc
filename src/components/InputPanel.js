import React from 'react';
import InputButton from './InputButton';
import STORE from '../STORE';
import './InputPanel.css';

class InputPanel extends React.Component {
  render() {
    return (
      <div className="inputPanel">
        <div className="inputRow">
          <InputButton action={STORE[0]} />
          <InputButton action={STORE[1]} />
          <InputButton action={STORE[2]} />
          <InputButton action={STORE[3]} />
        </div>
        <div className="inputRow">
          <InputButton action={STORE[4]} />
          <InputButton action={STORE[5]} />
          <InputButton action={STORE[6]} />
          <InputButton action={STORE[7]} />
        </div>
        <div className="inputRow">
          <InputButton action={STORE[8]} />
          <InputButton action={STORE[9]} />
          <InputButton action={STORE[10]} />
          <InputButton action={STORE[11]} />
        </div>
        <div className="inputRow">
          <InputButton action={STORE[12]} />
          <InputButton action={STORE[13]} />
          <InputButton action={STORE[14]} />
          <InputButton action={STORE[15]} />
        </div>
        <div className="inputRow">
          <InputButton action={STORE[16]} />
          <InputButton action={STORE[17]} />
          <InputButton action={STORE[18]} />
        </div>
      </div>
    );
  }
}

export default InputPanel;
