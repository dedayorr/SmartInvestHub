// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

export const NavBar = () => {
  const [dropDown, setdropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setdropDown(!dropDown);
  };

  function handleScroll() {
    if (
      (document.documentElement && document.documentElement.scrollTop > 70) ||
      document.body.scrollTop > 70
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 sticky top-0 flex justify-between h-[70px] items-center px-[9%] md:h-[90px] lg:px-[7%] ${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        }`}
      >
        <div
          className={`${
            scrolled ? "text-black" : "text-primaryColor"
          }  text-[15px] border-[1px] border-[#FFBD1A] p-1 font-extrabold md:text-[35px] lg:text-[30px]`}
        >
          <a href="/">SmartInvestHub</a>
        </div>
        <ul className="text-[#828282] hidden lg:flex gap-[30px]">
          <li className="hover:text-[#FFBD1A] cursor-pointer">
            Products & Services
          </li>
          <li className="hover:text-[#FFBD1A] cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#FFBD1A] cursor-pointer">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-[#FFBD1A] cursor-pointer">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="text-[#828282] hidden lg:flex gap-[15px]">
          <button className="hover:bg-[#FFBD1A] hover:text-[#000] w-[100px] border-[1px] border-[#828282] p-2 rounded-[30px] text-[15px]">
            Sign In
          </button>
          <button className="hover:bg-[#fff] hover:text-primaryColor w-[100px] rounded-[30px] text-[15px] bg-[#171717]">
            Get Started
          </button>
        </div>
        <div
          className={`text-primaryColor text-[25px] md:text-[40px] lg:hidden ${
            scrolled ? "text-black" : "text-primaryColor"
          }`}
          onClick={toggleMenu}
        >
          {!dropDown ? <CiMenuFries /> : <LiaTimesSolid />}
        </div>

        {/* =====menu dropdown for mobile view=== */}
      </div>
      {dropDown && (
        <div className="top-0 bg-primaryColor fixed z-50 h-full w-[70%] px-[10%] flex flex-col gap-[20px] ">
          <ul className=" text-[#000] flex flex-col gap-[30px] text-[18px] mt-[50%] md:text-[35px]">
            <li className="hover:underline">Products & Services</li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:underline">
              <a href="#faq">FAQ</a>
            </li>
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
