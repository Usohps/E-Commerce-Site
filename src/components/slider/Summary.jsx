import React from 'react';
import {MdElectricCar} from "react-icons/md"
import {FaStoreAlt} from "react-icons/fa"
import {BiShield} from "react-icons/bi"
import {BsChatLeftText} from "react-icons/bs"
const Summary = () => {
  return (
    <React.Fragment>
      <h5 className="md:text-2xl text-lg p-6 text-center font-extrabold ">- WHAT WE OFFER -</h5>
      <section className=" flex-col md:flex-row container space-x-4 space-y-4  flex flex-wrap m-auto items-center justify-between p-24">
        <div className=" flex items-center space-x-3 container m-auto md:m-0 md:w-1/3 p-6 shadow-lg">
          <span className=''><MdElectricCar size={32} className=' text-[#aea266]'/></span>
          <div>
            <h3 className='font-bold'>Quick Delivery</h3>
            <p>We Deliver Everywhere In Nigeria. </p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/3 p-6 shadow-lg">
          <span className=''><FaStoreAlt size={32} className=' text-[#aea266]'/></span>
          <div>
            <h3 className='font-bold'>Easy Pick Up</h3>
            <p>We Offer Pickups In Lagos</p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/3 p-6 shadow-lg">
          <span className=''><BiShield size={32} className=' text-[#aea266]'/></span>
          <div>
            <h3 className='font-bold'>Secure Payment</h3>
            <p>100% Secure Payment</p>
          </div>
        </div>
        <div className=" flex items-center space-x-3 w-full md:w-1/3 p-6 shadow-lg">
          <span className=''><BsChatLeftText size={32} className=' text-[#aea266]'/></span>
          <div>
            <h3 className='font-bold'>Customer Support</h3>
            <p>Available 10am-4pm </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Summary;
