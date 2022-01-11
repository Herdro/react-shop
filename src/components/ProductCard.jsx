import React, { useContext } from 'react';
import '../styles/Cards.scss';
import AppContext from '../context/AppContext';

import addCart from '@icons/bt_add_to_cart.svg';

const ProductCard = ({product}) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };

    return (
        <div className="product-card">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={addCart} alt="" />
          </figure>
        </div>
      </div>
    );
}

export default ProductCard;