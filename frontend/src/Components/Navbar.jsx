import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10">
      <div className="left">
        <h1 className="text-white text-2xl font-semibold">SL</h1>
      </div>
      <div className="right flex items-center gap-6 text-sm text-white/80">
        <h1>Home</h1>
        <h1>Items</h1>
        <h1>Household</h1>
        <h1>Profile</h1>
      </div>
    </nav>
  )
}

export default Navbar