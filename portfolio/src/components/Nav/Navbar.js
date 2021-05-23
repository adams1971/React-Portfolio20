import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.scss'

function Navbar() {
    return (
        <div className='Navbar'>
            <nav className='nav'>
                Adam Stevenson
                
                <ul className='nav-content'>
                    <li className='nav-content'>
                        <NavLink exact to='/' activeClassName="active">Home</NavLink>
                    </li>
                    <li className='nav-content'>
                        <NavLink exact to='/about' activeClassName="active">About Me</NavLink>
                    </li>
                    <li className='nav-content'>
                        <NavLink exact to='/portfolio' activeClassName="active">Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default Navbar;