/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

export default function Faq() {
  const faqData = [
    {
      question: "What's the minimum amount i need ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eveniet est laborum quasi amet ipsam sequi? Iure magnam necessitatibus totam!",
    },
    {
      question: "what else do i need to know ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eveniet est laborum quasi amet ipsam sequi? Iure magnam necessitatibus totam!",
    },
    {
      question: "who is eligible to enroll ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eveniet est laborum quasi amet ipsam sequi? Iure magnam necessitatibus totam!",
    },
    {
      question: "What type of account ?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, eveniet est laborum quasi amet ipsam sequi? Iure magnam necessitatibus totam!",
    },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="text-white bg-black py-[10%] px-[5%] lg:py-[5%]">
      <p className="text-[30px] font-bold text-center lg:text-[50px]">
        Frequently Asked Questions
      </p>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item flex flex-col gap-[15px] my-[5%]">
          <div
            className="faq-question flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span className="text-[20px] font-bold lg:text-[30px]">{faq.question}</span>
            <span>
              {openIndex === index ? (
                <FaCircleMinus className="text-primaryColor  lg:text-[30px]" />
              ) : (
                <FaPlusCircle className="text-primaryColor  lg:text-[30px]" />
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer text-secondaryColor lg:text-[20px]">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
