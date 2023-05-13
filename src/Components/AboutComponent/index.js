import React from 'react'
import heroimg from "../../assets/hero1.jpg";
const AboutComponent = () => {
  return (
    <div className=' md:px-[8rem] px-[0rem] md:mt-20  mt-0 flex  md:flex-row flex-col'>
        <div className='md:w-[60%] w-full' >
            <img src={heroimg} alt=''/>
        </div>
        <div className='bg-[#D2DFEC] md:w-[40%] w-full md:px-10 px-5  md:pt-[10rem] pt-[3rem]'>
          <h1 className='text-[#172733] font-medium text-3xl '>About Us</h1>
          <p className='mt-5'>Sabi is Africa’s leading provider of enabling infrastructure powering the distribution of goods and services.</p>
          <p className='mt-5'>Our platform enables and empowers a broad ecosystem of users, allowing merchants, importers, exporters, distributors, and manufacturers to expand their capabilities and grow their businesses using Sabi’s technology rails.</p>
          <button className="text-[#172733] mt-5 py-1 px-7 border font-medium rounded-3xl border-[#172733] w-[8rem] text-cent">MORE</button>
       
        </div>
      
    </div>
  )
}

export default AboutComponent
