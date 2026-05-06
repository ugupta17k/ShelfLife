import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <div className=" w-full h-screen bg-black text-white">
        <Navbar />
        <div className="hero w-full h-screen flex justify-center items-center text-white">
        <h1 className='text-2xl'>Welcome To Shelflife</h1>
        </div>
      </div>
    </div>
  )
}

export default App