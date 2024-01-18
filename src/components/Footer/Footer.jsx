/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useContext } from "react";
import { ContextProvider } from "../Context";

export default function Footer() {
  const { hideNavbar } = useContext(ContextProvider);
  return (
    <div
      className={` ${
        hideNavbar === true ? "hidden" : " md:block lg:block"
      } bg-primaryColor py-[5%] px-[8%] lg:py-[3%] lg:px-[7%]`}
    >
      <p
        className={`w-[45%] text-center text-[15px] border-[1px] border-[#000] p-1 font-extrabold md:text-[35px] lg:text-[30px] lg:w-[23%]`}
      >
        <a href="/">SmartInvestHub</a>
      </p>
      <div className="lg:flex lg:justify-between">
        {" "}
        <div className="my-[5%]">
          <p className="text-[19px] font-semibold lg:text-[25px] lg:font-bold">
            Investing
          </p>
          <ul className="lg:flex lg:flex-col gap-[15px] lg:mt-5">
            <li className="hover:underline">Socially Responsible</li>
            <li className="hover:underline">Whitepapers</li>
            <li className="hover:underline">College</li>
            <li className="hover:underline">Automated Investing</li>
            <li className="hover:underline">Stock Investing</li>
            <li className="hover:underline">Pricing</li>
          </ul>
        </div>
        <div className="my-[5%]">
          <p className="text-[19px] font-semibold lg:text-[25px] lg:font-bold">
            Why We&apos;re Different
          </p>
          <ul className="lg:flex lg:flex-col gap-[15px] lg:mt-5">
            <li className="hover:underline">Why Smart Invest Hub</li>
            <li className="hover:underline">Fees & commissions</li>
            <li className="hover:underline">Benefits</li>
            <li className="hover:underline">Account conveniences</li>
          </ul>
        </div>
        <div className="my-[5%]">
          <p className="text-[19px] font-semibold lg:text-[25px] lg:font-bold">
            About
          </p>
          <ul className=" lg:flex lg:flex-col gap-[15px] lg:mt-5">
            <li className="hover:underline">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:underline">Sitemap</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Legal</li>
            <li className="hover:underline">Newsroom</li>
          </ul>
        </div>
        <div className="text-2xl flex gap-[20px] lg:items-center ">
          <FaFacebook className="hover:text-white" />
          <FaTwitter className="hover:text-white" />
          <FaInstagramSquare className="hover:text-white" />
          <IoMail className="hover:text-white" />
        </div>
      </div>
    </div>
  );
}
