import React from 'react';
import { Link } from 'react-router-dom';
// import classes from './Slider.module.css';
import img from '../../assets/img/autumn.jpg';
import img1 from '../../assets/img/brian.jpg';
import img2 from '../../assets/img/turner.jpg';
import Button from '../UI/Button';
import Summary from './Summary';

const Slider = () => {
  return (
    <React.Fragment>
      <div className=" container m-auto h-[400px] mt-24 flex justify-center">
        <div className="border md:w-1/2 relative">
          <img src={img} className=' w-full h-full' alt='img' />
          <div className="absolute top-[50%] left-[10%]">
            <div className="">
              <h4>TOP BRANDS</h4>
              <h1>NEW COLLECTIONS</h1>
              <h4>Beautifully Designed Series</h4>
            </div>
            <Button>
              <Link to='/products' className='text-sm'>SHOP NOW</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-1/2">
          <div className="relative w-1/2">
            <div className='w-full'><img src={img1} className='w-full h-[400px]' alt='img' /></div>
            <div className="absolute top-[50%] left-[10%]">
              <div className="">
                <h5>ALECIA BRANDS</h5>
                <Button>
                  <Link to='/products' className='text-sm'>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative w-1/2">
            <div className='w-ful'>
              <img src={img2} className='w-full h-[400px]' alt='img' />
              </div>
            <div className="absolute top-[50%] left-[10%]">
              <div className="">
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
