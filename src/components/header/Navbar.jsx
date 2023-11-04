import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActions } from '../../store';
import {AiOutlineShoppingCart,AiOutlineHome} from "react-icons/ai"
import {MdContactSupport} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"
// import {AiOutlineHome} from "react-icons/ai"
import {BiSolidStore,BiInfoCircle,BiSolidUserCircle} from "react-icons/bi"
import classes from './Navbar.module.css';

const Navbar = () => {
  const [btnHighLighted, setBtnHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.toggle.showToggle);

  const toggleStateHandler = () => {
    dispatch(toggleActions.toggleState());
  };

  const btnClasses = `${classes.relative} ${
    btnHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighLighted(true);

    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <button onClick={toggleStateHandler}>
            <span className='material-symbols-outlined'><GiHamburgerMenu size={24}/></span>
          </button>
          <h3>
            <Link to='/home'>FASHION</Link>
          </h3>
        </div>
        <form className={classes.form}>
          <input type='text' placeholder='Search for products' />
          <button><FiSearch size={24}/></button>
        </form>
        <ul>
          <li>
            <Link to='/home'>
              <span className='material-symbols-outlined'><BiSolidUserCircle size={24}/></span>
            </Link>
          </li>
          <li>
            <Link to='/cart' className={btnClasses}>
              <span className='material-symbols-outlined'><AiOutlineShoppingCart size={24}/></span>
              <span className={classes.absolute}>{numberOfCartItems}</span>
            </Link>
          </li>
        </ul>
      </nav>
      {showSidebar && (
        <aside className={classes.aside} onClick={toggleStateHandler}>
          <ul>
            <li className='flex border'>
              <Link to='/home'>
                <span><AiOutlineHome size={24}/></span>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to='/products'>
                <span><BiSolidStore size={24}/></span>
                <span>SHOP</span>
              </Link>
            </li>
            <li>
              <Link to='/home'>
                <span><BiInfoCircle size={24}/></span>
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to='/home'>
                <span><MdContactSupport size={24}/></span>
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </React.Fragment>
  );
};

export default Navbar;
