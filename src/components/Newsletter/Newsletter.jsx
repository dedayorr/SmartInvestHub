// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    alert("You have successfully subscribed to our newsletter ");
  };

  return (
    <div className="bg-white py-[10%] px-[5%] lg:py-[5%] lg:flex lg:items-center">
      <h2 className="font-extrabold lg:text-[30px] lg:font-bold">
        Sign up for our weekly non-boring newsletter about money, markets, and
        more. 😁👍
      </h2>
      <div className="mt-[5%] w-full flex gap-[20px]">
        <input
          className="outline-none w-full border-[1px] border-[#000] rounded-[20px] text-[15px] p-2 lg:text-[18px] lg:p-5 lg:rounded-[35px]"
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className="hover:bg-primaryColor hover:text-[#000] bg-[#000] p-2 rounded-[20px] text-white lg:rounded-[35px] lg:w-[30%]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
