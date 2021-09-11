import React,{useState} from 'react';
import logo from'./LOGO-2-.png';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    //eslint-disable-next-line
    const [links, setLinks] = useState([
        {nombre:'About Us', url:'/about-us'},
        {nombre:'category', url:'/category'},
        {nombre:'Productos', url:'/'},
        {nombre:'Contact', url:'/'}
    ])
    return (
        <div className="header">
            <div className="header-navbar">
                <NavLink to='/' className="logo">
                    <img src={logo} alt={"logo"}/>
                </NavLink>
                <ul className="navbar">
                    {links.map((link, i) => {
                        return (<li key={i}><NavLink className="navbar-link" to={link.url}>{link.nombre} </NavLink></li>)
                    })}
                    <NavLink to='/cart'><CartWidget /></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
