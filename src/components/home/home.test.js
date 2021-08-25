/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home', () => {
  it('should render the home page', () => {
    const { getByText } = render(<Home />);
    const title = getByText(/Welcome to our Page!/i);
    expect(title).toBeInTheDocument();
  });
});
