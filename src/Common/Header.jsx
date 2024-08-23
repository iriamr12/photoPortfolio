import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-customLight">
      <a href="/about" className="text-black text-4xl font-lora cursor-none">
        About
      </a>
      <div className="text-4xl text-black font-thin font-lora ">
        IRIA MORENO
      </div>
    </div>
  );
};

export default Header;
