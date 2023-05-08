import React from 'react'
import logo from '../../assets/cross logo green.png'
import {FaInstagram, FaLinkedinIn ,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='md:py-[4rem] py-[1rem] md:px-[8rem]  px-[1rem] flex md:flex-row flex-col justify-between md:items-center items-start'>
            <div className='md:w-[25%] w-full '>
                <img src={logo} alt ='logo' className='w-[50%]'/>
                <p className='text-xm'>© 2023 Sabi. All rights reserved. Cookies privacy policy</p>
            </div>
            <button className='text-[#003E37]'>owoadevic@gmail.com</button>
            <div className='flex gap-5 text-2xl text-[#003E37] cursor-pointer'>
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
    </div>
  )
}

export default Footer;