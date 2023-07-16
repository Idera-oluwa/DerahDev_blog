import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link';
import { getRecentPosts,getSimilarPosts } from '../services';

const RelatedPosts = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([])
    console.log(categories)

    useEffect(() => {
      const fetchData = async () => {
        let result;
        result = await getSimilarPosts(categories,slug);
        console.log(result)
      };
    
      fetchData();
    }, [categories, slug]);
      
  return (
    <div className='w-[100vw] bg-[#858e94] py-[4rem]'>
        <div className='w-[85vw] mx-auto'>
        <h1 className='text-[2.5rem] text-center font-extrabold text-[white]'>You Might Also Like</h1>
        <div className='grid grid-cols-fluid gap-[2.5rem]'>
        {/* {relatedPosts.map((post)=>{
        return(
          <div>
            <img src={post.featuredImage.url} className='w-100% h-[21.5rem]' alt=''/>
            <button className='bg-black text-white p-[0.3rem] text-[0.7rem] font-semibold mt-[1.2rem]'>{post.categories[0].name}</button>
            <Link href={`/post/${post.slug}`}><h1 className='text-[1.65rem] leading-[1.8rem] font-bold text-[#2a2d38] mt-[0.8rem]'>{post.title}</h1></Link>
            <p className='mt-[0.5rem] text-[0.8rem] text-[#909ba5]'>by <span className='text-black font-bold'>{post.node.authur.name}</span> - {moment(post.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        )
        })} */}
      </div>
        </div>
    </div>
  )
}

export default RelatedPosts
