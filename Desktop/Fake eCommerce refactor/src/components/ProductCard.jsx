import React from 'react';

const ProductCard = ({ product, cart, setCart }) => {
  const addToCart = () => {
    const newCart = [...cart];
    const item = newCart.find((item) => item.id === product.id);

    if (item) {
      item.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
  };

  return (
    <div className="max-w-xs bg-gray-800 text-white rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.title} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
        <p className="text-gray-400">Price: {product.price} €</p>
        <p className="text-sm text-gray-500 mt-2">More from {product.category}</p>
        <button
          onClick={addToCart}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
