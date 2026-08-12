import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    updateQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const difference = newQuantity - existingItem.quantity;
        existingItem.quantity = newQuantity;
        existingItem.totalPrice = existingItem.price * newQuantity;
        state.totalQuantity += difference;
        state.totalAmount += difference * existingItem.price;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;