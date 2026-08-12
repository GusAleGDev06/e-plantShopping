import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../store/CartSlice';
import { FaTrash } from 'react-icons/fa';

function CartItem({ item, cartTotal }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, newQuantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      // Si la cantidad es 1, al decrementar se elimina (newQuantity = 0)
      dispatch(updateQuantity({ id: item.id, newQuantity: 0 }));
    } else {
      dispatch(updateQuantity({ id: item.id, newQuantity: item.quantity - 1 }));
    }
  };

  const handleDelete = () => {
    // Eliminar el ítem por completo
    dispatch(updateQuantity({ id: item.id, newQuantity: 0 }));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="unit-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecrease}>−</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="item-total">${item.totalPrice.toFixed(2)}</div>
      <button className="delete-btn" onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;