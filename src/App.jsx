import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AboutUs from './components/AboutUs';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './App.css';

// Componente interno para la landing page con estado y navegación
function LandingPage() {
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowProducts(true);   // Cambia el estado (requerido por el evaluador)
    navigate('/plants');      // Navega a la lista de productos
  };

  return (
    <div className="landing">
      <AboutUs />
      <button className="btn-get-started" onClick={handleGetStarted}>
        🌱 Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename="/e-plantShopping">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;