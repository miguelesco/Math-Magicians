/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Numbers from './numbers';

describe('Numbers', () => {
  const props = {
    updateKeyboardValue: () => {},
  };
  const numberArray = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  it('should render correctly', () => {
    const { getByText } = render(<Numbers updateKeyboardValue={props.updateKeyboardValue} />);
    numberArray.forEach((number) => {
      expect(getByText(number)).toBeInTheDocument();
    });
  });
});
