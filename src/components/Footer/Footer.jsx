import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container__contact'>
                <div className="footer__item">
                    <ul>
                        <li><a href=""><img src="./icons/logo-tlf.png" alt="phone" className='logo'/ > +54 9 12345678</a></li>
                        <li><a href=""><img src="./icons/logo-fb.png" alt="facebook" className='logo'/ > /iotictecnologiaauditiva</a></li>
                        <li><a href=""><img src="./icons/logo-ig.png" alt="instagram" className='logo'/ > @ioticaudiologia</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul>
                        <li><a href=""><img src="./icons/logo-wpp.png" alt="whatsapp" className='logo'/ > +54 9 (223)355-5673 </a></li>
                        <li><a href=""><img src="./icons/logo-mail.png" alt="email" className='logo'/ > iotictaudicion@gmail.com</a></li>
                    </ul>
                </div>
                <div className="footer__item"></div>
                <div className="footer__item">
                    <ul>
                        <li><a href=""><img src="./icons/logo-ubicacion.png" alt="map" className='logo'/ > Almte. Brown 3566, Mar del Plata, Provincia de Buenos Aires</a></li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright Company Name © 2023. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;