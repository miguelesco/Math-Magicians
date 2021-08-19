/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Container, { SimbolsBtn } from './styles';

const symbolsArray = ['÷', 'x', '-', '+', '='];

function Simbols({ updateKeyboardSymbol, error }) {
  const clickSymbol = (symbol) => {
    if (error === null) {
      updateKeyboardSymbol(symbol);
    }
  };

  return (
    <Container>
      {symbolsArray.map((symbol) => (
        <SimbolsBtn key={symbol} onClick={() => clickSymbol(symbol)}>
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
  error: PropTypes.string,
};

Simbols.defaultProps = {
  error: null,
};

export default Simbols;
