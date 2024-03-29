import React, { useContext } from 'react';
import './checkout.scss';
import { CartContext } from '../../services/CartContext';
import CheckoutItem from '../../components/checkout-item/Checkout.item';

const Checkout = () => {
  const { cartItems, totalCartCount } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${totalCartCount}</span>
    </div>
  );
};

export default Checkout;
