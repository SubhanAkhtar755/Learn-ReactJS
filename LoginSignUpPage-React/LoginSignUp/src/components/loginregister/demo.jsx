import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./loginregister.scss";
import { signOut, auth } from "../../config/firebase";
import User from "../contextApi/user";
import FabButton from "../fabButton/fabButton";
import { useSearchParams, useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { Link } from "react-router-dom";
const Demo = () => {


  //  search params useeffect -------------------------------------
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  //  logout function -------------------------------------
  const logoutsuccess = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {});
  };

  // usecontextb sy user mangvaya ha -----------------------------
  const user = useContext(User).user;
  //  colors array -------------------------------------

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "orange",
    "black",
    "brown",
    "cyan",
    "gray",
    "lime",
    "magenta",
    "navy",
    "olive",
    "silver",
    "teal",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  //  set search params -------------------------------------
  const paramsss = () => {
    searchParams.set("UserId", user.uid);
    searchParams.set("Username", user.fullname);
    searchParams.set("UserEmail", user.email);
    navigate(`/Demo?${searchParams} ? /AyHoi`);
  };

  //  get searchparams -------------------------------------
  const nameParamsss = searchParams.get("Username");
  if (nameParamsss) {
  }
  //  get searchparams -------------------------------------
  useLayoutEffect(() => {
    paramsss();
    randomColor
  }, [user]);
    //  typed bio -------------------------------------
    const typedBio = useRef(null);
  useEffect(() => {
    
    const options = {
      strings: [`${user.fullname ? user.fullname : 'Empty Name'}`, `${user.email ? user.email : 'Empty Email'}`, `${user.password ? user.password : 'Empty password'}`],
      typeSpeed: 200,
      backSpeed: 0,
      loop: true,
      showCursor: true,
    }
   
    const typed = new Typed(typedBio.current, options);

    return () => {
      typed.destroy();
  }
}, [user]);
  let name = "USERNAME";
 
  return (
    <div className='wrapper '
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
    >
      <div className="form-box login">
        <form className="rrr">
            <h1>Welcome!</h1>
        <input disabled type="text" ref={typedBio} className="demooo" />
          <h1  style={{ background: `${randomColor}` }} className=" sec">
            {user.fullname ? user.fullname : name}
          </h1>
          <Link to={'/AyHoi'}> <button className="Logout1">AY Hoi Agy Jaaa</button></Link>
          <button className="Logout" onClick={logoutsuccess}>Logout</button>
        </form>
      </div>
      <FabButton />
    </div>
  );
};

export default Demo;
