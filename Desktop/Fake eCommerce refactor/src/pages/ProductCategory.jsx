import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useOutletContext } from 'react-router-dom';

const ProductCategory = () => {
  const { categoryName } = useParams();
  const { cart, setCart } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="bg-gray-900 text-white">
      <h2 className='flex-auto'>Products in &quot;{categoryName}&quot; category</h2>
      <div className="bg-gray-900 text-white">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
