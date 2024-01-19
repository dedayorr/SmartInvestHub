/* eslint-disable no-unused-vars */
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function SectionFive() {
  return (
    <div className="bg-black py-[10%] px-[4%] lg:py-[7%]">
      <div className="text-white lg:flex  lg:gap-[10%]">
        <div className="m-[4%] p-[5%] bg-[#FFBD1A30] rounded-[15px] lg:m-0 lg:p-[5%] lg:flex lg:flex-col lg:gap-[20px]">
          <div>
            {" "}
            <h2 className="text-[30px] font-bold">
              {" "}
              Socially responsible investing
            </h2>
            <p>
              {" "}
              Invest in socially responsible companies across the globe, so you
              can grow your wealth while creating the world you want. A 3D image
              of a plant perpetually developing.
            </p>
          </div>
          <img src="/images/investing.png" alt="" />
        </div>
        <div className="m-[5%] p-[5%] bg-[#FFBD1A30] rounded-[15px] lg:m-0 lg:p-[5%] lg:flex lg:gap-[20px] lg:flex-col-reverse">
          <div className="">
            <h2 className="text-[30px] font-bold"> Classic portfolio</h2>
            <p className="mb-[5%]">
              Smart and diversified, built for long-term growth in fluctuating
              markets with a wide range of low-fee ETFs. A pie chart with pieces
              breaking out
            </p>
            <a href="#portfolio">
              <FaCircleArrowRight className="mb-[3%] text-[30px] lg:mb-[0] lg:text-[50px] hover:text-primaryColor"/>
            </a>
          </div>
          <img src="/images/moneychart.png" alt="" />
        </div>
      </div>
    </div>
  );
}
