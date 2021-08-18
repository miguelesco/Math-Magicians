/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Numbers from '../numbers_keyboard/numbers';
import Simbols from '../simbols_keyboard/simbols';
import KeyboardContainer from './styles';

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
      const keyboard = state.keyboardSymbol ? state.keyboardValue2 : state.keyboardValue;
      switch (value) {
        case 'AC':
          return {
            keyboardSymbol: '',
            keyboardValue: '',
            keyboardValue2: '',
          };

        case '+/-': {
          const invertKeyboard = (Number(keyboard) * -1).toString();

          if (state.keyboardSymbol) {
            return ({
              keyboardValue2: invertKeyboard,
            });
          }
          return ({
            keyboardValue: invertKeyboard,
          });
        }

        case '.':
          if (state.keyboardSymbol) {
            return ({
              keyboardValue2: `${keyboard}.`,
            });
          }
          return ({
            keyboardValue: `${keyboard}.`,
          });

        default:
          if (!state.keyboardSymbol) {
            return {
              keyboardValue: state.keyboardValue + value,
            };
          }
          return {
            keyboardValue2: state.keyboardValue2 + value,
          };
      }
    });

    updateValue(this.state);
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
