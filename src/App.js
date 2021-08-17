import react from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Calculator from './components/calculator/calculator';

function App() {
  return (
    <react.Fragment>
      <GlobalStyles />
      <Calculator />
    </react.Fragment>
  );
}

export default App;
