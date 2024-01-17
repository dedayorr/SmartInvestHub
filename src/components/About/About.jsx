// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
import Swiper from "react-slider-swiper";

export default function About() {
  const params = {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    nextButtonCustomizedClass: "nextButtonCustomizedClass",
    prevButtonCustomizedClass: "customized-swiper-button-prev",
    spaceBetween: 30,
    // autoplay: true,
    // delay: 3000,
  };

  const [slide, setslide1] = useState(true);
  const [slide2, setslide2] = useState(false);
  const [slide3, setslide3] = useState(false);

  function handleClick(slideNumber) {
    if (slideNumber === 1) {
      setslide1(true);
      setslide2(false);
      setslide3(false);
    } else if (slideNumber === 2) {
      setslide1(false);
      setslide2(true);
      setslide3(false);
    } else if (slideNumber === 3) {
      setslide1(false);
      setslide2(false);
      setslide3(true);
    }
  }

  return (
    <div id="about">
      {/* ========mobile view====== */}
      <div className="bg-[#fff] py-[15%] lg:hidden">
        <p className="text-[40px] font-bold underline text-center">
          Learn more about Smart Invest Hub
        </p>
        <Swiper {...params} className="lg:hidden">
          <div className="pb-[10%] relative">
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[75%] z-20 text-secondaryColor text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%]">
              A robo-advisor is an online platform that manages your investments
              automatically. It&apos;s financial advice that comes from an
              algorithm instead of a person, and it can take a lot of the time,
              guesswork, and stress out of owning a portfolio.
            </div>
            <img
              className="h-[200px] w-[100%] md:h-[300px]"
              src="/images/preslide.png"
              alt=""
            />
            <p className="text-[20px] text-center font-bold md:text-[24px]">
              What is a Robo-advisor?
            </p>
          </div>

          <div>
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[86%] z-20 text-secondaryColor text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo deleniti molestias hic excepturi ratione, eveniet nisi
              optio sed qui illo doloribus veniam numquam natus possimus ab
              esse, quaerat dolore nesciunt!
            </div>
            <img
              className="h-[200px] w-[100%] md:h-[300px]"
              src="/images/slide-two.png"
              alt=""
            />
            <p className="text-[20px] text-center font-bold md:text-[24px]">
              Introducing Smart Invest Hub
            </p>
          </div>

          <div>
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[86%] z-20 text-secondaryColor text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo deleniti molestias hic excepturi ratione, eveniet nisi
              optio sed qui illo doloribus veniam numquam natus possimus ab
              esse, quaerat dolore nesciunt!
            </div>
            <img
              className=" h-[200px] w-[100%] md:h-[300px]"
              src="/images/slide-three.png"
              alt=""
            />
            <p className="text-[20px] text-center font-bold md:text-[24px]">
              How to enroll in Smart Invest Hub ?
            </p>
          </div>
        </Swiper>
      </div>

      {/* =======desktop view======== */}
      <div className="bg-[#fff] py-[10%] hidden lg:flex px-[7%] items-center">
        <div>
          <p className="text-[45px] font-bold underline ">
            Learn more about Smart Invest Hub
          </p>
          <div
            onClick={() => handleClick(1)}
            className="text-one text-[20px] font-bold text-secondaryColor hover:text-black active:text-black cursor-pointer my-[5%]"
          >
            What is a robo-advisor?
          </div>
          <div
            onClick={() => handleClick(2)}
            className="text-two text-[20px] font-bold text-secondaryColor hover:text-black active:text-black cursor-pointer my-[5%]"
          >
            Introducing Smart Invest Hub
          </div>
          <div
            onClick={() => handleClick(3)}
            className="text-three text-[20px] font-bold text-secondaryColor hover:text-black active:text-black cursor-pointer my-[5%]"
          >
            How to enroll in Smart Invest Hub
          </div>
        </div>

        {slide && (
          <div className="firstslide relative w-[60%]">
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[75%] z-20 text-[#fff9] text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%] lg:h-[100%] lg:pt-[8%]">
              A robo-advisor is an online platform that manages your investments
              automatically. It&apos;s financial advice that comes from an
              algorithm instead of a person, and it can take a lot of the time,
              guesswork, and stress out of owning a portfolio.
            </div>
            <img src="/images/preslide.png" alt="" />
          </div>
        )}

        {slide2 && (
          <div className="secondslide relative w-[60%]">
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[75%] z-20 text-[#fff9] text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%] lg:h-[100%] lg:pt-[8%] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              sed nemo iure adipisci at debitis! Minima commodi eveniet
              aspernatur debitis, hic perspiciatis nesciunt quos dolores id
              animi deleniti et aliquam?
            </div>
            <img
              className="h-[300px] w-[100%]"
              src="/images/slide-two.png"
              alt=""
            />
          </div>
        )}

        {slide3 && (
          <div className="thirdslide relative w-[60%]">
            <div className="absolute bg-[#0000008e] right-0 left-0 h-[75%] z-20 text-[#fff9] text-[18px] text-center pt-[5%] md:text-[24px] md:h-[73%] lg:h-[100%] lg:pt-[8%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              delectus voluptate amet, dignissimos voluptates impedit. Tenetur
              asperiores dolores neque rerum. Itaque sit repellendus laudantium
              repellat magnam nobis esse dignissimos unde?
            </div>
            <img
              className="h-[300px] w-[100%]"
              src="/images/slide-three.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
