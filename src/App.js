import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarTop from './components/NavbarTop/index.jsx'
import Home from './pages/Home'
import NavbarBtm from './components/NavbarBtm/index.jsx'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarTop />
      <Switch>
        <Route exact path={["/","/index.html"]} component={Home} />
        <Route path={"/aboutme.html"} component={AboutMe} />
        <Route path={"/contact.html"} component={Contact} />
        <Route path={"/portfolio.html"} component={Portfolio} />
        {/* <Home />
        <Contact />
        <Portfolio />
        <AboutMe /> */}
      </Switch>
      <NavbarBtm />
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
