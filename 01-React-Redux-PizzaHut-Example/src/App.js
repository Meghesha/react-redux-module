// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import PizzaHut from './components/PizzaHut';


let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Redux - Pizz Hut Example</a>
      </nav>

      <PizzaHut/>

    </React.Fragment>
  );
}

export default App;
