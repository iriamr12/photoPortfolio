import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-customLight">
      <a href="/about" className="text-customDarkGreen text-4xl font-playfair cursor-none">
        About
      </a>
      <div className="text-4xl font-semibold text-customDarkGreen font-copernicus ">
        IRIA MORENO
      </div>
    </div>
  );
};

export default Header;
