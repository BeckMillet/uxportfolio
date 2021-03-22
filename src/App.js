import React, { useState } from 'react';
import logo from './imgs/logo.png';
import './App.css';
import Home from './pages/home';
import Uxr from './pages/uxr';
import Dev from './pages/dev';
import About from './pages/about';
import Nav from './nav';
import { 
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const NavSidebar = ({ open}) => {
  const className = open ? 'sidebar' : 'sidebar closed';
  return (
    <div open={open} className={className}>
      <Nav />
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = (ev) => { setOpen(!open); 
}

const burgerClass = open ? 'navburger' : 'navburger closed';
const menuIcon = open ? '#icon-menu' : '#icon-menu-open';

  return (
    <div className="app">
      <header className="app-header">
      <svg className={burgerClass} onClick={toggleSidebar}><use xlinkHref={menuIcon}></use></svg>
      <div class="divider-vertical-brand"></div>
        <img src= {logo} className="logo" alt="logo" href=''/>
        <p className="title">Beck Millet</p>
      </header>
  
      <div className='app-main'>
        <Router hashType= 'noslash'>
          <Switch>
            <Route path="/" exact>
              <NavSidebar open={open} />
              <Home />
            </Route>
            <Route path="/home" exact>
              <NavSidebar open={open} />
              <Home />
            </Route>
            <Route path="/research" exact>
              <NavSidebar open={open}  />
              <Uxr />
            </Route>
            <Route path="/dev" exact>
              <NavSidebar open={open} />
              <Dev />
            </Route>
            <Route path="/about" exact>
              <NavSidebar open={open} />
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
