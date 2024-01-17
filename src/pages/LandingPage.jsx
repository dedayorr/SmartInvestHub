/* eslint-disable no-unused-vars */
import React from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import SectionTwo from "../components/SectionTwo/SectionTwo";
import SectionThree from "../components/SectionThree/SectionThree";
// import {Controls, Player} from "react-lottie-player"

export default function LandingPage() {
  return (
    <div className="">
      <div className="bg-[#000] h-[480px] mx-[5%] px-[4%] mt-[-20%] pt-[30%] rounded-bl-[35px] rounded-br-[35px] md:h-[650px] lg:pt-[20%] lg:flex lg:h-[750px] lg:rounded-bl-[75px] lg:rounded-br-[75px] lg:justify-between lg:px-[2%] lg:items-center lg:gap-[55px]">
        {/* ===Header Section=== */}
        <div className="lg:w-[60%]">
          {" "}
          <div>
            <p className="text-[#fff9] md:text-[25px]">DIGITAL ADVISOR</p>
            <h1 className="text-white font-bold text-[40px] md:text-[57px] lg:text-[px]">
              You live in the moment -{" "}
              <span className="text-primaryColor">we&apos;ll plan ahead</span>
            </h1>
            <p className="text-[#fff9] text-[15px] md:text-[25px] lg:text-[16px]">
              Get the most out of your money with smart investing products and
              personalized advice to build long-term wealth.
            </p>
          </div>
          <br />
          <button className="bg-primaryColor p-[10px] rounded-[30px] text-[15px] hover:bg-white hover:text-primaryColor md:text-[25px] w-[100px] lg:text-[20px] md:w-[150px]">
            Get Stated
          </button>
        </div>
        <div className=" hidden lg:block">
          <Player
            src="https://lottie.host/b49ef5ee-8601-4ae6-a5c9-d31fbff9dd5d/hwElgr6ouW.json"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "400px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
      </div>
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
