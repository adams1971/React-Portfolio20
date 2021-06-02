import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.scss'
// import { Container } from "react-bootstrap";

function Navbar() {
    return (
        // <Container>
            <div className='Navbar'>
                <nav className='align'>
                    <div>
                        Adam Stevenson
                    </div>
                    <div>
                        <ul className="ulNav">
                            <li className='marginLi'>
                                <NavLink exact to='/' activeClassName="active" 
                                className='marginLi'>Home</NavLink>
                            </li>
                            <li className='marginLi'>
                                <NavLink exact to='/portfolio' activeClassName="active"
                                className='marginLi'>Portfolio</NavLink>
                            </li>
                            <li className='marginLi'>
                                <NavLink exact to='/about' activeClassName="active"
                                className='marginLi'>About Me</NavLink>
                            </li>
                        </ul>
                    </div> 
                </nav>
            </div>
        // </Container>
    );
  }

  
  export default Navbar;