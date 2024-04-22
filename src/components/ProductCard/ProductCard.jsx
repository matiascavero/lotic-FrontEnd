import React from 'react';
import './productcard.css';
import productosData from '../../../public/data/products.json'

const ProductCard = ({product}) => {
    return (
        <div className="product__card">
            <img src={product.img} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;