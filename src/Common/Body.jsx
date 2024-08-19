import React from 'react';
import ImageWithOverlay from './Overlay';
import lacasablancaysufielescudero from '../assets/lacasablancaysufielescudero.jpg';
import whenadoorclosesawindowopens from '../assets/whenadoorclosesawindowopens.jpg';
import vanishingsunset from '../assets/vanishingsunset.jpg';
import sorollassummer from '../assets/sorollassummer.jpg';
import freshsweetfigs from '../assets/freshsweetfigs.jpg';
import callmebyyournamesummer from '../assets/callmebyyournamesummer.jpg';
import backgroundmountains from '../assets/backgroundmountains.jpg';
import stairstoinfinity from '../assets/stairstoinfinity.jpg';
import breakingwaves from '../assets/breakingwaves.jpg';
import sailorssailing from '../assets/sailorssailing.jpg';
import backwindowviews from '../assets/backwindowviews.jpg';
import tallantbachoqueta from '../assets/tallantbachoqueta.jpg';
import semprealallunadeValència from '../assets/semprealallunadeValència.jpg';
import ligthandgreens from '../assets/ligthandgreens.jpg';





const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-16 font-lora text-black">
      {/* Row 1 */}
      <div className="col-span-1 h-80 mx-16">
        <ImageWithOverlay src={lacasablancaysufielescudero} alt="la casa blanca y su fiel escudero" position="left" />
      </div>
      <div className="col-span-1 w-[450px] h-[550px] ml-20 mt-20">
        <ImageWithOverlay src={whenadoorclosesawindowopens} alt="when a door closes a window opens" position="right" />
      </div>

      {/* Row 2 */}
      <div className="col-span-1 w-[450px] h-[550px]">
        <ImageWithOverlay src={vanishingsunset} alt="vanishing sunset" position="left" />
      </div>
      <div className="col-span-1 w-[550px] h-[350px] mt-20">
        <ImageWithOverlay src={sorollassummer} alt="sorolla's summer" position="right" />
      </div>

      {/* Row 3 */}
      <div className="col-span-2 w-[410px] h-[593px] mx-auto mt-28 mb-28">
        <ImageWithOverlay src={freshsweetfigs} alt="fresh sweet figs" position="left" />
      </div>


      {/* Row 4 */}
      <div className="col-span-1 w-[450px] h-[550px] ml-28">
        <ImageWithOverlay src={callmebyyournamesummer} alt="call me by your name summer" position="left" />
      </div>
      <div className="col-span-1 w-[650px] h-[350px] mt-96">
        <ImageWithOverlay src={backgroundmountains} alt="background mountains" position="right" />
      </div>

      
      {/* Row 5 */}
      <div className="col-span-1 w-[600px] h-[350px] mt-20 ml-12">
        <ImageWithOverlay src={breakingwaves} alt="breaking waves" position="left" />
      </div>
      <div className="col-span-1 w-[450px] h-[650px] mt-48 ml-24">
        <ImageWithOverlay src={stairstoinfinity} alt="stairs to infinity" position="right" />
      </div>

      {/* Row 6 */}
      <div className="col-span-1 w-[450px] h-[550px] ml-28">
        <ImageWithOverlay src={sailorssailing} alt="sailors sailing" position="left" />
      </div>
      <div className="col-span-1 w-[550px] h-[350px] mt-72 ml-24">
        <ImageWithOverlay src={backwindowviews} alt="back window views" position="right" />
      </div>

      {/* Row 7 */}
      <div className="col-span-2 w-[410px] h-[593px] mx-auto mt-32 mb-32">
        <ImageWithOverlay src={tallantbachoqueta} alt="tallant bachoqueta" position="left" />
      </div>


      {/* Row 8 */}
      <div className="col-span-1 w-[450px] h-[650px] ml-32">
        <ImageWithOverlay src={semprealallunadeValència} alt="sempre a la lluna de València" position="left" />
      </div>
      <div className="col-span-1 w-[450px] h-[450px] mt-24 ml-24">
        <ImageWithOverlay src={ligthandgreens} alt="ligth and greens" position="right" />
      </div>

      

    </div>
  );
};

export default Body;
