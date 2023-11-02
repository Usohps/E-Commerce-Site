import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductList.module.css';

const ProductList = (props) => {
  const price = props.price.toFixed(2);
  const currPrice = props.currPrice.toFixed(2);

  return (
    <li className={classes.productList}>
      <Link to={`/products/${props.title}`}>
        <div className={classes.reletive}>{props.img}</div>
        <p className={classes.category}>- {props.category} -</p>
        <p className={classes.title}>{props.title}</p>
        <h4>${currPrice}</h4>
        <h4 className={classes.price}>${price}</h4>
      </Link>
    </li>
  );
};

export default ProductList;
