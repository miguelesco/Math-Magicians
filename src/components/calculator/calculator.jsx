/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay, Error, Title } from './styles';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculationObj, setCalculationObj] = useState({
    total: null || 0,
    next: null,
    operation: null,
  });

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
          <p>{total}</p>
          {' '}
          <p>{operation}</p>
          {' '}
          <p>{next}</p>
        </ValueDisplay>
        <Error>{error}</Error>
        <Keyboard updateValue={updateValue} error={error} />
      </Container>
    </>
  );
};

export default Calculator;
