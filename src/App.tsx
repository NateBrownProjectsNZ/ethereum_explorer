import React from 'react';
import logo from './logo.svg';
import Block from './Block';
import './App.css';

function App() {
  return (
    <div className="App">
      <Block hash="asdf" height={0}  transactions={6} duration={14} usage={1000} max={1001} difficulty={1000} reward={9000}></Block>
    </div>
  );
}

export default App;
