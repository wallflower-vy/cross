import React from 'react'
import logo from '../../assets/cross logo green.png'
import {FaInstagram, FaLinkedinIn ,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='py-[4rem] px-[8rem]  flex justify-between items-center '>
            <div className='w-[25%] '>
                <img src={logo} alt ='logo' className='w-[50%]'/>
                <p className='text-xm'>© 2023 Sabi. All rights reserved. Cookies privacy policy</p>
            </div>
            <button className='text-[#00085A]'>owoadevic@gmail.com</button>
            <div className='flex gap-5 text-2xl text-[#00085A] cursor-pointer'>
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
    </div>
  )
}

export default Footer;