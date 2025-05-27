import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Layout from './components/Layout';

// Componente para rutas protegidas
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<div className="p-6"><h1>Servicios - En construcción</h1></div>} />
          <Route path="orders" element={<div className="p-6"><h1>Pedidos - En construcción</h1></div>} />
          <Route path="appointments" element={<div className="p-6"><h1>Citas - En construcción</h1></div>} />
          <Route path="profile" element={<div className="p-6"><h1>Perfil - En construcción</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;