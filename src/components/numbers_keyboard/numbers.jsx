/* eslint-disable linebreak-style */
import React from 'react';
import Container, { NumberBtn } from './styles';

const numberArray = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

const Numbers = () => (
  <Container>
    {numberArray.map((number) => (
      <NumberBtn key={number} number={number}>
        {number}
      </NumberBtn>
    ))}
  </Container>
);

export default Numbers;
