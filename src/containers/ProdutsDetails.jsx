import React from 'react';
import ShopingCart from '../components/ShopingCart';

const ProdutsDetails = () => {
    return (
        <aside className="product-detail">
        <div className="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">My order</p>
        </div>
    
        <div className="my-order-content">
            <ShopingCart />
            <ShopingCart />
            <ShopingCart />
    
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>
    
          <button className="primary-button">
            Checkout
          </button>
        </div>
      </aside>
    );
}

export default ProdutsDetails;