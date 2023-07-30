"use client"
import React, {useState} from 'react';
import FeaturedPosts from '../Components/FeaturedPosts';
import RecentPosts from '../Components/RecentPosts';
import Careerdev from '../Components/Careerdev';
import Footer from '../Components/Footer';

const Hero = () => {
  
    return(
        <div>
    <FeaturedPosts/>
    <RecentPosts/>
    <Careerdev/>
    <Footer/>
        </div>
    )
}

export default Hero
