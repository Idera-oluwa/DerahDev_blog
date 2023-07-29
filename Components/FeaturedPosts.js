import React, {useState, useEffect, useRef} from 'react'
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import {getFeaturedPosts} from '../services'
import moment from 'moment';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
    const sliderRef = useRef();
    useEffect(() => {
        getFeaturedPosts().then((result) => {
          setFeaturedPosts(result);
          setDataLoaded(true);
        });
      }, []);
  return (
    <div>
      <div className='mt-[3rem] md:mt-[4rem] w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto'>
        <h1 className='text-[1.9rem] md:text-[2.9rem] text-center font-extrabold text-[#2a2d38]'>DerahDev Blog</h1>
        <p className='text-[0.95rem] md:text-[1.25rem] text-center font-bold text-[#2a2d38] mt-[1.5rem] md:mt-[3.5rem]'>Stay up-to-date with the latest industry insights, as we explore software engineering best practices, 
          design patterns, and architectural principles that empower you to build scalable, maintainable, and
           high-performing applications.</p>
           <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 2500, disableOnInteraction: false,}}
      pagination={{ clickable: true }}
      onSwiper={it => (sliderRef.current = it)}
      onSlideChange={() => console.log('slide change')}
      effect="fade"
      fadeEffect= {{ crossFade: true }}
    >
      {dataLoaded && featuredPosts.map((post)=>{
        return(
          <SwiperSlide className='w-full mx-auto'>
      <div className='grid md:grid-cols-3 mt-[4.5rem] mb-[4.5rem] relative'>
      <img src={post.featuredImage.url}
            className='md:col-span-2 w-[100%] md:w-[90%] h-[14rem] md:h-[25rem]'
            alt={post.title}/>
           <div className=' md:col-span-1 flex flex-col justify-center mt-[2rem] md:mt-[0rem]'>
              <button className='w-[8.2rem] h-[2.5rem] bg-[#005cff] text-center mr-auto text-white text-[0.85rem] font-bold'>FEATURED</button>
              <Link href={`/post/${post.slug}`}><h1 className='font-bold text-[2.3rem] leading-[2.9rem] mt-[0.5rem] cursor-pointer'>{post.title}</h1></Link>
            <p className='mt-[0.5rem] text-[0.8rem] text-[#909ba5]'>By <span className='text-[#005cff] font-bold'>{post.authur.name}</span> | {moment(post.createdAt).format('MMM DD, YYYY')}</p>
            </div>
            <div className='absolute left-0 hidden right-0 top-[50%] md:flex justify-between'>
              <FiArrowLeftCircle className='text-[#909ba5] text-[1.6rem] hover:text-[#005cff] cursor-pointer'
               onClick={() => sliderRef.current?.slidePrev()}
              />
              <FiArrowRightCircle className='text-[#909ba5] text-[1.6rem] hover:text-[#005cff] cursor-pointer'
               onClick={() => sliderRef.current?.slideNext()}
              />
            </div>
           </div>
      </SwiperSlide>
        )
      })}
    </Swiper>
      </div>
    </div>
  )
}

export default FeaturedPosts
