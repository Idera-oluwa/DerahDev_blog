import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link'
import {getPosts} from '../services';

const Careerdev = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // getPosts().then((result) => {
    //   setPosts(result);
    const fetchPost = async () =>{
    const data = await getPosts();
    const result = data.filter((datas)=>datas.node.categories[0].name==='Career Development')
    setPosts(result);
    console.log('yy',result)
    }
fetchPost()
    },[]);
  
  return (
    <div className='mt-[4rem] w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto mb-[5rem]'>
      <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-extrabold text-[#2a2d38]'>Career Development</h1>
      <div className='w-[3rem] h-[0.15rem] bg-black mb-[1.8rem] md:mb-[2.3rem] mx-auto mt-[0.9rem] md:mt-[1.3rem]'></div>
      <div className='grid grid-cols-fluid gap-[2.5rem] md:gap-[1.5rem] '>
        {posts.map((post)=>{
        return(
          <div key={post.node.slug} className='container mx-auto'>
            <img src={post.node.featuredImage.url} className='min-w-[100%] max-w-[100%] h-[16rem] md:h-[21.5rem]'/>
            <button className='bg-black text-white p-[0.3rem] text-[0.7rem] font-semibold mt-[1.2rem]'>{post.node.categories[0].name}</button>
            <Link href={`/post/${post.node.slug}`}><h1 className='text-[1.5rem] md:text-[1.65rem]  leading-[1.8rem] font-bold text-[#2a2d38] mt-[0.8rem]'>{post.node.title}</h1></Link>
            <p className='mt-[0.5rem] text-[0.8rem] text-[#909ba5]'>by <span className='text-black font-bold'>{post.node.authur.name}</span> - {moment(post.node.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Careerdev

export async function getStaticProps(){
  const posts =(await getPosts()) || [];

return{ 
  props:{posts}
}
}
