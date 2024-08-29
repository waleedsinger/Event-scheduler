import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-red-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          BesoShop <span role="img" aria-label="shopping"></span>
        </div>
        <nav>
          <Link to="/" className="text-white mx-4">Home</Link>
          <div className="relative">
            <Link to="/cart" className="text-white">
              <span className="material-icons">shopping_cart</span>
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
