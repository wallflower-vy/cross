import React from 'react'
import {FaCube }from 'react-icons/fa'

const Financial = () => {
  return (
    <div className='px-[8rem] mt-[8rem] '>
      <h1 className='text-[#00085A] font-medium text-3xl '>Financial Services</h1>
      <p className='mt-5'>Sabi is Africa’s leading provider of enabling infrastructure powering the distribution of goods and services.</p>
          <p className='mt-5'>Our platform enables and empowers a broad ecosystem of users, allowing merchants, importers, exporters, distributors, and manufacturers to expand their capabilities and grow their businesses using Sabi’s technology rails.</p>
          <p className='mt-5'>Sabi is Africa’s leading provider of enabling infrastructure powering the distribution of goods and services.</p>

          <div className='flex mt-10 gap-2'>
            <div className='bg-[#00085A] px-16 py-12'> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>Credit</p>
                <p className='text-white mt-5  text-sm '>Sabi has brought innovative fintech solutions to market that help solve fundamental challenges in liquidity provision for merchants, importers, and exporters. Working with financing partners, we provide optimized liquidity in close cooperation with our customers and offer customized solutions by effectively utilizing data, risk metrics, and technology.</p>
                <p className='text-white mt-5 text-sm  '>Our range of credit offerings include commodity finance, inventory finance, letter of credit finance. </p>
            </div>
            <div className='bg-[#00085A]  px-16 py-12'> 
                <FaCube className='text-3xl text-white'/>
                <p className='text-white mt-3 font-medium text-xl'>Credit</p>
                <p className='text-white mt-5  text-sm '>Sabi has brought innovative fintech solutions to market that help solve fundamental challenges in liquidity provision for merchants, importers, and exporters. Working with financing partners, we provide optimized liquidity in close cooperation with our customers and offer customized solutions by effectively utilizing data, risk metrics, and technology.</p>
                <p className='text-white mt-5  text-sm '>Our range of credit offerings include commodity finance, inventory finance, letter of credit finance. </p>
            </div>

          </div>
    </div>
  )
}

export default Financial
