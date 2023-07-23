"use client"
import React from 'react';
import FeaturedPosts from '../Components/FeaturedPosts';
import NavBig from '../Components/NavBig';
import RecentPosts from '../Components/RecentPosts';
import Footer from '../Components/Footer';
import NavSmall from '../Components/NavSmall';

const Hero = () => {
  
    return(
        <div className='mt-[2.5rem]'>
    <NavBig/>
    <NavSmall/>
    <FeaturedPosts/>
    <RecentPosts/>
    <Footer/>
        </div>
    )
}

export default Hero
