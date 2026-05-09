import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

 async function LoginUser(e){
    e.preventDefault();
    try{
      let res = await axios.post("http://localhost:3000/api/auth/login",{
        email,
        password
      })
      const token = res.data.token
      localStorage.setItem('token',token)
      window.location = "/"
    }catch(err){
      console.log(err , "failed to login");      
    }
  }

  return (
    <div>
      <div className="container w-full h-screen bg-zinc-800 flex">
        <div className="left w-[50%] h-full flex flex-col justify-center items-center">
          <h1 className="text-[3rem]">Login Yourself</h1>
        </div>
        <div className="right w-[50%] h-full bg-zinc-800 flex flex-col justify-center items-center ">
          <form 
          onSubmit={LoginUser}
          className="flex flex-col gap-4  w-[30rem] ">
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="text"
              placeholder="email"
              className=" rounded-xl px-3 py-4 border"
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              className=" rounded-xl px-3 py-4 border"
            />
            <button type="submit" className=" cursor-pointer rounded-xl px-3 py-4 border">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
