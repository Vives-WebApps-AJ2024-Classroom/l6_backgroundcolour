import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var background_colour = process.env.REACT_APP_BACKGROUNDCOLOUR || "purple";
  return (
    <div className="App" style={{background:background_colour}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
}

export default App;
