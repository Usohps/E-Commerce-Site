import React from 'react';
import classes from './FilteredProduct.module.css';

const FilteredProduct = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.productfilter}>
        <label>
          <span>sort by</span>
        </label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option>Default</option>
          <option value='Female Wear'>Female Wears</option>
          <option value='Male Wear'>Male Wears</option>
          <option value='Sneaker'>Sneakers</option>
          <option value='Head Warmer'>Head Warmers</option>
        </select>
      </div>
    </div>
  );
};

export default FilteredProduct;
