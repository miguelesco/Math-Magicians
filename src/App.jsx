/* eslint-disable linebreak-style */
import react from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/navbar/Navbar';
import Calculator from './components/calculator/calculator';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';

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
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
