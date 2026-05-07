import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="container w-full h-screen bg-zinc-800 flex">
        <div className="left w-[50%] h-full flex flex-col justify-center items-center">
            <h1 className="text-[3rem]">Login Yourself</h1>
        </div>
        <div className="right w-[50%] h-full bg-zinc-800 flex flex-col justify-center items-center ">
          <form className="flex flex-col gap-4  w-[30rem] ">  
            <input type="text" placeholder="name" className=" rounded-xl px-3 py-4 border" />
            <input type="text" placeholder="email" className=" rounded-xl px-3 py-4 border" />
            <input type="password" placeholder="password" className=" rounded-xl px-3 py-4 border" />
            <button  className=" rounded-xl px-3 py-4 border" >SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login