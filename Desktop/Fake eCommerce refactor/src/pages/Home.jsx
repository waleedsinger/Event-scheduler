import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { cart, setCart } = useOutletContext();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Store the selected category

  useEffect(() => {
    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(setCategories);

    // Fetch all products
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center mb-6">
        {/* Map through categories to create buttons */}
        {categories.map(category => (
          <button 
            key={category} 
            className={`px-4 py-2 rounded mx-2 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-900 text-white'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
