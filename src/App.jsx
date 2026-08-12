import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AboutUs from './components/AboutUs';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">
        <Routes>
          <Route
            path="/"
            element={
              <div className="landing">
                <AboutUs />
                <Link to="/plants">
                  <button className="btn-get-started">🌱 Get Started</button>
                </Link>
              </div>
            }
          />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;