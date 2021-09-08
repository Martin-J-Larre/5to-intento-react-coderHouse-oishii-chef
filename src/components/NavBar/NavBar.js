import React from 'react';
import logo from'./LOGO-2-.png';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

function NavBar() {
    return (
        <div className="header">
            <nav className="header-nav">
                <a className="nav-logo" href="#home" >
                    <img src={logo} alt={"logo"}/>
                </a>  
               <ul>
                    <li> <a href="#home">Home</a></li>
                    <li> <a href="#aboutus">About us</a></li>
                    <li> <a href="#products">Products</a></li>
                    <li> <a href="#category">Category</a></li>
                    < CartWidget />
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
