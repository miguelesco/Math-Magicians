/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import Numbers from '../numbers_keyboard/numbers';
import Simbols from '../simbols_keyboard/simbols';
import KeyboardContainer from './styles';

class Keyboard extends PureComponent {
  render() {
    return (
      <KeyboardContainer>
        <Numbers />
        <Simbols />
      </KeyboardContainer>
    );
  }
}

export default Keyboard;
