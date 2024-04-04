import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img src="../../../public/logo.jpeg" alt="Logo" className="navbar__logo" />
                <span className="navbar__brand">TECNOLOGÍA AUDITIVA</span>
            </div>

            <a className="icon__menu">
                {
                    menuOpen ? (
                        <FontAwesomeIcon icon={faTimes} size='2x' style={{color: "#f17533",}} /> 
                    ) : (
                        <FontAwesomeIcon icon={faBars} size='2x' style={{color: "#f17533",}} />
                    )
                }
            </a>
            
            <div className="navbar__right">
                <ul className="navbar__links">
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contáctanos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
