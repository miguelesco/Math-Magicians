/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Numbers from '../numbers_keyboard/numbers';
import Simbols from '../simbols_keyboard/simbols';
import KeyboardContainer from './styles';

class Keyboard extends PureComponent {
  constructor(props) {
    super(props);
    this.updateKeyboard = this.updateKeyboard.bind(this);
  }

  updateKeyboard(value) {
    const { updateValue } = this.props;

    updateValue(value);
  }

  render() {
    return (
      <KeyboardContainer>
        <Numbers updateKeyboardValue={this.updateKeyboard} />
        <Simbols updateKeyboardSymbol={this.updateKeyboard} />
      </KeyboardContainer>
    );
  }
}

Keyboard.propTypes = {
  updateValue: PropTypes.func.isRequired,
};

export default Keyboard;
