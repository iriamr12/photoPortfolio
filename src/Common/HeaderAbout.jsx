import React from 'react';
import { RxCross1 } from "react-icons/rx";

const HeaderAbout = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-customLight">
      <a href="/" className="text-customDarkGreen text-4xl font-playfair cursor-none">
        <RxCross1 />
      </a>
      <div className="text-4xl font-semibold text-customDarkGreen font-copernicus ">
        IRIA MORENO
      </div>
    </div>
  );
};

export default HeaderAbout;
