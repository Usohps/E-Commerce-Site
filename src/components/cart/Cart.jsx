import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Checkout from './Checkout';

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const showCheckoutHandler = () => {
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  const submitOrderHandler = () => {
    setOrderSubmitted(true);
    cartCtx.clearCart();
  };

  const hasNoItem = (
    <div className={classes.para}>
      <p>No item added yet</p>
      <button className={classes.button}>
        <Link to='/products'>SHOP NOW</Link>
      </button>
    </div>
  );

  const buttonAction = (
    <div className={classes.actions}>
      {hasItem && (
        <button className={classes.button} onClick={showCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <React.Fragment>
      <div className={classes.cart}>
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              img={item.img}
              category={item.category}
              title={item.title}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
        <div className={classes.action}>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>
          {!showCheckout && buttonAction}
          {showCheckout && (
            <Checkout
              hideCheckout={hideCheckoutHandler}
              onConfirm={submitOrderHandler}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );

  const hasItemCart = (
    <React.Fragment>
      {hasItem && cartItems}
      {!hasItem && hasNoItem}
    </React.Fragment>
  );

  const orderSuccess = (
    <div className={classes.para}>
      <p>Order Sent Successfully!</p>
      <button className={classes.button}>
        <Link to='/home'>HOME</Link>
      </button>
    </div>
  );

  return (
    <React.Fragment>
      <h3 className={classes.heading}>- CART -</h3>
      {!orderSubmitted && hasItemCart}
      {orderSubmitted && orderSuccess}
    </React.Fragment>
  );
};

export default Cart;
