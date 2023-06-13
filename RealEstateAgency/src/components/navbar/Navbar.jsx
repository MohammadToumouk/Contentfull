import React, { useState } from 'react'
import Logo from "../../assets/emalogo.png";
import { Link } from 'react-router-dom';
import './navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <Link to='/'><img className='logo' src={Logo} alt='Logo' /></Link>
                <div className='hiddenLinks'>
                    <button className='navButton'>
                        <Link to='/properties'>Properties</Link>
                    </button>
                    <button className='navButton'>
                        <Link to='/agents'>Agents</Link>
                    </button>
                    <button className='navButton'>
                        <Link to='/contact'>Contact</Link>
                    </button>
                </div>

            </div>
            <div className='rightSide'>
                <button className='navButton'>
                    <Link to='/properties'>Properties</Link>
                </button>
                <button className='navButton'>
                    <Link to='/agents'>Agents</Link>
                </button>
                <button className='navButton'>
                    <Link to='/contact'>Contact</Link>
                </button>
                <button className='hamburger' onClick={toggleNavbar}>
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </div>
    )
}

export default Navbar;