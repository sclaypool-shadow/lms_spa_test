import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes />
    </div>
  );
}


function Routes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">user loader</Link>
          </li>
        </ul>

        <hr />

        {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <UserLoader />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function UserLoader() {
  let [currentUser, setCurrentUser] = useState('');
  let dofetch = async () => {
    let response = await fetch('https://localhost:3000/spa', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    });

    let json = await response.json();
    setCurrentUser(json['current_username'])
  }


  return (
    <div>
      <button onClick={() => dofetch()}>Fetch</button>
      <div>
        Current user name (click button to load): {currentUser}
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      This is an example of an SPA hosted in a dockerfile with react router.
      Used to demonstrate hosting an SPA connected to LMS.
    </div>
  )
}

export default App;
