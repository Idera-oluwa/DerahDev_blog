import React, {useState, useEffect} from 'react'
import {FaCode, FaSearch} from 'react-icons/fa'
import {getCategories} from '../services'
import Link from 'next/link';

const NavBig = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       getCategories().then((newCategories)=>setCategories(newCategories))
    }, [])
  return (
   <div className='w-[85vw] mx-auto'>
     <div className='flex flex-row justify-between items-center'>
    <div className='flex flex-row items-center gap-[0.25rem] cursor-pointer'>
    <Link href='/'><h1 className='text-[2.5rem] text-[#f83b66] font-bold'>DerahDev</h1></Link>
    <FaCode className='text-[2.5rem] text-[#f83b66] '/>
    </div>
     <div className='flex flex-row gap-[1.5rem]'>
     {categories.map((category)=>{
         return(
          <Link key={category.slug} href={`/category/${category.slug}`}>
             <p key={category.slug} className='cursor-pointer opacity-70 text-[0.9rem] hover:text-[#f83b66]'>{category.name}</p>
         </Link>
         )
     })}
 </div>
    <FaSearch className='cursor-pointer'/>
  </div>
   </div>
  )
}

export default NavBig
