import React, { useState, useEffect } from 'react';
import me from '../assets/me.jpg';
import HeaderAbout from '../Common/HeaderAbout';
import { FaLinkedin, FaBehance } from 'react-icons/fa'; // Importing icons

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const textElement = document.getElementById('scrolling-text');
    let pos = 100; // Initial position of the text off the screen

    const scrollText = () => {
      pos -= 1;
      if (pos < -textElement.clientWidth) {
        pos = window.innerWidth; // Reset position once it goes off the screen
      }
      textElement.style.left = pos + 'px';
      requestAnimationFrame(scrollText);
    };

    scrollText(); 

    return () => cancelAnimationFrame(scrollText);
  }, []);

  return (
    <div className="min-h-screen bg-customLight">
      <HeaderAbout />
      <div className='p-16 font-lora text-black flex'>
        <div
          className='bg-customGreen w-[400px] h-[520px] relative'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <img
              src={me} // Replace with the path to your photo
              className='absolute inset-0 w-full h-full object-cover opacity-90'
            />
          )}
          <div className='absolute top-1/4 right-32 transform translate-x-full text-2xl'>
            Iria Moreno Rodriguez
            <br />
            +31 6 129 74 897
            <br />
            <a
              className={`cursor-none ${isHovered ? 'underline' : ''}`}
              href='mailto:iria.moreno12@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              iria.moreno12@gmail.com
            </a>
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://www.linkedin.com/in/iria-moreno-rodriguez/"
                target="_blank"
                rel="noreferrer"
                className="cursor-none text-3xl hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.behance.net/iriamoreno"
                target="_blank"
                rel="noreferrer"
                className="cursor-none text-3xl hover:text-blue-400 transition duration-300"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Scrolling Text Container */}
        <div id="scrolling-text" className="absolute whitespace-nowrap text-2xl font-thin font-lora ">
          I love to walk around as it allows me to reach the 10,000 mandatory steps of the day and, on the way, capture light reflecting on people faces, facades, or nature. Regardless, light will keep on reflecting while life keeps on passing.
        </div>
      </div>

  );
};

export default About;
