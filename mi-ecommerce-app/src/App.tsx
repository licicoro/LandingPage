// ...existing code...
import React from 'react';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Añade más rutas aquí */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
// ...existing code...