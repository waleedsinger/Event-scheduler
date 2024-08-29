import { addToCart, removeFromCart } from '../utils/cartUtils';
import PropTypes from 'prop-types';

const CartItem = ({ item, cart, setCart }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${item.total}</td>
      <td>
        <button onClick={() => setCart(removeFromCart(cart, item))}>-</button>
        <button onClick={() => setCart(addToCart(cart, item))}>+</button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartItem;
