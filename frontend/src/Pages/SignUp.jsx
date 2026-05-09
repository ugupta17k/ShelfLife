import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function CreateUsers(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

    try{
        const res = axios.post("http://localhost:3000/api/auth/register",{
            name,
            email,
            password
        })
        // console.log(res.data);
        window.location = "/Login"
    }catch(err){
        console.log(err, " failed to signup");
    }
  }

  return (
    <div>
      <div className="container w-full h-screen bg-zinc-800 flex">
        <div className="left w-[50%] h-full bg-red-400 flex flex-col justify-center items-center">
          <h1 className="text-[3rem]">Register Yourself</h1>
        </div>
        <div className="right w-[50%] h-full bg-zinc-800 flex flex-col justify-center items-center ">
          <form
          onSubmit={CreateUsers}
           className="flex flex-col gap-4  w-[30rem] ">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="name"
              className=" rounded-xl px-3 py-4 border"
            />
            <label htmlFor="">Email</label>
            <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
              type="text"
              placeholder="email"
              className=" rounded-xl px-3 py-4 border"
            />
            <label htmlFor="">Password</label>
            <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
              type="password"
              placeholder="password"
              className=" rounded-xl px-3 py-4 border"
            />
            <button
            type="submit"
              className="mt-3 rounded-xl px-3 py-4 border"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
