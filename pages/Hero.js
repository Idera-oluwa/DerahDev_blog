"use client"
import React, {useState} from 'react';
import FeaturedPosts from '../Components/FeaturedPosts';
import RecentPosts from '../Components/RecentPosts';
import Footer from '../Components/Footer';

const Hero = () => {
  
    return(
        <div>
    <FeaturedPosts/>
    <RecentPosts/>
    <Footer/>
        </div>
    )
}

export default Hero
