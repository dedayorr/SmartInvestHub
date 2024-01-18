// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function SectionThree() {
  const navigate = useNavigate();
  const navigateToSignUP = () => {
    navigate("/sign-up");
  };

  return (
    <div className="text-secondaryColor bg-[#000] mt-[20%] py-[10%] px-[7%] lg:mt-[10%] lg:flex lg:items-center lg:gap-[30px]">
      <div className="">
        <h2 className="text-[40px] font-bold lg:text-[50px] lg:font-extrabold">
          Trusted By Over 3 million Nigerians
        </h2>
        <p className="my-[5%] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          voluptate ratione. Fuga id nulla quidem quibusdam reprehenderit
          numquam repellat dignissimos, explicabo voluptatem consequuntur
          eveniet officiis ab perspiciatis eaque debitis quas?
        </p>
        <button
          onClick={navigateToSignUP}
          className="my-[5%] bg-primaryColor p-[10px] rounded-[30px] text-[15px] hover:bg-white hover:text-primaryColor md:text-[25px] w-[100px] lg:text-[20px] md:w-[150px] text-[#000]"
        >
          Get Stated
        </button>
      </div>
      <img
        className="rounded-[15px] lg:w-[50%] lg:h-[550px] lg:rounded-[30px]"
        src="/images/trust.png"
        alt=""
      />
    </div>
  );
}
