import React from 'react'
import logo from "../images/logo.png"
function Landing() {
  return (
    <div className='w-full h-fit py-10 pb-25 px-3 bg-gray-100 p-1 relative'>
      <img className='block mx-auto mt-25 h-[20vh] sm:h-[55vh] ' src={logo} alt="" />
      <h1 className='mx-auto mt-7 w-full text-center text-gray-700 font-bold sm:text-[10vh] leading-none uppercase text-5xl'>Serene</h1>
        <h1 className='mx-auto mt-2  text-center text-gray-700 font-medium sm:text-[5vh] text-[2vh] leading-none uppercase'>By Your Side No, Matter What</h1>
    </div>
  )
}

export default Landing