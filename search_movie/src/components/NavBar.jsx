import React from 'react';
import logo from '../img/logo.svg';
import { Link, useHistory, } from "react-router-dom";

const NavBar = () => {
    const history=useHistory()
    return (
        <div className='navBar'>
            <div className="logoWrapper">
                <img src={logo} alt='logo' onClick={()=>history.push('/')} />
            </div>
            <div className="navLinksWrapper">
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/author'>Author</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
