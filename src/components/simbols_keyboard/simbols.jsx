/* eslint-disable linebreak-style */
import React from 'react';
import Container, { SimbolsBtn } from './styles';

const symbolsArray = ['÷', 'x', '-', '+', '='];

const Simbols = () => (
  <Container>
    {symbolsArray.map((symbol) => (
      <SimbolsBtn key={symbol}>
        {' '}
        {symbol}
        {' '}
      </SimbolsBtn>
    ))}
  </Container>
);

export default Simbols;
