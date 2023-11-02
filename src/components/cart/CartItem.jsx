import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <li className={classes['cart-item']}>
      <div className={classes.summary}>
        <div className={classes.img}>{props.img}</div>
        <div className={classes.category}>
          <p>- {props.category} -</p>
          <h3>{props.title}</h3>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
