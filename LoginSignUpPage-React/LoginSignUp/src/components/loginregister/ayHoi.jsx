import React, { useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import "./loginregister.scss";
import { signOut, auth } from "../../config/firebase";
import User from "../contextApi/user";
import FabButton from "../fabButton/fabButton";
import { Link } from "react-router-dom";


const AyHoi = () => {
  // usecontextb sy user mangvaya ha -----------------------------
  const user = useContext(User).user;
  return (
    <div className='wrapper ' >
     
            <h1>WelcomeWelcomeWelcomeWelcome!</h1>
         <Link to={'/Demo'}> <button className="Logout1">AY Hoi peechy aaa</button></Link>
          
     
    </div>
  );
};

export default AyHoi;
