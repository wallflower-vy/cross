import "./index.css";

import React from "react";
import video from '../../assets/market.mp4'
import crosslogo from "../../assets/cross logo white.png";
const BannerComponent = () => {
  return (
    // 
    <div>
        <video className="flex "
        src={video} // set the video source
        autoPlay // play the video automatically
        loop // loop the video
        muted // mute the video
        poster="/path/to/poster.jpg" // set a poster image (optional)
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
         
        }}
      >
        
      </video>
      {/* Content */}
     <div className="flex"style={{ position: 'relative', zIndex: 1 }}>
     <div  className="bg-[rgba(0,0,0,0.8)] w-[25%] h-[60vh] md:h-[100vh] flex flex-col ">
        <div className="mt-16 flex justify-center ">
          <img src={crosslogo} alt='logo' className="w-[50%]"/>
        </div>
        <div className=" flex mt-10 justify-center">
          <ul className="text-white cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="flex justify-center mt-[28rem]">
          <button className="text-white py-1 px-8 border font-medium rounded-3xl border-white text-cent">explore</button>
        </div>
       
      </div>
      <div className=" w-[75%] h-[60vh] md:h-[100vh] flex flex-col px-[10rem] ">
       <div className="mt-16 flex justify-end">
       <button className="text-black bg-white py-1 px-10 fixed border font-medium rounded-3xl border-white text-cent">Menu</button>
       </div>
     <div className=" flex justify-end items-end mt-24  flex-col">
      <div  className="   w-[70%]">
          <h1 className="text-white font-bold text-3xl">Digital Commerce Infrastructure for Africa</h1>
          <p className="mt-5 text-white">Africa has over fifty-million small and medium-sized enterprises. Sabi provides them the technology, tools, and cost-effective access to products and services they need to grow sustainably.</p>
          <button className="text-white mt-5 py-1 px-7 border font-medium rounded-3xl border-white w-[10rem] text-cent">More</button>
       
       </div>
       
       
     </div>
        
      </div>
      
     </div>
    </div>
    
  );
};

export default BannerComponent;
