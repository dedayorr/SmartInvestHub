// eslint-disable-next-line no-unused-vars
import React from "react";

export default function SectionThree() {
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
      </div>
      <img
        className="rounded-[15px] lg:w-[50%] lg:h-[550px] lg:rounded-[30px]"
        src="/images/trust.png"
        alt=""
      />
    </div>
  );
}
