import React from 'react'

function About() {
  return (
    <div className='w-full sm:h-[80vh] h-[115vh] bg-gray-300 px-10 py-30'>

      <div className='w-4/5 flex mx-auto flex-col sm:flex-row gap-8 sm:gap-0 text-center sm:text-left just'>
        <div className='sm:w-1/2 w-full h-[50vh] sm:px-10  rounded-lg overflow-hidden'> 
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='sm:w-1/2 w-full flex flex-col gap-3 bg-gray-200 p-10'>
          <h1 className='sm:text-6xl text-5xl font-semibold'>We Are Working On It</h1>
          <p className='text-2xl px-2'>Did You Really need it</p>
          <div className='flex gap-4 p-2 sm:justify-start justify-center'>
            <button className='border-2 px-3 text-xl rounded-lg'>Yes</button>
            <button className='border-2 px-3 text-xl rounded-lg'>No</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About