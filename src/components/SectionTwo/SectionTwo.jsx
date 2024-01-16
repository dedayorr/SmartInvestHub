/* eslint-disable no-unused-vars */
import React from "react";
import { Icon } from "@iconify/react";
import { IoPricetagsOutline } from "react-icons/io5";
// import { FaHandsHelping } from "react-icons/fa";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function SectionTwo() {
  return (
    <div className="mt-[15%] flex flex-col gap-[60px] lg:flex-row lg:mt-[10%]">
      <div>
        <div className="mb-[20px]">
          {" "}
          <h2 className="font-semibold text-secondaryColor text-[35px] text-justify">
            Focus on the present while Digital Advisor focuses on the future
          </h2>
          <p className="text-primaryColor text-[35px] font-semibold">
            &#36;3,000
          </p>
        </div>
        <img
          className="h-[250px] md:w-[100%] md:h-[350px] lg:w-[px]"
          src="./images/image-one.png"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-[25px] lg:w-[50%]">
        <div className="text-secondaryColor flex gap-[10px]">
          <IoPricetagsOutline className=" w-[200px] h-[50px] text-primaryColor" />
          <div>
            <h3 className="text-[22px] font-extrabold">Low-cost investing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
              velit perspiciatis provident aliquid sed quae magni in mollitia
              possimus esse illo voluptates, corporis fuga alias quod
              exercitationem reprehenderit? Hic.
            </p>
          </div>
        </div>

        <div className="text-secondaryColor flex gap-[10px] ">
          <FaMoneyBillTransfer className="w-[200px] h-[50px] text-primaryColor" />
          <div>
            <h3 className="text-[22px] font-extrabold">
              Potential tax reduction
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat cupiditate quisquam aspernatur deserunt veniam tenetur
              porro sunt, nostrum quo numquam voluptatum quos voluptas nulla
              delectus eos! Sit, quas nobis?
            </p>
          </div>
        </div>
        <div className="text-secondaryColor flex gap-[10px] ">
          <IoHelpBuoySharp className="w-[200px] h-[50px] text-primaryColor" />
          <div>
            <h3 className="text-[22px] font-extrabold">
            Ongoing Support
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat cupiditate quisquam aspernatur deserunt veniam tenetur
              porro sunt, nostrum quo numquam voluptatum quos voluptas nulla
              delectus eos! Sit, quas nobis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
