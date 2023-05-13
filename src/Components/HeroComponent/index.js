

import React from "react";
import video from '../../assets/market.mp4'
import crosslogo from "../../assets/cross logo white.png";
const BannerComponent = () => {
  return (
    // 
    <div>
        <video className="flex  absolute w-full md:h-full h-[50vh] object-cover"
        src={video} // set the video source
        autoPlay // play the video automatically
        loop // loop the video
        muted // mute the video
        // poster="/path/to/poster.jpg" // set a poster image (optional)
        
        // }}
        
      >
        
      </video>
      {/* Content */}
     <div className="flex  md:flex-row flex-col"style={{ position: 'relative', zIndex: 1,  }}>
     <div  className="bg-[rgba(0,0,0,0.8)]  md:w-[100%] w-[100%]  md:h-[100vh] h-[50vh] flex flex-col ">
        {/* <div className="mt-16 flex justify-center ">
          <img src={crosslogo} alt='logo' className="w-[50%]"/>
        </div> */}
        <div className=" flex mt-10 justify-center">
          <ul className="text-white cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="flex justify-center md:mt-[28rem] mt-5">
          <button className="text-white py-1 px-8 border font-medium rounded-3xl border-white text-cent">explore</button>
        </div>
       
      </div>
      {/* <div className=" md:w-[75%] w-[100%] md:bg-transparent bg-[#00085A] h-[60vh] md:h-[100vh] flex flex-col md:px-[10rem] px-[2rem] ">
       <div className="md:mt-16  mt-0 flex md:justify-end">
       <button className="text-black bg-white py-1 px-10 md:fixed  absolute border font-medium rounded-3xl border-white text-cent">Menu</button>
       </div>
     <div className=" flex md:justify-end justify-start md:items-end  items-start md:mt-24 mt-10  flex-col">
      <div  className="   md:w-[70%] w-full">
          <h1 className="text-white font-bold text-3xl">The premier online shopping destination</h1>
          <p className="mt-5 text-white">Our platform offers a comprehensive range of high-quality products and services that empower businesses across the continent to establish and grow their online presence. We provide a seamless and integrated digital commerce experience, from payment processing and shipping logistics to data analytics and customer support.</p>
          <button className="text-white mt-5 py-1 px-7 border font-medium rounded-3xl border-white w-[10rem] text-cent">More</button>
       
       </div>
       
       
     </div>
        
      </div> */}
      
     </div>
    </div>
    
  );
};

export default BannerComponent;
