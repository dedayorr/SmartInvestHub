// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Modal } from "../../assets/Modal/Modal";

export default function SignUp() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successful signup, you can redirect or perform other actions
        alert("Signup successful!");
      } else {
        // Handle errors
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  
  return (
    <Modal>
      <div
        className="bg-white py-[10%] mx-[5%] h-[500px] rounded-[15px] px-[5%] flex flex-col w-full gap-[30px]"
        style={{ boxShadow: "rgba(255, 189,26, 0.35)  10px 10px 15px" }}
      >
        <div
          className={`w-[60%] mx-auto text-[20px] border-[1px] border-[#FFBD1A] p-1 font-extrabold md:text-[35px] lg:text-[30px]`}
        >
          <a href="/">SmartInvestHub</a>
        </div>
        <input
          className="outline-none border-[1px] border-[#000] w-full rounded-[10px] p-2"
          placeholder=" Full name"
          type="text"
          name="fullname"
          value={data.fullname}
          onChange={handleChange}
          required
        />

        <input
          className="outline-none border-[1px] border-[#000] w-full rounded-[10px] p-2"
          placeholder=" Email Address"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          className="outline-none border-[1px] border-[#000] w-full rounded-[10px] p-2"
          placeholder="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <button
          className="bg-primaryColor p-[10px] rounded-[10px] text-[15px] hover:bg-[#000] hover:text-primaryColor md:text-[25px] w-[100px] mx-auto lg:text-[20px] md:w-[150px]"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </Modal>
  );
}
