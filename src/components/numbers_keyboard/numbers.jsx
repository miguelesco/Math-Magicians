/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Container, { NumberBtn } from './styles';

const numberArray = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

function Numbers({ updateKeyboardValue }) {
  return (
    <Container>
      {numberArray.map((number) => (
        <NumberBtn key={number} number={number} type="button" onClick={() => updateKeyboardValue(number)}>
          {number}
        </NumberBtn>
      ))}
    </Container>
  );
}

Numbers.propTypes = {
  updateKeyboardValue: PropTypes.func.isRequired,
};

export default Numbers;
