import React from 'react';
import { RxCross1 } from "react-icons/rx";

const HeaderAbout = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-customLight">
      <a href="/" className="text-black text-4xl font-playfair cursor-none">
        <RxCross1 />
      </a>
      <div className="text-4xl font-thin text-black font-lora ">
        IRIA MORENO
      </div>
    </div>
  );
};

export default HeaderAbout;
