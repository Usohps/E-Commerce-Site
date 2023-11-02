import React, { useContext } from 'react';
import CartContext from '../../../../store/cart-context';
import ItemForm from './Form';
import classes from './ProductDetailsList.module.css';

const ProductDetailsList = (props) => {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2);
  const currPrice = props.currPrice.toFixed(2);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      img: props.img,
      category: props.category,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.productDetails}>
      <div className={classes.img}>{props.img}</div>
      <div className={classes.wrapper}>
        <p className={classes.category}>- {props.category} -</p>
        <h2 className={classes.title}>{props.title}</h2>
        <h4>${currPrice}</h4>
        <h4 className={classes.price}>${price}</h4>
        <p className={classes.description}>Description</p>
        <p className={classes.justify}>{props.description}</p>
        <ItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductDetailsList;
