/* eslint-disable linebreak-style */
import react from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Calculator from './components/calculator/calculator';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

class App extends react.PureComponent {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
