/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay } from './styles';
import calculate from '../../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(obj) {
    if (obj.keyboardSymbol === '=') {
      const newvalue = calculate(this.state, obj.keyboardValue);
      this.setState((state) => ({ ...state, ...newvalue }));
    }
    if (!obj.keyboardValue) {
      this.setState({ value: 0 });
    }
    this.setState({ value: `${obj.keyboardValue} ${obj.keyboardSymbol} ${obj.keyboardValue2}` });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <Container>
        <ValueDisplay>
          <p>{total}</p>
          {' '}
          <p>{next}</p>
          {' '}
          <p>{operation}</p>
        </ValueDisplay>
        <Keyboard updateValue={this.updateValue} />
      </Container>
    );
  }
}

export default Calculator;
