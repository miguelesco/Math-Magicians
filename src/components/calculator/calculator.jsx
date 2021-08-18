/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay } from './styles';
import calculate from '../../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(obj, buttonName) {
    console.log(obj, buttonName);
    if (obj.keyboardSymbol === '=') {
      const newvalue = calculate(obj, buttonName);
      this.setState({ value: newvalue.total });
    }
    if (!obj.keyboardValue) {
      this.setState({ value: 0 });
    }
    this.setState({ value: `${obj.keyboardValue} ${obj.keyboardSymbol} ${obj.keyboardValue2}` });
  }

  render() {
    const { value } = this.state;
    return (
      <Container>
        <ValueDisplay>
          <p>{ value }</p>
        </ValueDisplay>
        <Keyboard updateValue={this.updateValue} />
      </Container>
    );
  }
}

export default Calculator;
