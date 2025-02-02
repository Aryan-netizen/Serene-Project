import React from 'react'
import flower from "../images/Flowe.png"

function Middle() {
  return (
    <div className='w-full h-[80vh] relative bg-gray-200'>
        <h1 data-scroll data-scroll-speed=".2" className='w-[35vh] absolute text-sm top-[25vh] left-[3vh]'>Serene APP® SUPPORTS MENTAL
WELL-BEING BY FOSTERING
‘SELF-MANAGEMENT SKILLS
AND OFFERING DIVERSE METHODS
TO STRENGTHEN AND SUPPORT
MENTAL HEALTH</h1>
        <h1 data-scroll data-scroll-speed=".2" className='w-[60vh] text-right absolute text-sm top-[30vh] right-[10vh]'>
        THE GOAL IS NOT JUST TOPROVIDE <br />
‘TEMPORARY RELIEF BUT TOASSIST <br />
USERSIN DEVELOPING THE SKILLS <br />
NECESSARY FORLONG-TERM <br />
IMPROVEMENT AND MAINTENANCE OF <br />
MENTAL HEALTH. <br />
        </h1>
        <img data-scroll data-scroll-speed=".8" className='absolute left-[30vh] w-[70vw] -top-[10vh] -translate-x-0.5 -translate-y-0.5' src={flower} alt="" />
    </div>
  )
}

export default Middle