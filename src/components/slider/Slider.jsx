import React from 'react';
import { Link } from 'react-router-dom';
// import classes from './Slider.module.css';
import img from '../../assets/img/autumn.jpg';
import img1 from '../../assets/img/brian.jpg';
import img2 from '../../assets/img/turner.jpg';
// import Button from '../UI/Button';
import Summary from './Summary';

const Slider = () => {
  return (
    <React.Fragment>
      <div className=" container m-auto h-[400px] mt-24 flex justify-center">
        <div className="border md:w-1/2 relative">
          <img src={img} className=' w-full h-full opacity-[0.8]' alt='img' />
          <div className="absolute top-[60%] left-[5%]">
            <div className=" text-white font-bold text-xl">
              <h4>TOP BRANDS</h4>
              <h1>NEW COLLECTIONS</h1>
              <h4>Beautifully Designed Series</h4>
            </div>
            <button className='custom-button hover:custom-button'>
              <Link to='/products' className='text-sm font-bold'>SHOP NOW</Link>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-1/2">
          <div className="relative w-1/2">
            <div className='w-full'><img src={img1} className='w-full h-[400px] opacity-[0.8]' alt='img' /></div>
            <div className="absolute top-[60%] left-[10%]">
              <div className="">
                <h5 className='text-white font-bold text-xl'>ALECIA BRANDS</h5>
                <button className='custom-button hover:custom-button'>
                  <Link to='/products' className='text-sm font-bold'>SHOP NOW</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-1/2">
            <div className='w-ful'>
              <img src={img2} className='w-full h-[400px] opacity-[0.8]' alt='img' />
              </div>
            <div className="absolute top-[60%] right-[20%]">
              <div className="">
                <h5 className='text-white font-bold text-xl'>BRAIN BRANDS</h5>
                <button className='custom-button hover:custom-button'>
                  <Link to='/products' className='text-sm font-bold'>SHOP NOW</Link>
                </button>
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
