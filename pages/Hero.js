"use client"
import React from 'react';
import FeaturedPosts from '../Components/FeaturedPosts';
import NavBig from '../Components/NavBig';
import RecentPosts from '../Components/RecentPosts';

const Hero = () => {
  
    return(
        <div className='w-[85vw] mx-auto mt-[2.5rem]'>
    <NavBig/>
    <FeaturedPosts/>
    <RecentPosts/>
        </div>
    )
}

export default Hero
