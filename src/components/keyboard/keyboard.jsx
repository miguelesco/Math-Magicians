/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Numbers from '../numbers_keyboard/numbers';
import Simbols from '../simbols_keyboard/simbols';
import KeyboardContainer from './styles';
import handdleValues from '../../logic/handdleValues';

class Keyboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyboardValue: '',
      keyboardValue2: '',
      keyboardSymbol: '',
    };
    this.updateKeyboardValue = this.updateKeyboardValue.bind(this);
    this.updateKeyboardSymbol = this.updateKeyboardSymbol.bind(this);
  }

  updateKeyboardValue(value) {
    const { updateValue } = this.props;
    this.setState((state) => {
      const newState = handdleValues(value, state);
      updateValue(newState);
      return newState;
    });
  }

  updateKeyboardSymbol(symbol) {
    const { updateValue } = this.props;

    this.setState({
      keyboardSymbol: symbol,
    });

    updateValue(this.state);
  }

  render() {
    return (
      <KeyboardContainer>
        <Numbers updateKeyboardValue={this.updateKeyboardValue} />
        <Simbols updateKeyboardSymbol={this.updateKeyboardSymbol} />
      </KeyboardContainer>
    );
  }
}

Keyboard.propTypes = {
  updateValue: PropTypes.func.isRequired,
};

export default Keyboard;
