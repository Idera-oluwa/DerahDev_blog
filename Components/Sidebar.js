import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import {FaCode, FaSearch, FaTimes} from 'react-icons/fa'
import {getCategories} from '../services'

const Sidebar = ({menuOpen,closeMenu}) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories().then((newCategories)=>setCategories(newCategories))
     }, [])

  return (
   <div className={`fixed lg:hidden top-0 z-[10000] w-full ${menuOpen ? `h-[100vh]` : `h-0`} bg-[#000000cc]`}>
   <div className={`w-[90vw] md:w-[75vw] lg:w-[83vw] transition-all ease-in-out duration-500 container transform -translate-x-full ${menuOpen && `transform translate-x-0`}`}>
    <div className='w-[7cm] md:w-[12cm] h-[100vh] bg-white px-[0.5cm] pt-[0.3cm]'>
    <div className='flex flex-row items-center justify-between'>
    <div className='flex flex-row items-center gap-[0.25rem] cursor-pointer mt-[2rem]'>
    <Link href='/'><h1 className='text-[1.6rem] md:text-[2.5rem] text-[#f83b66] font-bold'>DerahDev</h1></Link>
    <FaCode className='text-[1.6rem] md:text-[2.5rem] text-[#f83b66] '/>
    </div>
    <FaTimes className='cursor-pointer' onClick={closeMenu}/>
    </div>
   <div className='mt-[2rem] ml-[1rem]'>
   <h1 className='text-[1.3rem] font-bold'>Menu</h1>
    <div className='flex flex-col gap-[0.7rem] mt-[1rem]'>
     {categories.map((category)=>{
         return(
          <Link key={category.slug} href={`/category/${category.slug}`}>
          <p key={category.slug} className='cursor-pointer text-[0.9rem] hover:text-[#f83b66]' onClick={closeMenu}>{category.name}</p>
      </Link>
         )
     })}
 </div>
   </div>
   </div>
   </div>
   </div>
  )
}

export default Sidebar
