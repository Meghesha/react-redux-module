// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
// import AuthCard from './components/auth/AuthCard';
// import HobbySelector from './components/hooby/HobbySelector';
// import HobbySelectorRadio from './components/hobby_radio/HobbySelectorRadio';
import Employees from './components/employee/Employees';


let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Redux - Conditional Looping</a>
      </nav>

      {/* <AuthCard/> */}
      {/* <HobbySelector/> */}
      {/* <HobbySelectorRadio/> */}
      <Employees/>

    </React.Fragment>
  );
}
export default App;
