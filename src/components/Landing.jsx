import React from 'react'
import logo from "../images/logo.png"
import Spline from '@splinetool/react-spline'
function Landing() {
  return (
    <div className='w-full h-fit py-10 pb-25 px-3 bg-gray-100 p-1 relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col justify-center items-center p-8 bg-white h-fit rounded-lg shadow-lg m-auto'>
          <div >
            <h1 className='text-6xl font-semibold'>🚀Revolutionizing Mental Health with AI-Powered Wellness</h1>
            <p className='mt-3'>Your Virtual Companion for Real-Time Emotional Well-Being</p>
            <div>
              <button className='bg-black text-white p-2 rounded-2xl mt-8'>Get Started</button>
            </div>
          </div>
      </div>
      <div className='h-[85vh] mt-25'>

      <Spline  scene="https://prod.spline.design/pxQYNLx5TP5owm2d/scene.splinecode" />
      </div>
      </div>
    </div>
  )
}

export default Landing