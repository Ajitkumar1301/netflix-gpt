import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsignIn] = useState(true);

  const toggleSignInhandleChange = () => {
    setIsignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute bg-black w-2/6 my-32 mx-auto right-0 left-0  text-white p-8 bg-opacity-80">
        <h1 className="text-3xl px-1 m-2 font-bold">
          {" "}
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-transparent border-solid border-gray-700 border-2"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="m-2 p-4 w-full bg-transparent border-solid border-gray-700 border-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-2 w-full bg-transparent border-solid border-gray-700 border-2"
        />
        <button className="p-3 mx-2 my-4 bg-red-600 w-full font-semibold rounded-lg">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>

        <span className="mx-2 my-10 text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already member?"}
          <span
            className="cursor-pointer mx-2 my-10 text-white hover:underline"
            onClick={toggleSignInhandleChange}
          >
            {isSignIn ? "Sign up now" : "Sign In now"}
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;
