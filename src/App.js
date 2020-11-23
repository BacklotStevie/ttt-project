import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import CocktailMenu from './components/CocktailMenu'
import { Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/menu" render={(props) => <CocktailMenu {...props} />} />
        <Route exact path="/contact-us" render={(props) => <Contact {...props} />} />
      </Switch>


    </div>
  );
}

export default App;
