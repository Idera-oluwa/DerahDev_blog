import React, {useState, useEffect} from 'react'
import {FaCode, FaSearch} from 'react-icons/fa'
import {getCategories} from '../services'

const NavBig = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
       getCategories().then((newCategories)=>setCategories(newCategories))
    }, [])
  return (
    <div className='flex flex-row justify-between items-center'>
    <div className='flex flex-row items-center gap-[0.25rem] cursor-pointer'>
    <h1 className='text-[2.5rem] text-[#f83b66] font-bold'>DerahDev</h1>
    <FaCode className='text-[2.5rem] text-[#f83b66] '/>
    </div>
     <div className='flex flex-row gap-[1.5rem]'>
     {categories.map((category)=>{
         return(
             <p key={category.slug} className='cursor-pointer opacity-70 text-[0.9rem] hover:text-[#f83b66]'>{category.name}</p>
         )
     })}
 </div>
    <FaSearch className='cursor-pointer'/>
  </div>
  )
}

export default NavBig
