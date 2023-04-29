import React, { useState } from "react";
import Signup from "../Components/Signup";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-[url(https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png)]">
      <img
        onClick={() => navigate("/")}
        className="fixed z-10 top-[0px] left-[15px] w-[130px] sm:top-[0px] sm:left-[20px] sm:w-[150px] lg:top[0px] lg:left-[20px] xl:top-[0px] xl:left-[100px] lg:w-[180px] object-contain cursor-pointer xl:pl-[20px]"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
      />
      <button
        onClick={() => {
          setSignIn(true);
        }}
        className="fixed z-10 bg-[#e50914] font-semibold text-[#fff] text-[14px] sm:text-[14px] px-[14px] py-[6px] sm:px-[16px] sm:py-[8px] lg:px-[20px] lg:py-[10px] top-[20px] right-[25px] sm:top-[20px] sm:right-[40px] lg:top-[24px] lg:right-[40px] xl:top-[24px] xl:right-[140px] border-none rounded-sm cursor-pointer"
      >
        Sign In
      </button>
      <div className="w-full h-screen backdrop-brightness-50 backdrop-sm" />
      {signIn ? (
        <div className="absolute top-[15%] md:left-[28%] lg:left-[35%]">
          <Signup />
        </div>
      ) : (
        <>
          <div className="absolute z-10 top-[30%] lg:left-[8%] xl:left-[12%] text-[#fff] p-[20px] text-center">
            <h1 className="mb-[20px] text-[48px] leading-[45px] font-[900]">
              Unlimited films, Tv programs and more.
            </h1>
            <h2 className="text-[24px] font-[400] pb-[20px]">
              Watch anywhere, Cancel at any time.
            </h2>
            <h3 className="text-[20px] font-[400] leading-[30px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="m-[20px]">
              <form>
                <input
                  className="py-[28px] px-3 text-black outline-none h-[30px] w-[30%] border-none m-w-[600px]"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="py-[16px] px-[20px] text-[16px] text-[#fff] bg-[#e50914] border-none font-[600] cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        </>
      )}
      {/* </div> */}
    </div>
  );
}
