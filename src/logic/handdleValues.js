/* eslint-disable linebreak-style */
const handdleValues = (value, state) => {
  const keyboard = state.keyboardSymbol ? state.keyboardValue2 : state.keyboardValue;
  switch (value) {
    case 'AC':
      return {
        keyboardValue: '',
        keyboardValue2: '',
        keyboardSymbol: '',
      };

    case '+/-': {
      const invertKeyboard = (Number(keyboard) * -1).toString();

      if (state.keyboardSymbol) {
        return ({
          ...state,
          keyboardValue2: invertKeyboard,
        });
      }
      return ({
        ...state,
        keyboardValue: invertKeyboard,
      });
    }

    case '.':
      if (state.keyboardSymbol) {
        return ({
          ...state,
          keyboardValue2: `${keyboard}.`,
        });
      }
      return ({
        ...state,
        keyboardValue: `${keyboard}.`,
      });

    default:
      if (!state.keyboardSymbol) {
        return {
          ...state,
          keyboardValue: state.keyboardValue + value,
        };
      }
      return {
        ...state,
        keyboardValue2: state.keyboardValue2 + value,
      };
  }
};

export default handdleValues;
