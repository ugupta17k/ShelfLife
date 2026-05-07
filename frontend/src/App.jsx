import React from "react";
import Navbar from "./Components/Navbar";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <div className=" w-full h-screen bg-black text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
