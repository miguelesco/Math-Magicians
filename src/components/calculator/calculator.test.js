/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './calculator';

describe('Calculator', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('Lets do some Math')).toBeInTheDocument();
  });
});
