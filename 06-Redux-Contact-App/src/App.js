// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import ContactApp from './components/ContactApp';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Contact App with Redux </a>
      </nav>

      <ContactApp/>

    </React.Fragment>
  );
}
export default App;
