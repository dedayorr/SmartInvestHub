/* eslint-disable no-unused-vars */
import React from "react";

export default function SectionFour() {
  return (
    <div className="mx-[5%] py-[10%] lg:flex lg:flex-row-reverse lg:mx-[7%] lg:gap-[15%]">
      <div className="text-white mb-[7%]">
        <h2 className="mb-[7%] text-[40px] font-bold lg:text-[60px]">
          Invest with confidence
        </h2>
        <div className="flex flex-col gap-[20px] ">
          <div>
            {" "}
            <h3 className=" text-[20px] font-semibold lg:text-[30px]">
              Withstand market highs and lows
            </h3>
            <p className="text-secondaryColor">
              We don’t try to predict the market. Instead, we invest your money
              in different assets that perform well at different times.
              Resiliency is built right in.
            </p>
          </div>
          <div>
            {" "}
            <h3 className=" text-[20px] font-semibold lg:text-[30px]">
              Make the most of your money
            </h3>
            <p className="text-secondaryColor">
              In the background, we’re taking care of the little things that
              make a big difference, like asset allocation, rebalancing, and
              dividend reinvestment.
            </p>
          </div>
          <div>
            {" "}
            <h3 className=" text-[20px] font-semibold lg:text-[30px]">
              Trusted advice, any time
            </h3>
            <p className="text-secondaryColor">
              Our advisors are here to help at every stage of your money journey
              — and as fiduciaries, they&apos;ll always put your financial best
              interests first.
            </p>
          </div>
        </div>
      </div>
      <img
        className="rounded-[15px] lg:w-[100%] lg:h-[650px] lg:object-cover"
        src="/images/businessman.png"
        alt=""
      />
    </div>
  );
}
