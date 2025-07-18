import React from 'react';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <ClassCounter />
        <FunctionalCounter />
      </div>
    </div>
  );
}

export default App;
