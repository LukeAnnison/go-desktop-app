import React from 'react';
import logo from './logo.png';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Boydie!
        </p>

        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
