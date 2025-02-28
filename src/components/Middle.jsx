import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

function Middle() {
  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap">
      <div className="marquee flex">
        <img src={image1} alt="Image 1" className="marquee-image" />
        <img src={image2} alt="Image 2" className="marquee-image" />
        <img src={image3} alt="Image 3" className="marquee-image" />
        <img src={image4} alt="Image 4" className="marquee-image" />
        {/* Repeat images to create a continuous loop */}
        <img src={image1} alt="Image 1" className="marquee-image" />
        <img src={image2} alt="Image 2" className="marquee-image" />
        <img src={image3} alt="Image 3" className="marquee-image" />
        <img src={image4} alt="Image 4" className="marquee-image" />
      </div>
    </div>
  );
}

export default Middle;