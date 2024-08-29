import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const MainLayout = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navbar />
      <Outlet context={{ cart, setCart }} />
    </>
  );
};

export default MainLayout;
