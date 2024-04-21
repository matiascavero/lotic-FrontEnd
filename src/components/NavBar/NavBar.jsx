import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const ChangeMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a href='header'><img src="./logo-nav.png" alt="Logo" className="navbar__logo" /></a>
            </div>

            <a onClick={()=> ChangeMenu()} className='icon__menu'>
                {
                    menuOpen ? (
                        <FontAwesomeIcon icon={faTimes} size='2x' style={{color: "#f17533",}}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} size='2x' style={{color: "#f17533",}}/>
                    )
                }
            </a>
            
            <div className="navbar__right">
                <ul className={menuOpen ? "navBar__links__open" : "navbar__links"}>
                    <li><a href='#productos' className='nav__link'>Productos</a></li>
                    <li><a href='#faq' className='nav__link'>Preguntas frecuentes</a></li>
                    <li><a href='#conocenos' className='nav__link'>Sobre nosotros</a></li>
                    <li><a href='#contactanos' className='nav__link'>Contáctanos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
