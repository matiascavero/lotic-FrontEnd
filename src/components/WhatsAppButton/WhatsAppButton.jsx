import React from 'react';
import './whatsappbutton.css'

const WhatsAppButton = () => {
    return (
        <div className='whatsapp__button'>
            <a href="https://wa.me/+54 9 (223)355-5673" target="_blank" rel="noopener noreferrer">
                <img src="./icons/wpp-boton-flotante.png" alt="whatsapp" className='watsapp__icon'/>
            </a>
        </div>
    );
};

export default WhatsAppButton;