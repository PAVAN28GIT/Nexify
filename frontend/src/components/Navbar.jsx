import React from 'react'
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 20; // 20vh threshold
      setScrolled(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <nav className={`w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-20 text-white  
    ${scrolled ?"border-b border-[rgba(255,255,255,0.5)] z-1000 shadow-2xl shadow-gray-800 backdrop-blur-3xl fixed py-2 md:py-3" : "bg-black py-8"}`}>

        <h1 className='text-5xl font-bold font-VarelaRound text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg'>Nexify</h1>
        {/* <ul className='flex gap-6 justify-between tracking-wide text-3xl'>
            <li>Home</li>
            <li>About</li>
        </ul> */}
        <button className='border-2 px-6 py-1 rounded-3xl text-lg font-VarelaRound backdrop-blur-3xl'>Sign in</button>
    </nav>
  )
}

export default Navbar