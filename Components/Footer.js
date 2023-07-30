import React from 'react'
import { FaLinkedinIn,FaInstagram,FaTwitter,FaLink,FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='w-[85vw] mx-auto py-[2rem]'>
    <p className='text-[#bdbdbd] text-center text-[0.9rem]'>Copyright © {new Date().getFullYear()} <span className='text-white'>DerahDev</span> All rights reserved</p>
    <div className='flex flex-row gap-[1rem] justify-center w-[50%] ml-auto mr-auto text-white'>
        <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='mt-[1rem]'/></a>
        <a href='https://www.instagram.com/derah.dev' target="_blank" rel="noreferrer"><FaInstagram className='mt-[1rem]'/></a>
        <a href='https://www.twitter.com/derah_dev' target="_blank" rel="noreferrer"><FaTwitter className='mt-[1rem]'/></a>
        <a href='https://isa-zainab.netlify.app' target="_blank" rel="noreferrer"><FaLink className='mt-[1rem]'/></a>
        <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><FaWhatsapp className='mt-[1rem]'/></a>
        </div>
    </div>
    </div>
  )
}

export default Footer
