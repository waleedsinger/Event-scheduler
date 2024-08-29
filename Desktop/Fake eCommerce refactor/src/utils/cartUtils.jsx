export const addToCart = (cart, product) => {
  const updatedCart = { ...cart };
  if (updatedCart[product.id]) {
    updatedCart[product.id].quantity += 1;
  } else {
    updatedCart[product.id] = { ...product, quantity: 1 };
  }
  return updatedCart;
};

export const removeFromCart = (cart, product) => {
  const updatedCart = { ...cart };
  if (updatedCart[product.id]) {
    if (updatedCart[product.id].quantity > 1) {
      updatedCart[product.id].quantity -= 1;
    } else {
      delete updatedCart[product.id];
    }
  }
  return updatedCart;
};
