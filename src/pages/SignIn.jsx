// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextProvider } from "../components/Context";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { setHideNavbar } = useContext(ContextProvider);
  const setNav = () => {
    setHideNavbar(true);
  };
  const navigate = useNavigate();
  const navigateToSignUP = () => {
    navigate("/sign-up");
  };

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  const [data, setData] = useState({
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
      const response = await fetch(
        "https://smart-invest-hub.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Login successful!");
      } else {
        alert("Login Successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex lg:justify-center">
      {" "}
      <div
        className="w-full my-[20%] bg-white py-[15%] mx-[5%] rounded-[15px] px-[5%] flex flex-col gap-[30px] lg:my-[10%] lg:py-[5%] lg:w-[40%]"
        style={{ boxShadow: "rgba(255, 189,26, 0.35)  10px 10px 15px" }}
      >
        <a href="/">
          <div
            className={`w-[85%] text-center mx-auto text-[30px] border-[1px] border-[#FFBD1A] p-1 font-extrabold md:text-[35px] lg:text-[30px]`}
          >
            SmartInvestHub
          </div>
        </a>
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
          Sign In
        </button>

        <p className="text-center">
          Don&apos;t have an account ?{" "}
          <span
            onClick={navigateToSignUP}
            className="text-primaryColor cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
