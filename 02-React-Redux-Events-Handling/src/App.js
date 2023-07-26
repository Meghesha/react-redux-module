// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
// import WishMessage from './components/WishMessage';
import ProductItem from './components/ProductItem';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Redux - Events Handling</a>
      </nav>

      {/* <WishMessage/> */}
      <ProductItem/>

    </React.Fragment>
  );
}
export default App;
