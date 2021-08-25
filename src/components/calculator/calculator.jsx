/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay, Error, Title } from './styles';
import calculate from '../../logic/calculate';

const Calculator = (props) => {
  const [calculationObj, setCalculationObj] = useState(props);

  const updateValue = (value) => {
    const newvalue = calculate(calculationObj, value);
    setCalculationObj((state) => ({ ...state, ...newvalue }));
  };

  const { total, next, operation } = calculationObj;

  let error = null;
  if (next === '0' && operation === '÷') {
    error = 'Division by zero is undefined';
  } else {
    error = null;
  }
  return (
    <>
      <Title>Lets do some Math</Title>
      <Container>
        <ValueDisplay>
          <p data-testid="total">{total}</p>
          {' '}
          <p data-testid="operation">{operation}</p>
          {' '}
          <p data-testid="next">{next}</p>
        </ValueDisplay>
        <Error>{error}</Error>
        <Keyboard updateValue={updateValue} error={error} />
      </Container>
    </>
  );
};

Calculator.defaultProps = {
  total: 0,
  next: null,
  operation: null,
};

export default Calculator;
