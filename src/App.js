import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Change Made </h1>
      <p>this is a change i want to keep made by Dev1</p>
      <p>this is a change i dont want to keep made by Dev1</p>
    </div>
  );
}

export default App;
