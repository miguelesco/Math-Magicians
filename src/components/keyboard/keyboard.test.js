/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Keyboard from './keyboard';

describe('Keyboard', () => {
  const props = {
    updateValue: () => {},
  };

  it('should render the keyboard', () => {
    const { getByText } = render(<Keyboard updateValue={props.updateValue} />);
    expect(getByText('AC')).toBeInTheDocument();
  });

  it('should render the keyboard', () => {
    const { getByText } = render(<Keyboard updateValue={props.updateValue} />);
    expect(getByText('5')).toBeInTheDocument();
  });
});
