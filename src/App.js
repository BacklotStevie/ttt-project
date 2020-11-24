import React, { useState } from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import CocktailMenu from './components/CocktailMenu'
import SubmitInfo from './components/SubmitInfo'
import { stack as BurgerMenu } from 'react-burger-menu'
import { Route, Switch, Link } from 'react-router-dom'

function App() {

  const [menuOpenState, setMenuOpenState] = useState(null)

  const hideMenu = () => {
    setMenuOpenState(false);

  };

  const handleStateChange = (state) => {
    setMenuOpenState(state.menuOpenState)
  }
  
  return (
    <div className="App">
      <nav className="nav-bar">
        <BurgerMenu isOpen={menuOpenState} right width={250} id="burger-menu"
          onStateChange={(state) => handleStateChange(state)}
        >
          <Link onClick={hideMenu} to="/">Home</Link>
          <Link onClick={hideMenu} to="/drinks">Drinks</Link>
          <Link onClick={hideMenu} to="/contact-us">Contact</Link>
          <Link onClick={hideMenu} to="/submit"><button className="cta-btn">GET IN HERE!</button></Link>
        </BurgerMenu>
      </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/drinks" render={(props) => <CocktailMenu {...props} />} />
        <Route exact path="/contact-us" render={(props) => <Contact {...props} />} />
        <Route exact path="/submit" render={(props) => <SubmitInfo {...props} />} />
      </Switch>
    </div >
  );
}

export default App;
