import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { User_avatar } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInhandleChange = () => {
    setIsignIn(!isSignIn);
  };

  const handleFormSUbmit = () => {
    const message = Validation(
      email.current.value,
      password.current.value,
      !isSignIn && name.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-2/6 my-32 mx-auto right-0 left-0  text-white p-8 bg-opacity-80"
      >
        <h1 className="text-3xl px-1 m-2 font-bold">
          {" "}
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 m-2 w-full bg-transparent border-solid border-gray-700 border-2 font-bold"
            required
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="m-2 p-4 w-full bg-transparent border-solid border-gray-700 border-2 font-bold"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-2 w-full bg-transparent border-solid border-gray-700 border-2 font-bold"
        />
        <span className="p-4 font-normal text-red-600">{errorMessage}</span>
        <button
          onClick={handleFormSUbmit}
          className="p-3 mx-2 my-4 bg-red-600 w-full font-semibold rounded-lg"
        >
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
