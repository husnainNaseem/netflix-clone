import React from "react";

function Nav() {
  return (
    <div className="fixed -top-[0px] p-[30px] w-full h-[30px] z-0 bg-black transition-all ease-in duration-75">
      <div className="flex justify-between">
        <img
          className="fixed top-4 -left-[0px] w-[80px] object-contain cursor-pointer pl-[20px]"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="fixed top-4 -right-[-20px] w-[30px] h-[30px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
