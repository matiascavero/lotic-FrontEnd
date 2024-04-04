import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer>
            <div className='container__contact'>
                <div class="footer__item">
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faPhoneVolume} size='lg' style={{color: "#f17533",}} /> +54 9 12345678</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faFacebookF} size='lg' style={{color: "#f17533",}} /> /iotictecnologiaauditiva</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faSquareInstagram} size='lg' style={{color: "#f17533",}} /> @iotic</a></li>
                    </ul>
                </div>
                <div class="footer__item">
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faSquareWhatsapp} size='lg' style={{color: "#f17533",}} /> +54 9 12345678</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faEnvelope} size='lg' style={{color: "#f17533",}} /> ioticta@gmail.com</a></li>
                    </ul>
                </div>
                <div class="footer__item"></div>
                <div class="footer__item">
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faLocationDot} size='lg' style={{color: "#f17533",}} /> Direccion 123, Barrio 4, Ciudad, Argentina</a></li>
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