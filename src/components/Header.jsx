import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(false);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        navigate("/");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className="absolute w-screen bg-gradient-to-b from-black px-8 py-4 z-10 flex justify-between"
      onMouseLeave={() => setAvatar(false)}
    >
      <img src={Logo} alt="logo" className="w-36" />

      <div>
        {user && (
          <div className="flex  cursor-pointer mr-4 mt-4">
            <img
              src={user.photoURL}
              className="w-16 rounded-full"
              alt="UserAvatar"
              onMouseOver={() => setAvatar(true)}
            />
          </div>
        )}
        {user && avatar && (
          <div className="absolute right-12  top-20 bg-red-100 text-red-500 font-semibold p-2 flex flex-col space-y-2  shadow-2xl rounded-lg">
            <div className="flex border-solid border-red-500  border-2 rounded-lg p-2">
              <span>👤 </span>
              <h1 className="mx-2">{user.displayName}</h1>
            </div>
            <div
              className="flex space-x-1 border-solid border-red-500  border-2 rounded-lg p-2"
              onClick={handleSignout}
            >
              <img
                src="https://img.icons8.com/?size=100&id=83179&format=png&color=000000"
                alt="logout"
                className="w-6"
              />
              <button className="mx-2">Sign out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
