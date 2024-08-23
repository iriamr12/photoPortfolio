import React, { useState, useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";

const PhotoGallery = ({ photos, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const goToNext = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Delay the actual closing of the gallery to allow for the fade-out transition
    setTimeout(() => {
      onClose();
    }, 300); // Match this duration with the Tailwind transition duration
  };

  useEffect(() => {
    setIsVisible(true); // Ensure gallery is visible when component mounts
  }, [currentIndex]);


  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 ">
      <button
        className="absolute top-2 right-4 text-white text-3xl cursor-none"
        onClick={handleClose}
        style={{color: 'black'}}
        
      >
        <RxCross1 />

      </button>
      
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button 
            className="text-black text-4xl p-4 absolute left-0 cursor-none" 
            onClick={goToPrevious}
          >
            &#8249;
          </button>
        )}
        
        {/* Current Image */}
        <div className="flex flex-col items-center justify-center">
          <img 
            src={photos[currentIndex].src} 
            alt={photos[currentIndex].alt} 
            className="object-contain max-h-[70vh] max-w-[70vw]" // Adjusted size
          />
          {/* Display the alt text below the image */}
          <p className="text-black mt-4 text-xl">{photos[currentIndex].alt}</p>
        </div>
        
        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button 
            className="text-black text-4xl p-4 absolute right-0 cursor-none" 
            onClick={goToNext}
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
