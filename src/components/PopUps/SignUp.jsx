/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import { Modal } from "../../assets/Modal/Modal";
// import { MdCancel } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export default function SignUp() {
  const { setHideNavbar } = useContext(ContextProvider);
  const setNav = () => {
    setHideNavbar(true);
  };

  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/sign-in");
  };
  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex lg:justify-center">
      <div
        className="w-full my-[20%] bg-white py-[15%] mx-[5%] rounded-[15px] px-[5%] flex flex-col gap-[30px] lg:my-[5%] lg:py-[5%] lg:w-[40%]"
        style={{ boxShadow: "rgba(255, 189,26, 0.35)  10px 10px 15px" }}
      >
        <div
          className={`w-[85%] text-center mx-auto text-[30px] border-[1px] border-[#FFBD1A] p-1 font-extrabold md:text-[35px] lg:text-[30px]`}
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

        <div className="border-[1px] p-2 flex items-center border-[#000] w-full rounded-[10px]">
          {" "}
          <input
            className="outline-none bg-transparent w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <div
            className="float-right"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <div className="text-[#00000046]">
                <IoEyeOff className="text-[18px]" />
              </div>
            ) : (
              <div className="text-primaryColor text-[18px]">
                <IoEye />
              </div>
            )}
          </div>
        </div>
        <button
          className="bg-primaryColor p-[10px] rounded-[10px] text-[15px] hover:bg-[#000] hover:text-primaryColor md:text-[25px] w-[100px] mx-auto lg:text-[20px] md:w-[150px]"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <p className="text-center">
          Already have an account ? 
          <span
            onClick={navigateToSignIn}
            className="text-primaryColor cursor-pointer"
          >
             Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
