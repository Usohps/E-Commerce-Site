import React from "react";
import { MdElectricCar } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { BiShield } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
const Summary = () => {
  return (
    <React.Fragment>
      <h5 className="md:text-2xl text-lg p-6 text-center font-extrabold ">
        - WHAT WE OFFER -
      </h5>
      <section className="w-full md:container md:m-auto border-[#aea266] border-t-2 flex-col md:flex-row flex items-center justify-around gap-4 p-4  md:p-24">
        <div className="  flex flex-col md:w-1/2 w-full  space-y-6">
          <div className="w-full flex items-center space-x-3 lg:p-7 p-6 shadow-sm shadow-[#aea266]">
            <span className="">
              <MdElectricCar size={32} className=" text-[#aea266]" />
            </span>
            <div>
              <h3 className="font-bold">Quick Delivery</h3>
              <p>We Deliver Everywhere In Nigeria. </p>
            </div>
          </div>
          <div className=" flex items-center space-x-3 w-full p-6 md:p-7 shadow-sm shadow-[#aea266]">
            <span className="">
              <BsChatLeftText size={32} className=" text-[#aea266]" />
            </span>
            <div>
              <h3 className="font-bold">Customer Support</h3>
              <p>Available 10am-4pm </p>
            </div>
          </div>
          
        </div>
        <div className=" flex flex-col md:w-1/2 w-full  space-y-6">
        <div className=" flex items-center space-x-3 w-full p-6 md:p-7 shadow-sm shadow-[#aea266]">
            <span className="">
              <BiShield size={32} className=" text-[#aea266]" />
            </span>
            <div>
              <h3 className="font-bold">Secure Payment</h3>
              <p>100% Secure Payment</p>
            </div>
          </div>
          <div className=" flex items-center space-x-3 w-full lg:p-7 p-6 shadow-sm shadow-[#aea266]">
            <span className="">
              <FaStoreAlt size={32} className=" text-[#aea266]" />
            </span>
            <div>
              <h3 className="font-bold">Easy Pick Up</h3>
              <p>We Offer Pickups In Lagos</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Summary;
