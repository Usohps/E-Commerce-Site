import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Slider.module.css';
import img from '../../assets/img/autumn.jpg';
import img1 from '../../assets/img/brian.jpg';
import img2 from '../../assets/img/turner.jpg';
import Button from '../UI/Button';
import Summary from './Summary';

const Slider = () => {
  return (
    <React.Fragment>
      <div className={classes.slider}>
        <div className={classes.slide}>
          <img src={img} alt='img' />
          <div className={classes.overlay}>
            <div className={classes.text}>
              <h4>TOP BRANDS</h4>
              <h1>NEW COLLECTIONS</h1>
              <h4>Beautifully Designed Series</h4>
            </div>
            <Button>
              <Link to='/products' className='text-sm'>SHOP NOW</Link>
            </Button>
          </div>
        </div>
        <div className={classes.slides}>
          <div className={classes.side}>
            <img src={img1} alt='img' />
            <div className={classes.overlay}>
              <div className={classes.text}>
                <h5>ALECIA BRANDS</h5>
                <Button>
                  <Link to='/products' className='text-sm'>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.sides}>
            <img src={img2} alt='img' />
            <div className={classes.overlay}>
              <div className={classes.text}>
                <h5>BRAIN BRANDS</h5>
                <Button>
                  <Link to='/products' className='text-sm'>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Summary />
    </React.Fragment>
  );
};

export default Slider;
