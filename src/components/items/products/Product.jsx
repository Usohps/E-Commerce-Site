import React, { useState } from 'react';
import ProductList from './ProductList';
import classes from '../../items/ProductItems.module.css';
import FilteredProduct from './FilteredProduct';

import img from '../../../assets/img/rocknwool.jpg';
import img1 from '../../../assets/img/pooja.jpg';
import img2 from '../../../assets/img/artems.jpg';
import img3 from '../../../assets/img/hassan.jpg';
import img4 from '../../../assets/img/ilya.jpg';
import img5 from '../../../assets/img/engin.jpg';
import img6 from '../../../assets/img/josh.jpg';
import img7 from '../../../assets/img/dollar.jpg';
import img8 from '../../../assets/img/hamed.jpg';
import img9 from '../../../assets/img/hameds.jpg';
import img10 from '../../../assets/img/ulises.jpg';
import img11 from '../../../assets/img/anomaly.jpg';

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
    id: 'p10',
    img: <img src={img9} alt='img' />,
    title: 'pooja-chaudhary',
    currPrice: 48.71,
    price: 58.58,
    category: 'Head Warmer',
  },

  {
    id: 'p11',
    img: <img src={img10} alt='img' />,
    title: 'yasmin-dangor',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
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
    category: 'Sneaker',
  },

  {
    id: 'p12',
    img: <img src={img11} alt='img' />,
    title: 'autumn-goodman',
    currPrice: 56.54,
    price: 86.54,
    category: 'Male Wear',
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
    id: 'p9',
    img: <img src={img8} alt='img' />,
    title: 'josh-marshall',
    currPrice: 48.71,
    price: 58.58,
    category: 'Head Warmer',
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
    title: 'artem-bondarchuk',
    currPrice: 48.71,
    price: 58.58,
    category: 'Female Wear',
  },

  {
    id: 'p7',
    img: <img src={img6} alt='img' />,
    title: 'alesia-kazantceva',
    currPrice: 48.71,
    price: 58.58,
    category: 'Sneaker',
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

const ProductsItems = () => {
  const [filteredCategory, setFilteredCategory] = useState('default');

  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredProducts = DUMMY_ITEMS.filter((product) => {
    return product.category === filteredCategory;
  });

  let productsContent = DUMMY_ITEMS.map((items) => (
    <ProductList
      key={items.id}
      id={items.id}
      img={items.img}
      title={items.title}
      currPrice={items.currPrice}
      price={items.price}
      category={items.category}
    />
  ));
  if (filteredProducts.length > 0) {
    productsContent = filteredProducts.map((items) => (
      <ProductList
        key={items.id}
        id={items.id}
        img={items.img}
        title={items.title}
        currPrice={items.currPrice}
        price={items.price}
        category={items.category}
      />
    ));
  }

  return (
    <React.Fragment>
      <div className="container m-auto mt-32">
        <h3 className='text-center text-2xl font-bold'>- SHOP -</h3>
        <p className='text-center italic'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occa cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco
        </p>
        <FilteredProduct
          selected={filteredCategory}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      <ul className={classes.productList}>{productsContent}</ul>
    </React.Fragment>
  );
};

export default ProductsItems;
