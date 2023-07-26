// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import Registration from './components/user/Registrarion';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Redux - Forms Binding</a>
      </nav>

      <Registration/>

     

    </React.Fragment>
  );
}
export default App;
