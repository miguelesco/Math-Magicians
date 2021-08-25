/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Simbols from './simbols';

describe('Simbols', () => {
  const props = {
    updateKeyboardSymbol: () => {},
  };
  const symbolsArray = ['÷', 'x', '-', '+', '='];

  it('should render correctly', () => {
    const { getByText } = render(<Simbols updateKeyboardSymbol={props.updateKeyboardSymbol} />);
    symbolsArray.forEach((number) => {
      expect(getByText(number)).toBeInTheDocument();
    });
  });
});
