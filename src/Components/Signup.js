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
    <div className="flex justify-center m-w-[300px]">
      <form className="bg-[#181614] p-[50px]">
        <h1 className="text-left pb-[25px] text-[20px] font-[600]">Sign In</h1>
        <div>
          <input ref={emailRef} className="text-black outline-none h-[40px] mb-[14px] rounded-md border-none py-[5px] px-[15px]" placeholder="Email" type="email" />
        </div>
        <div>
          <input ref={passwordRef} className="text-black outline-none h-[40px] mb-[14px] rounded-md border-none py-[5px] px-[15px]" placeholder="Password" type="password" />
        </div>
        <button onClick={signIn} className="mb-[14px] py-[10px] px-[38%] text-[16px] font-[600] rounded-md bg-[#e50914] cursor-pointer" type="submit">sign In</button>
        <h4>
            <span className="text-gray-500">New to Netflix?</span>
            <span onClick={register} className="hover:cursor-pointer hover:underline">Sign Up now</span>
            </h4>
      </form>
    </div>
  );
}
