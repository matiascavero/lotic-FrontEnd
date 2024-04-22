import React from 'react';
import './productos.css';
import ProductCard from '../ProductCard/ProductCard';
import product from '../../../public/data/products.json'

const Productos = ({product}) => {
    return (
        <div id='productos'>
            <div className='productos__title'>
                <h1>Conocé nuestros audífonos</h1>
            </div>
            <div className='container__productos'>
                <h3>Familia Maxi Blu</h3>
                <h3>Familia Stride</h3>
                <h3>Familia Insera</h3>
                <h3>Accesorios</h3>
            </div>
        </div>
    );
};

export default Productos;