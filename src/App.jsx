import React from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Flower from './components/flower'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  // Soligant
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full font-[Montserrat] text-black '>
      <Nav/>
      <Landing/>
      <Flower/>
      <About/>
    </div>
  )
}

export default App