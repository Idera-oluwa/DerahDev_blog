import React, {useState, useEffect} from 'react'
import {FaCode, FaSearch} from 'react-icons/fa'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {getCategories} from '../services'
import Link from 'next/link';

const NavBig = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       getCategories().then((newCategories)=>setCategories(newCategories))
    }, [])
  return (
   <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto'>
     <div className='flex flex-row justify-between items-center'>
    <div className='flex flex-row items-center gap-[0.25rem] cursor-pointer'>
    <Link href='/'><h1 className='text-[1.6rem] md:text-[2.5rem] text-[#f83b66] font-bold'>DerahDev</h1></Link>
    <FaCode className='text-[1.6rem] md:text-[2.5rem]  text-[#f83b66] '/>
    </div>
     <div className='hidden lg:flex flex-row gap-[1.5rem]'>
     {categories.map((category)=>{
         return(
          <Link key={category.slug} href={`/category/${category.slug}`}>
             <p key={category.slug} className='cursor-pointer opacity-70 text-[0.9rem] hover:text-[#f83b66]'>{category.name}</p>
         </Link>
         )
     })}
 </div>
 <div className='flex flex-row lg:hidden cursor-pointer'><HiOutlineMenuAlt1 className='text-[1.5rem] hover:text-[#f83b66] opacity-[70%]'/></div>
    <FaSearch className='cursor-pointer hidden lg:flex'/>
  </div>
   </div>
  )
}

export default NavBig
