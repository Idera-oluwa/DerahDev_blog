import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='w-[85vw] mx-auto py-[2rem]'>
    <p className='text-[#bdbdbd] text-center text-[0.9rem]'>Copyright © {new Date().getFullYear()} <span className='text-white'>DerahDev</span> All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
