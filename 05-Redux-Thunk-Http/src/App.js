// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import UserList from './components/UserList';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Redux with Http </a>
      </nav>

      <UserList/>

    </React.Fragment>
  );
}
export default App;
