import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div
      className={`
        fixed top-[0px] p-[30px] w-full h-[30px] z-1 transition-all ease-in duration-75
        ${show ? "bg-black" : "bg-transparent"}
        `}
    >
      <div className="flex justify-between">
        <img
          onClick={() => navigate("/")}
          className="fixed top-[25px] -right-[-20px] w-[30px] h-[30px] object-contain cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="fixed top-[25px] -right-[-20px] w-[30px] h-[30px] object-contain cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}
