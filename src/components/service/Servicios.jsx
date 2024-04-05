import React from 'react';
import './servicios.css'

const Servicios = ()=>{
    return(
        <div className='div-servicios'>
            <div className='div-servicios-text'>
                  <h1>
                   Nuestro servicio es integral, te acompañamos en cada etapa.
                  </h1>
            </div>
            <div className='div-container-servicios'>
               <div className='div-servicio'>
                   <img src="../../../public/personitas.jpeg" alt="imagen personas comunicandose" />
                   <h4>Asesoramiento en la elección de la prótesis auditiva </h4>
                   <p>Hay tantas dificultades auditivas como personas,
                     te ayudamos a encontrar la que se ajusta perfecto a tus 
                     necesidades y a tu presupuesto.</p>
               </div>
               <div className='div-servicio '>
                   <img src="../../../public/prod.jpeg" alt="imagen audifonos" />
                   <h4 className='h4-servicio-separador'>Venta de equipos y accesorios</h4>
                   <p>Tenemos los modelos más nuevos que salen al mercado con una amplia gama
                     de accesorios para que tu experiencia auditiva sea única y rea</p>
               </div>
               <div className='div-servicio'>
                   <img src="../../../public/manos.jpeg" alt="imagen manos" />
                   <h4  className='h4-servicio-separador'>Adaptación de la prótesis</h4>
                   <p>No te vamos a dejar solo, te capacitamos en su cuidado y uso, 
                    dejamos abierto un canal 
                    de comunicación para estar cerca tuyo siempre que lo necesites.</p>
               </div>
            </div>
            <div className='div-servicios-text'>
                  <h2>
                     Conocé nuestros audífonos
                  </h2>
            </div>
        </div>
    )
}



export default Servicios;