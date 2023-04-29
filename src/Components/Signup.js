import React, { useRef } from "react";
import { auth } from "../Firebase";

export default function Signup() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message)
        })
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message)
        })
    }

  return (
    <div className="flex justify-center m-w-[500px] bg-black bg-opacity-80 p-[50px]">
      <form className="">
        <h1 className="text-white text-left pb-[25px] text-[32px] font-[500]">Sign In</h1>
        <div>
          <input ref={emailRef} className="text-white bg-[#333333] w-[300px] outline-none mb-[20px] rounded-sm border-none py-[12px] px-[10px]" placeholder="Email" type="email" />
        </div>
        <div>
          <input ref={passwordRef} className="text-white bg-[#333333] w-[300px] outline-none mb-[50px] rounded-sm border-none py-[12px] px-[10px]" placeholder="Password" type="password" />
        </div>
        <button onClick={signIn} className="mb-[14px] w-[300px] py-[10px] px-[38%] text-[16px] font-[600] rounded-sm bg-[#e50914] text-white cursor-pointer" type="submit">Sign In</button>
        <h4>
            <span className="text-gray-500">New to Netflix? </span>
            <span onClick={register} className="hover:cursor-pointer hover:underline text-white">Sign Up now</span>
            </h4>
      </form>
    </div>
  );
}
