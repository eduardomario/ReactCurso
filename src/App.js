import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NOTFOUND404 from './components/404';
import Jira from './components/Jira/Jira';
import Page from './components/Page';
import Navbar from './components/Navbar';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const Router = () => {
  const [showMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return <BrowserRouter>
    <div>
      {showMenu ? <Navbar hide={toggleMenu}/> : <button onClick={toggleMenu}>Show Menu</button>}
      <Switch>
        <Route exact path='/' component={Jira}/>
        <Route path='/Page1'
          render = {(routeProps) => <Page {...routeProps} name='Page1'></Page>}
        />
        <Route path='/Page2'
          render = {(routeProps) => <Page {...routeProps} name='Page2'></Page>}
        />
        <Route path='/Page3'
          render = {(routeProps) => <Page {...routeProps} name='Page3'></Page>}
        />
        <Route path='/Page4'
          render = {(routeProps) => <Page {...routeProps} name='Page4'></Page>}
        />
        <Route path='/' component={NOTFOUND404}/>
      </Switch>
    </div>
  </BrowserRouter>
}

export default Router;
