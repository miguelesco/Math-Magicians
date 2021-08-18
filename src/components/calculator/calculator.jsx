/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import Keyboard from '../keyboard';
import Container, { ValueDisplay } from './styles';

class Calculator extends PureComponent {
  render() {
    return (
      <Container>
        <ValueDisplay>
          <p>0</p>
        </ValueDisplay>
        <Keyboard />
      </Container>
    );
  }
}

export default Calculator;
