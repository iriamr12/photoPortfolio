import React, { useState } from 'react';
import { usePointer } from '../Context/PointerContext';

const ImageWithOverlay = ({ src, alt, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsPointer2Visible } = usePointer();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPointer2Visible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPointer2Visible(false);
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      
      {isHovered && (
        <>
          <div className="absolute inset-0 bg-customGreen opacity-100" />
          
          <div
            className={`absolute top-1/2 ${
              position === 'left' ? 'right-48 transform translate-x-full' : 'left-48 transform -translate-x-full'
            } -translate-y-1/4 text-3xl text-black`}
          >
            {alt}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageWithOverlay;
