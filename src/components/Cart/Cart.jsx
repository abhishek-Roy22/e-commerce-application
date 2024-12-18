import { Minus, Plus, ShoppingCart, X } from 'lucide-react';
import './Cart.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/cartSlice';
import Button from '../Button/Button';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.items);

  function handleCheckout() {
    setIsOpen(false);
    navigate('/checkout');
  }

  return (
    <div className="cartContainer">
      <button className="cartbtn" onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart color="green" size={24} />
        <span className="cartQuantity">({totalQuantity})</span>
      </button>
      {isOpen && (
        <div className="cartModal">
          <div className="cartModalTop">
            <h3>Shopping Cart</h3>
            <button className="cartbtn" onClick={() => setIsOpen(false)}>
              <X color="green" size={24} />
            </button>
          </div>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="cartModalBottom">
                {items.map((item) => (
                  <div key={item.id} className="cartContent">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="cartProductDetails">
                      <h4>{item.title}</h4>
                      <p>${item.price.toFixed(2)}</p>

                      <div className="cartButtons">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      className="deletebtn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <X color="red" size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cartPrice">
                <div className="cartPriceTop">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Button width={'100%'} onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
