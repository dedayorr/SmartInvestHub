// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

export const NavBar = () => {
  const [dropDown, setdropDown] = useState(true);
  const toggleMenu = () => {
    setdropDown(!dropDown);
  };

  return (
    <>
      <div className="flex justify-between h-[70px] items-center mx-[9%] md:h-[90px] lg:mx-[7%]">
        <p className="text-[#F6B17A] text-[15px] border-[1px] border-[#F6B17A] p-1 font-extrabold md:text-[35px] lg:text-[30px]">
          SmartInvestHub
        </p>
        <ul className="text-[#828282] hidden lg:flex gap-[30px]">
          <li className="hover:text-[#f6b17a] cursor-pointer">
            Products & Services
          </li>
          <li className="hover:text-[#f6b17a] cursor-pointer">About</li>
          <li className="hover:text-[#f6b17a] cursor-pointer">Portfolio</li>
          <li className="hover:text-[#f6b17a] cursor-pointer">FAQ</li>
        </ul>
        <div className="text-[#828282] hidden lg:flex gap-[15px]">
          <button className="hover:bg-[#F6B17A] hover:text-[#fff] w-[100px] border-[1px] border-[#F6B17A] p-2 rounded-[30px] text-[15px]">
            Sign In
          </button>
          <button className="hover:bg-[#fff] hover:text-[#000] w-[100px] rounded-[30px] text-[15px] bg-[#171717]">
            Get Started
          </button>
        </div>
        <div
          className="text-primaryColor text-[25px] md:text-[40px] lg:hidden"
          onClick={toggleMenu}
        >
          {!dropDown ? <CiMenuFries /> : <LiaTimesSolid />}
        </div>

        {/* =====menu dropdown for mobile view=== */}
      </div>
      {dropDown && (
        <div className=" bg-primaryColor absolute top-0 h-full w-[70%] px-[10%] flex flex-col gap-[20px] ">
          <ul className=" text-[#000] flex flex-col gap-[30px] text-[18px] mt-[50%] md:text-[35px]">
            <li className="hover:underline">Products & Services</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Portfolio</li>
            <li className="hover:underline">FAQ</li>
          </ul>
          <button className="hover:bg-black hover:text-primaryColor border-[1px] border-[#828282] p-2 rounded-[30px] text-[15px] font-semibold md:text-[25px]">
            Sign In
          </button>
          <button className="hover:bg-[#0005] hover:text-[#000] hover:border hover:border-[#828282]  p-2 rounded-[30px] text-[15px] bg-[#171717] text-primaryColor font-semibold md:text-[25px]">
            Get Started
          </button>
        </div>
      )}
    </>
  );
};
