import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Landing from './pages/Landing';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">   {/* <--- Agrega esta línea */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;