import React, { useState } from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import CocktailMenu from './components/CocktailMenu'
import { stack as BurgerMenu } from 'react-burger-menu'
import { Route, Switch, Link } from 'react-router-dom'

function App() {

  const [menuOpenState, setMenuOpenState] = useState(false)

  const hideMenu = () => {
    setMenuOpenState(!menuOpenState);
  };
  console.log(menuOpenState)

  return (
    <div className="App">
      <nav className="nav-bar">
        <BurgerMenu right width={250} id="burger-menu">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact-us">Contact</Link>
        </BurgerMenu>
      </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/menu" render={(props) => <CocktailMenu {...props} />} />
        <Route exact path="/contact-us" render={(props) => <Contact {...props} />} />
      </Switch>


    </div >
  );
}

export default App;
