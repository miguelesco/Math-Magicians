/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay, Error } from './styles';
import calculate from '../../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null || 0,
      next: null,
      operation: null,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(value) {
    const newvalue = calculate(this.state, value);
    this.setState((state) => ({ ...state, ...newvalue }));
  }

  render() {
    const { total, next, operation } = this.state;
    let error = null;
    if (next === '0' && operation === '÷') {
      error = 'Division by zero is undefined';
    } else {
      error = null;
    }
    return (
      <Container>
        <ValueDisplay>
          <p>{total}</p>
          {' '}
          <p>{operation}</p>
          {' '}
          <p>{next}</p>
        </ValueDisplay>
        <Error>{error}</Error>
        <Keyboard updateValue={this.updateValue} error={error} />
      </Container>
    );
  }
}

export default Calculator;
