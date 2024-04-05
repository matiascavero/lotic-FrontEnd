import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <div className="div-container-faq">
      <div className="div-faq-title">
        <h1>Preguntas frecuentes que nos encontramos</h1>
      </div>
      <div className="div-faqs">
        <div className="div-question">
          <h3>¿Qué tipos de prótesis auditivas hay disponibles?</h3>
          <p>
            Existen diferentes tipos de prótesis auditivas, cada una con sus
            propias características y beneficios. Los tipos más comunes son:
          </p>
          <ul>
            <li>
              Audífonos retroauriculares (BTE): Estos audífonos se colocan
              detrás de la oreja y están conectados a un molde que se ajusta
              dentro del canal auditivo. Son los más comunes y ofrecen una
              amplia gama de opciones para diferentes niveles de pérdida
              auditiva.
            </li>
            <li>
              Audífonos intraauriculares (RIC): Estos audífonos son más pequeños
              y discretos que los BTE y se ajustan dentro del canal auditivo.
              Son una buena opción para personas con pérdida auditiva leve a
              moderada.
            </li>
            <li>
              Audífonos intracanales (CIC): Estos audífonos son los más pequeños
              y discretos disponibles y se ajustan completamente dentro del
              canal auditivo. Son una buena opción para personas con pérdida
              auditiva leve a moderada.
            </li>
            <li>
              Audífonos de implante coclear: Estos audífonos son una opción para
              personas con pérdida auditiva profunda que no se benefician de los
              audífonos tradicionales. El implante coclear es un dispositivo
              quirúrgico que se coloca en el oído interno y estimula
              directamente el nervio auditivo.
            </li>
          </ul>
        </div>
        <hr className="class-hr" />
        <div className="div-question">
          <h3>
            ¿Cómo puedo saber qué tipo de prótesis auditiva es la adecuada para
            mí?
          </h3>
          <p>
            El tipo de prótesis auditiva que sea adecuado para usted dependerá
            de varios factores, incluyendo:
          </p>
          <ul>
            <li>
              El nivel de su pérdida auditiva: Los diferentes tipos de prótesis
              auditivas están diseñados para diferentes niveles de pérdida
              auditiva.
            </li>
            <li>
              Su estilo de vida: Algunos tipos de prótesis auditivas son más
              adecuados para personas activas que otros.
            </li>
            <li>
              Sus preferencias personales: Algunas personas prefieren audífonos
              que sean pequeños y discretos, mientras que otras prefieren
              audífonos que sean más fáciles de usar.
            </li>
          </ul>
          <p>
            Es importante consultar con un especialista en audición para que le
            ayud e a determinar qué tipo de prótesis auditiva es la adecuada
            para usted.
          </p>
        </div>
        <hr className="class-hr" />
        <div className="div-question">
          <h3>¿Cómo puedo cuidar mis prótesis auditivas?</h3>
          <p>
            Es importante cuidar sus prótesis auditivas para que duren muchos
            años. Aquí hay algunos consejos para cuidar sus audífonos:
          </p>
          <ul>
            <li>Mantenga sus audífonos limpios y secos.</li>
            <li>
              Guarde sus audífonos en un estuche cuando no los esté usando.
            </li>
            <li>Cambie las baterías de sus audífonos regularmente.</li>
            <li>
              Lleve sus audífonos a su especialista en audición para que los
              revise y limpie con regularidad.
            </li>
          </ul>
        </div>
        <hr className="class-hr" />
        <div className="div-question">
          <h3>¿Qué debo tener en cuenta al comprar prótesis auditivas?</h3>
          <p>
            Al comprar prótesis auditivas, es importante tener en cuenta lo
            siguiente:
          </p>
          <ul>
            <li>
              Su nivel de pérdida auditiva: Asegúrese de elegir audífonos que
              estén diseñados para su nivel de pérdida auditiva.
            </li>
            <li>
              Su estilo de vida: Elija audífonos que sean compatibles con su
              estilo de vida y actividades.
            </li>
            <li>
              Su presupuesto: Establezca un presupuesto antes de comenzar a
              comprar audífonos.
            </li>
            <li>
              La garantía: Asegúrese de que los audífonos que elija tengan una
              buena garantía.
            </li>
          </ul>
        </div>
        <hr className="class-hr" />
      </div>
    </div>
  );
};

export default Faq;
