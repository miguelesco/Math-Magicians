/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './Quote';

describe('Quote', () => {
  it('Should render the Quote', () => {
    const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding';
    const { getByText } = render(<Quote />);

    expect(getByText(quote)).toBeInTheDocument();
  });

  it('Should render the Author', () => {
    const author = 'William Paul Thurston';
    const { getByText } = render(<Quote />);

    expect(getByText(author)).toBeInTheDocument();
  });
});
