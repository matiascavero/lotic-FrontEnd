import React from 'react'
import "./contactanos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contactanos = () => {
	return (
		<>
			<h2 className='contactanos__title'>Contáctanos</h2>
			<div className='container__contactanos'>
				<div className="contactanos__item">
					<ul>
						<li><a href=""><FontAwesomeIcon icon={faPhoneVolume} size='lg' style={{ color: "#f17533", }} />					+54 9 (223)355-5673</a></li>
						<li><a href=""><FontAwesomeIcon icon={faFacebookF} size='lg' style={{ color: "#f17533", }} />					/iotictecnologiaauditiva</a></li>
						<li><a href=""><FontAwesomeIcon icon={faSquareInstagram} size='lg' style={{ color: "#f17533", }} />					@ioticaudiologia</a></li>
						<li><a href=""><FontAwesomeIcon icon={faSquareWhatsapp} size='lg' style={{ color: "#f17533", }} />				+54 9 (223)355-5673</a></li>
						<li><a href=""><FontAwesomeIcon icon={faEnvelope} size='lg' style={{ color: "#f17533", }} />				ioticaudicion@gmail.com</a></li>
					</ul>
				</div>
				<div className='contactanos__ubicacion'>
					<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.038834489682!2d-57.563293924100684!3d-37.999554644679144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584deae9a3298b7%3A0x1f3781c13fed6a58!2sAlmte.%20Brown%203566%2C%20B7600FVF%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1712771207089!5m2!1ses-419!2sar" width="" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'></iframe>
					<a href=""><FontAwesomeIcon icon={faLocationDot} size='lg' style={{ color: "#f17533", }} /> Almte. Brown 3566, Mar del Plata, Provincia de Buenos Aires</a>
				</div>
			</div>
			<img className='bg4img' src="../../../public/bg4.png" alt="separador" />
		</>
	)
}

export default Contactanos
