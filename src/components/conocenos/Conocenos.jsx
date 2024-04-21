import React from 'react'
import "./conocenos.css"

const Conocenos = () => {
  return (
    <div id='conocenos'> 
      <h2 className='conocenos__title'>Conocenos</h2>
      <div className='container__conocenos'>
        <div className='container1'>
          <div className='parrafo1'>
            <p>Con raíces en Mar del Plata y un profundo compromiso con la excelencia auditiva, iotic emerge en el año 2020 como una respuesta a las necesidades no cubiertas en el mercado de dispositivos auditivos. Sin embargo, su gestación se remonta mucho más atrás, en las experiencias y conocimientos acumulados a lo largo de años de práctica clínica, investigación rigurosa y, sobre todo, en las conversaciones profundas mantenidas con pacientes que acudían a nuestros consultorios en busca de soluciones.</p>
            <br />
            <br />
            <br />
            <p>El denominador común en estas conversaciones era una frustración compartida: la falta de un acompañamiento integral desde el inicio del proceso de adquisición de audífonos. Esta brecha entre las expectativas de los pacientes y la realidad del mercado fue el motor impulsor detrás de la creación de iotic. Nos dimos cuenta de que no bastaba con ofrecer dispositivos auditivos de calidad; era imperativo proporcionar un servicio personalizado y continuo que abarcara todas las etapas del viaje auditivo.</p>
          </div>
          <img className='img1' src="../../../public/img3.jpg" alt="img3" />
        </div>
        <div className='container2'>
          <div className='parrafo2'>
            <br />
            <br /> 
            <p>Es así como nace iotic, con la visión de ser mucho más que una empresa de tecnología auditiva. Nos esforzamos por establecer relaciones profundas y significativas con nuestros clientes, brindando no solo soluciones técnicas, sino también apoyo emocional y educación continua. En cada paso del camino, desde la evaluación inicial hasta el ajuste personalizado y el seguimiento a largo plazo, estamos comprometidos a estar a su lado, asegurándonos de que cada persona que confía en nosotros experimente una mejora tangible en su calidad de vida y bienestar auditivo. En Iotic, estamos aquí para transformar la manera en que se percibe y se aborda la salud auditiva, una persona a la vez.</p>
          </div>
        </div>
        <div className='container3'>
          <img className='img2' src="../../../public/footer.jpg" alt="img4" />
          <p className='parrafo3'>Nos encanta ser<br />parte de tu<br /> felicidad.</p>
        </div>
      </div>
      <img className='img5' src="../../../public/bg5.png" alt="img5" />
    </div>
  )
}

export default Conocenos