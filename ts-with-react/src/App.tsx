import React from 'react';
import logo from './logo.svg';
import Hello from './components/hello'
import LikeButton from './components/likeButton'
import MouseTracker from './components/MouseTracker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message={"1232"}></Hello>
        <LikeButton></LikeButton>
        <MouseTracker></MouseTracker>
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
