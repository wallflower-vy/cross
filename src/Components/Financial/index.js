import React from 'react'
import {FaCube }from 'react-icons/fa'

const Financial = () => {
  return (
    <div className='md:px-[8rem] px-[1rem] md:mt-[8rem] mt-[5rem] '>
      <h1 className='text-[#172733] font-medium text-3xl '>Financial Services</h1>
      <p className='mt-5'>We understand the unique challenges and opportunities of the African market and are dedicated to supporting local businesses and entrepreneurs. </p>
          <p className='mt-5'>OBy partnering with us, businesses can leverage our expertise, technology, and network to grow their sales, reach new customers, and expand their operations across the continent and beyond.</p>
          <p className='mt-5'>Our platform provides businesses with the infrastructure, tools, and resources they need to establish and grow their online presence, connect with customers, and compete in the global market.</p>

          <div className='flex md:flex-row flex-col mt-10 gap-2'>
            <div className='bg-[#00085A]  px-16 py-12 '> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>Payment and Shipping </p>
                <p className='text-white mt-5  text-sm '>We provide secure and reliable payment processing services that enable businesses to accept a variety of payment methods, including credit cards, mobile money, and bank transfers..</p>
                <p className='text-white mt-5 text-sm  '>We offer a range of shipping and logistics solutions that make it easy for businesses to manage their orders, track their shipments, and deliver their products to customers across Africa and beyond.</p>
            </div>
            <div className='bg-[#00085A]  px-16 py-12 '> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>E-commerce and Data analytics</p>
                <p className='text-white mt-5  text-sm '>We provide comprehensive data analytics tools that enable businesses to track their sales, understand customer behavior, and optimize their operations for maximum efficiency and profitability.</p>
                <p className='text-white mt-5  text-sm '>Our e-commerce platform provides businesses with a customizable storefront that enables them to showcase their products and services, manage their inventory, and process orders in real-time. </p>
            </div>

          </div>
          <div className='flex md:flex-row flex-col mt-10 gap-2 '>
            <div className='bg-[#00085A] px-16 py-12 '> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>Customer support</p>
                <p className='text-white mt-5  text-sm '>We offer dedicated customer support services that are available 24/7 to help businesses resolve any issues or concerns they may have and provide guidance and advice on best practices for digital commerce.

</p>
                <p className='text-white mt-5 text-sm  '>ur aim is to provide a comprehensive digital commerce infrastructure that empowers businesses across Africa to succeed in the online marketplace. We offer a range of services and solutions that are designed to meet the needs of businesses of all sizes and types, from small startups to large enterprises. </p>
            </div>
            <div className='bg-[#00085A]  px-16 py-12 '> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>Scope</p>
                <p className='text-white mt-5  text-sm '>At Cross, we are committed to helping businesses across Africa succeed in the digital marketplace. Our services are designed to be flexible, scalable, and affordable, making them accessible to businesses of all sizes and types. Join us today and discover the power of digital commerce in Africa.</p>
                <p className='text-white mt-5  text-sm '>Our range of credit offerings include commodity finance, inventory finance, letter of credit finance. </p>
            </div>

          </div>
    </div>
  )
}

export default Financial
