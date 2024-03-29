import React, { useContext } from 'react';
import ShopingCart from '../components/ShopingCart';
import AppContext from '../context/AppContext';
import '@styles/ProductsDetails.scss';

import flechita from '@icons/flechita.svg';

const ProdutsDetails = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
    return (
        <aside className="product-detail">
        <div className="title-container">
          <img src={flechita} alt="arrow" />
          <p className="title">My order</p>
        </div>
    
        <div className="my-order-content">
          {state.cart.map(product => (
            <ShopingCart product={product} key={`orderItem-${product.id}`} />
          ))}
    
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
    
          <button className="primary-button">
            Checkout
          </button>
        </div>
      </aside>
    );
}

export default ProdutsDetails;