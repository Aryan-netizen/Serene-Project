import React from "react";

function Product() {
  return (
    <div className='w-full h-fit bg-gray-400 px-10 py-30'>

      <div className='w-4/5 flex mx-auto flex-col md:flex-row gap-8 md:gap-0 text-center sm:text-left just'>
        
        <div className='w-fit h-fit flex flex-col gap-3 bg-gray-200 md:p-10 p-5'>
          <h1 className='sm:text-7xl text-4xl font-semibold'>We Are Working On It</h1>
          <p className='sm:text-3xl text-xl px-2'>Did You Really need it</p>
          <div className='flex gap-4 p-2 sm:justify-start justify-center '>
            <button className='border-2 px-3 text-xl rounded-lg'>Yes</button>
            <button className='border-2 px-3 text-xl rounded-lg'>No</button>
          </div>
        </div>
        <div className='w-full sm:px-6 px-0 rounded-lg overflow-hidden'> 
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </div>
    </div>
  );
}

export default Product;
