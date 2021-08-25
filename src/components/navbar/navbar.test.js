/* eslint-disable linebreak-style */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render Navbar', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Quote')).toBeInTheDocument();
    expect(getByText('Calculator')).toBeInTheDocument();
  });
});
