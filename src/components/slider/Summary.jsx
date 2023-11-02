import React from 'react';
import {MdElectricCar} from "react-icons/md"
import {FaStoreAlt} from "react-icons/fa"
import {BiShield} from "react-icons/bi"
import {BsChatLeftText} from "react-icons/bs"
import classes from './Summary.module.css';
// import './Summary.css';

const Summary = () => {
  return (
    <React.Fragment>
      <h5 className="md:text-2xl text-lg p-6 text-center ">- WHAT WE OFFER -</h5>
      <section className=" flex-col md:flex-row container space-x-4 space-y-4  flex md:flex-wrap border m-auto items-center justify-between p-12">
        <div className=" flex items-center space-x-3 container m-auto md:m-0 md:w-1/4 border">
          <span className=''><MdElectricCar size={24} className=' text-[#aea266]'/></span>
          <div>
            <h3>Quick Delivery</h3>
            <p>We Deliver Everywhere In Nigeria. </p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/4">
          <span className=''><FaStoreAlt size={24} className=' text-[#aea266]'/></span>
          <div>
            <h3>Easy Pick Up</h3>
            <p>We Offer Pickups In Lagos</p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/4">
          <span className=''><BiShield size={24} className=' text-[#aea266]'/></span>
          <div>
            <h3>Secure Payment</h3>
            <p>100% Secure Payment</p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/4">
          <span className=''><BsChatLeftText size={24} className=' text-[#aea266]'/></span>
          <div>
            <h3>Customer Support</h3>
            <p>Available 10am-4pm </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Summary;
