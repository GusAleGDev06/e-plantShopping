import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  const isHome = location.pathname === '/';
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          🌿 Paradise Nursery
        </Link>
      </div>
      
      <nav>
        {!isHome && <Link to="/">Home</Link>}
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;