import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link'
import {getPosts} from '../services';

const RecentPosts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
    });
  }, []);
  console.log(posts)

  return (
    <div className='mt-[4rem] w-[85vw] mx-auto mb-[5rem]'>
      <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-extrabold text-[#2a2d38]'>Latest Posts</h1>
      <div className='w-[3rem] h-[0.15rem] bg-black mb-[1.8rem] md:mb-[2.3rem] mx-auto mt-[0.9rem] md:mt-[1.3rem]'></div>
      <div className='grid grid-cols-fluid gap-[2.5rem]'>
        {posts.map((post)=>{
        return(
          <div key={post.node.slug} className='w-full mx-auto'>
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

export default RecentPosts

export async function getStaticProps(){
  const posts =(await getPosts()) || [];

return{ 
  props:{posts}
}
}
