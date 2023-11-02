import React from 'react';
import ProductList from './ProductList';
import classes from './ProductItems.module.css';
import { Link } from 'react-router-dom';

import img from '../../assets/img/rocknwool.jpg';
import img1 from '../../assets/img/pooja.jpg';
import img2 from '../../assets/img/imani.jpg';
import img3 from '../../assets/img/philipp.jpg';
import img4 from '../../assets/img/ilya.jpg';
import img5 from '../../assets/img/ulises.jpg';
import img6 from '../../assets/img/josh.jpg';
import img7 from '../../assets/img/dollar.jpg';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    img: <img src={img} alt='img' />,
    title: 'hayley - maxwell',
    currPrice: 56.54,
    price: 86.54,
    category: 'Female Wear',
  },

  {
    id: 'p2',
    img: <img src={img1} alt='img' />,
    title: 'laura-chouette',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
  },

  {
    id: 'p3',
    img: <img src={img2} alt='img' />,
    title: 'tabitha-turner',
    currPrice: 48.71,
    price: 58.58,
    category: 'Sneakers',
  },

  {
    id: 'p4',
    img: <img src={img3} alt='img' />,
    title: 'malik-skydsgaard',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
  },

  {
    id: 'p5',
    img: <img src={img4} alt='img' />,
    title: 'damian-barczak',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
  },

  {
    id: 'p6',
    img: <img src={img5} alt='img' />,
    title: 'yasmin-dangor',
    currPrice: 48.71,
    price: 58.58,
    category: 'Head Warmer',
  },

  {
    id: 'p7',
    img: <img src={img6} alt='img' />,
    title: 'alesia-kazantceva',
    currPrice: 48.71,
    price: 58.58,
    category: 'Sneakers',
  },

  {
    id: 'p8',
    img: <img src={img7} alt='img' />,
    title: 'hamed-darzi',
    currPrice: 48.71,
    price: 58.58,
    category: 'Male Wear',
  },
];

const ProductItems = () => {
  return (
    <React.Fragment>
      <div className={classes.product}>
        <h3>NEW PRODUCTS</h3>
        <Link to='/products'>VIEW ALL</Link>
      </div>
      <ul className={classes.productList}>
        {DUMMY_ITEMS.map((items) => (
          <ProductList
            key={items.id}
            id={items.id}
            img={items.img}
            title={items.title}
            currPrice={items.currPrice}
            price={items.price}
            category={items.category}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProductItems;
