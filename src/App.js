/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo  from './react512.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a> Aprendamos React </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Terminar la tesis</p>
      <span>X</span>
    </li>
  );
}

export default App;
