import React from 'react';
import './productos.css';
import productosData from '../../../public/data/products.json'

const Productos = () => {
    const productosPorFamilia = productosData.reduce((agrupados, producto) => {
        const { family } = producto;
        if (!agrupados[family]) {
            agrupados[family] = [];
        }
        agrupados[family].push(producto);
        return agrupados;
    }, {});

    return (
        <div id='productos'>
            <div className='productos__title'>
                <h1>Conocé nuestros audífonos</h1>
            </div>
            <div className='container__productos'>
                {Object.entries(productosPorFamilia).map(([familia, productos]) => (
                    <div key={familia}>
                        <h3>{familia}</h3>

                        <div className='caja__productos'>
                            {productos.map((producto, index) => (
                                <div key={index} className="producto">
                                    <h4>{producto.title}</h4>
                                    <p>{Array.isArray(producto.description) ? producto.description.join(', ') : producto.description}</p>
                                    <img src={producto.photo} alt={producto.title} />
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;