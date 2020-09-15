import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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
    <div className="App">
      <button onClick={() => dofetch()}>Fetch</button>
      <div>
        Current user name (click button to load): {currentUser}
      </div>
    </div>
  );
}

export default App;
