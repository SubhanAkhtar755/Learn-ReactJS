import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import Login from "../components/loginregister/login";
import { useEffect, useState } from "react";
import Register from "../components/loginregister/register";
import { auth, onAuthStateChanged } from "./firebase";
import Demo from "../components/loginregister/demo";
import Apploader from "../components/loginregister/loader";
import HashLoader from "react-spinners/HashLoader";
import AyHoi from "../components/loginregister/ayHoi";
function Approuter() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user ? true : false);
    });
  }, []);
  console.log(user);
 
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

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    if (user) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }else {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
  
 } }, [user ]);

  return (
    <>
      {loader ? (
        <HashLoader
          color={randomColor}
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          loading
          size={50}
          speedMultiplier={3}
        />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to={"/Demo"} /> : <HomePage />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to={"/Demo"} /> : <Login />}
            />
               <Route
              path="/register"
              element={user ? <Navigate to={"/Demo"} /> : <Register />}
            />
            <Route path="/Apploader" element={<Apploader />} />

               <Route
              path="/Demo"
              element={user ? <Demo /> : <Navigate to={"/"} />}
            />
         
            <Route
              path="/AyHoi"
              element={user ? <AyHoi /> : <Navigate to={"/"} />}
            />
          </Routes>
        </BrowserRouter>
      )}{" "}
    </>
  );
}
export default Approuter;
