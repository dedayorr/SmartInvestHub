/* eslint-disable no-unused-vars */
import React from "react";

export default function LandingPage() {
  return (
    <>
      <div className="bg-[#000] h-[460px] mx-[5%] px-[4%] mt-[-20%] pt-[30%] rounded-bl-[35px] rounded-br-[35px] md:h-[650px]">
        {/* ===Header Section=== */}
        <div>
          <p className="text-[#fff9] md:text-[25px]">DIGITAL ADVISOR</p>
          <h1 className="text-white font-bold text-[37px] md:text-[57px]">
            You live in the moment -{" "}
            <span className="text-primaryColor">we&apos;ll plan ahead</span>
          </h1>
          <p className="text-[#fff9] text-[15px] md:text-[25px]">
            Get the most out of your money with smart investing products and
            personalized advice to build long-term wealth.
          </p>
        </div>
        <br />
        <button className="bg-primaryColor p-[10px] rounded-[30px] text-[15px] hover:bg-white md:text-[25px]">Get Stated</button>
      </div>
    </>
  );
}
