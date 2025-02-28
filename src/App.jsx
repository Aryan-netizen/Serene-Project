import React from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'

import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import Middle from './components/Middle';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import HelpPage from './components/Help';
import TermsAndConditions from './components/Term';



function App() {
  // Soligant
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full font-[Montserrat] text-black overflow-hidden'>
      {/* <Nav/> */}
      <Landing/>
      <Middle/>
      <About/>
      <Product/>
      <TermsAndConditions/>
      <AboutUs/>
      <HelpPage/>
      {/* <AboutUs/> */}
    </div>
  )
}

export default App