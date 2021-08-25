/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './calculator';

describe('Calculator', () => {
  const props = {
    total: 20,
    next: 5,
    operation: '+',
  };

  it('should render without crashing', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('Lets do some Math')).toBeInTheDocument();
  });

  it('sould render the Total', () => {
    const calculator = render(
      <Calculator total={props.total} next={props.next} operation={props.operation} />,
    );
    expect(calculator.getByTestId('total')).toHaveTextContent(props.total);
  });

  it('sould render the Next', () => {
    const calculator = render(
      <Calculator total={props.total} next={props.next} operation={props.operation} />,
    );
    expect(calculator.getByTestId('next')).toHaveTextContent(props.next);
  });

  it('sould render the Operation', () => {
    const calculator = render(
      <Calculator total={props.total} next={props.next} operation={props.operation} />,
    );
    expect(calculator.getByTestId('operation')).toHaveTextContent(props.operation);
  });
});
