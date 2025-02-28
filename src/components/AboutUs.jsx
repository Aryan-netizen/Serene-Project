import React from 'react';
import founderImage from '../images/founder.jpg';
import coFounderImage from '../images/co-founder.jpg';

function AboutUs() {
  return (
    <div className="about-us-section p-10 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to Serene! We are dedicated to providing the best services to our customers.
      </p>
      <p className="text-lg mb-4">
        Our mission is to create a serene and peaceful environment for everyone. We believe in quality, integrity, and customer satisfaction.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing Serene. We look forward to serving you!
      </p>


<div className='flex '>
      <div className="founder-section mt-10 flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Founder</h2>
        <img src={founderImage} alt="Founder" className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg mb-4 w-1/2">
          <strong>John Doe</strong> is the visionary behind Serene. With over 20 years of experience in the industry, John has dedicated his career to creating peaceful and harmonious environments for people to thrive in.
        </p>
      </div>

      <div className="co-founder-section mt-10 flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Co-Founder</h2>
        <img src={coFounderImage} alt="Co-Founder" className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg mb-4 w-1/2">
          <strong>Jane Smith</strong> is the co-founder of Serene. Jane's expertise in customer relations and her passion for excellence have been instrumental in shaping the company's values and mission.
        </p>
      </div>
      </div>
    </div>
  );
}

export default AboutUs;