import React, { useRef } from 'react';
import classes from './Form.module.css';
import Input from '../../../UI/Input';

const ItemForm = (props) => {
  const enteredAmountRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = enteredAmountRef.current.value;
    //convert enteredAmmount(string) to number
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={enteredAmountRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.button}>ADD TO CART</button>
    </form>
  );
};

export default ItemForm;
