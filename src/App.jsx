import react from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Calculator from './components/calculator/calculator';

class App extends react.PureComponent {
  render() {
    return (
      <react.Fragment>
        <GlobalStyles />
        <Calculator />
      </react.Fragment>
    );
  }
}

export default App;
