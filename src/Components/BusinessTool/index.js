import React from "react";
import market2 from "../../assets/2.jpg";
// import woamn1 from '../../assets/woman.jpg'
// import woamn2 from '../../assets/woamn 2.png'

const BusinessTool = () => {
  return (
    <div className='md:px-[8rem] px-[0rem] md:mt-[12rem] mt-[6rem] flex md:flex-row  gap-10 flex-col-reverse justify-between '>
      <div className='md:w-[40%] md:px-0 px-5'>
        <h1 className='text-[#00085A] font-medium text-3xl md:mt-0 mt-5'>Our Mission</h1>
        <p className='mt-5'>
        At Cross, we are committed to supporting the growth and development of digital commerce in Africa. Our platform offers a robust infrastructure that enables businesses to compete in the global market and connect with customers across the continent.  We partner with local businesses and entrepreneurs to showcase their products and services on our platform and provide them with the tools and resources they need to succeed.We are dedicated to providing the best customer experience possible. 
        </p>
        <p className='mt-5'>
        At Cross, we are committed to supporting the growth and development of digital commerce in Africa. Our platform offers a robust infrastructure that enables businesses to compete in the global market and connect with customers across the continent.  We partner with local businesses and entrepreneurs to showcase their products and services on our platform and provide them with the tools and resources they need to succeed.We are dedicated to providing the best customer experience possible. 
        </p>
       

       
      </div>
      <div className=' md:w-[60%] h-full w-full'>
       
        <div className=''>
          <img src={market2} alt='maize' />
        </div>
      
      </div>
    </div>
  );
};

export default BusinessTool;
