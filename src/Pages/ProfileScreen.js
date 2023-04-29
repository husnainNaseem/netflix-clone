import React from "react";
import Nav from "../Components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";

export default function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="bg-black h-screen ">
      <Nav />
      <div className="text-white w-[50%] m-w-[800px] mx-auto relative top-[10%]">
        <h1 className="text-[60px] font-[400] mb-[20px] border-b-[1px] border-[#282c2d]">Edit Profile</h1>
        <div className="flex">
          <img
            className="h-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="ml-[25px] flex-1">
            <h2 className="bg-[#808080] p-[15px] text-[15px] pl-[20px]">{user.email}</h2>
            <div>
              <button 
              className="px-[20px] py-[10px] text-[16px] mt-[5%] text-[#fff] bg-[#e50914] font-[600] border-none cursor-pointer"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
