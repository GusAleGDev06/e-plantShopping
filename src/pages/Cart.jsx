import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div>
        <Header />
        <div className="cart-page">
          <div className="empty-cart">
            <h2>Your Cart</h2>
            <p>🛒 Your cart is empty. Start shopping!</p>
            <br />
            <Link to="/plants" className="btn-continue">
              Browse Plants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
        <div className="cart-summary">
          <div className="total-items">
            Total Items: <strong>{totalQuantity}</strong>
          </div>
          <div className="total-cost">
            Total Cost: ${totalAmount.toFixed(2)}
          </div>
        </div>
        <div className="cart-items-list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} cartTotal={totalAmount} />
          ))}
        </div>
        <div className="cart-actions">
          <Link to="/plants">
            <button className="btn-continue">Continue Shopping</button>
          </Link>
          <button className="btn-checkout" onClick={() => alert('Coming Soon!')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;