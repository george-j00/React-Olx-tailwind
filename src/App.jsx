
import './App.css'
import Home from './components/Home'
import Banner from './components/Banner'
import Login from './components/Login'
import {Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/authContext'
import ProtectedRoute from './components/ProtectedRoute';
import Sell from './components/Sell';
import ProductDetail from './components/ProductView';

function App() {

  const { user } = useAuth();

  return (
    <>
   <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/login" element={<Navigate to="/" />} />
        )}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/sell" element={<Sell />} />
        <Route path="/product/:id" element={<ProductDetail />}  />
      </Routes>
    </>
  )
}

export default App
