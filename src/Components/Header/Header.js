import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Products Management System</a> */}
    {/* <Link to='/home'>Products Management System</Link> */}
    <h4>Products Management System</h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-3">
        <Link to='/'>Home</Link>
        </li>
        <li class="nav-item me-3">
        <Link to='/products'>Products</Link>
        </li>
        <li class="nav-item">
        <Link to='/products/add'>AddProducts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/products/add'>AddProducts</Link>
            </nav> */}
            
        </div>
    );
};

export default Header;