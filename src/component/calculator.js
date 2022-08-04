import React from 'react';
import './calculators.css';
import Button from './calButton';
import Input from './calInputs';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="CalContainer">
        <Input />
        <div className="BtnContainer">
          <Button text="AC" />
          <Button text="+/-" />
          <Button text="%" />
          <Button text="÷" bgColor="Orange" />
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="&times;" bgColor="Orange" />
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" bgColor="Orange" />
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Button text="+" bgColor="Orange" />
          <Button text="0" col="ColTwo" />
          <Button text="." />
          <Button text="=" bgColor="Orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;