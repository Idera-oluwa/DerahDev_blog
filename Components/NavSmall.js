import React, {useState, useEffect} from 'react'
import {FaCode, FaSearch} from 'react-icons/fa'
import {getCategories} from '../services'
import Link from 'next/link';

const NavSmall = () => {
    const [categories, setCategories] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
       getCategories().then((newCategories)=>setCategories(newCategories))
    }, [])
    const controlNavbar = () => {
        if (window.scrollY > window.innerHeight ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  return (
    <div className='bg-white shadow-md fixed top-0 w-[100vw] mx-auto z-[1000]'>
        {show && <div className='flex flex-row justify-between w-[85vw] mx-auto items-center'>
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
  </div>}
    </div>
  )
}

export default NavSmall
