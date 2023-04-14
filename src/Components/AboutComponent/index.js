import React from 'react'
import heroimg from "../../assets/hero1.jpg";
const AboutComponent = () => {
  return (
    <div className=' px-[8rem] mt-20 flex '>
        <div className='w-[60%] ' >
            <img src={heroimg} alt=''/>
        </div>
        <div className='bg-[#D1DEEB] w-[40%] px-10 pt-[10rem]'>
          <h1 className='text-[#00085A] font-medium text-3xl '>About Us</h1>
          <p className='mt-5'>Sabi is Africa’s leading provider of enabling infrastructure powering the distribution of goods and services.</p>
          <p className='mt-5'>Our platform enables and empowers a broad ecosystem of users, allowing merchants, importers, exporters, distributors, and manufacturers to expand their capabilities and grow their businesses using Sabi’s technology rails.</p>
          <button className="text-[#00085A] mt-5 py-1 px-7 border font-medium rounded-3xl border-[#00085A] w-[8rem] text-cent">MORE</button>
       
        </div>
      
    </div>
  )
}

export default AboutComponent
