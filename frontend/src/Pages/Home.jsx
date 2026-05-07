import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-black text-white">
      <Navbar />
      <div className="hero w-full h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl">Welcome To Shelflife</h1>
        <br />
      </div>
    </div>
  );
};

export default Home;
