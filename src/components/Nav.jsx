import React from 'react'

function Nav() {
  return (
    <div data-scroll data-scroll-speed="-.9" className='fixed z-[999] w-full px-20 py-8 text-black flex items-center justify-between text-sm font-light'>
      <div className='logo'>
        <h1>Serene</h1>
          <img src="" alt="" />
      </div>
      <div className='links flex gap-6 capitalize'>
        {["tech","about","blog","chat with serene"].map((item, index) =>{
          return (
            <a href="#" key={index}>{item}</a>
          )
        })}

      </div>

    </div>
  )
}

export default Nav