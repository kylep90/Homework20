import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarTop from './components/NavbarTop/index.jsx'
import Home from './pages/Home'
import NavbarBtm from './components/NavbarBtm/index.jsx'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarTop />
      <Switch>
        <Route exact path={["/","/index.html"]} component={Home} />
        <Route exact path={"/aboutme.html"} component={AboutMe} />
        <Route exact path={"/contact.html"} component={Contact} />
        <Route exact path={"/portfolio.html"} component={Portfolio} />
        {/* <Home />
        <Contact />
        <Portfolio />
        <AboutMe /> */}
      </Switch>
      <NavbarBtm />
      </BrowserRouter>
    </div>
  );
}

export default App;
