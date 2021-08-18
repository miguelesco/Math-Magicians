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

  updateValue(value) {
    const newvalue = calculate(this.state, value);
    this.setState((state) => ({ ...state, ...newvalue }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <Container>
        <ValueDisplay>
          <p>{total}</p>
          {' '}
          <p>{operation}</p>
          {' '}
          <p>{next}</p>
        </ValueDisplay>
        <Keyboard updateValue={this.updateValue} />
      </Container>
    );
  }
}

export default Calculator;
