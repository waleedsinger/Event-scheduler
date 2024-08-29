import { useOutletContext } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const cartItems = Object.keys(cart).map(id => ({
    ...cart[id],
    total: cart[id].price * cart[id].quantity,
  }));

  const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
          ))}
        </tbody>
      </table>
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
