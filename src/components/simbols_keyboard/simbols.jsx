/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Container, { SimbolsBtn } from './styles';

const symbolsArray = ['÷', 'x', '-', '+', '='];

function Simbols({ updateKeyboardSymbol }) {
  return (
    <Container>
      {symbolsArray.map((symbol) => (
        <SimbolsBtn key={symbol} onClick={() => updateKeyboardSymbol(symbol)}>
          {' '}
          {symbol}
          {' '}
        </SimbolsBtn>
      ))}
    </Container>
  );
}

Simbols.propTypes = {
  updateKeyboardSymbol: PropTypes.func.isRequired,
};

export default Simbols;
