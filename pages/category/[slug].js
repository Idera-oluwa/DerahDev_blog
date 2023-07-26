import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link'
import NavBig from '../../Components/NavBig';
import NavSmall from '../../Components/NavSmall';
import Footer from '../../Components/Footer';

import { getCategories, getCategoryPost } from '../../services';

const CategoryPost = ({posts}) => {
  const [category, setCategory] = useState('')
  console.log(posts)
    const router = useRouter();

    if (router.isFallback) {
      return <h1>Fall Back</h1>;
    }
  const categoryItem = () =>{
    posts[0].node.categories.map((item)=>{
      setCategory(item.name)
    })
  }
  useEffect(()=>{
categoryItem()
  },[])

  return (
    <div className='mt-[2.8rem]'>
      <NavBig/>
    <NavSmall/>
    <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto'>
    <h1 className='text-center text-[1.5rem] md:text-[2.5rem] text-[#2a2d38] mt-[2rem]'>Category: <span className='font-bold'>{category}</span></h1>
    <p className='text-center mt-[0.5rem] text-[0.9rem]'>{posts.length} articles</p>
    <p className='text-center w-[100%] md:w-[35rem] mx-auto mt-[1.5rem]'>Explore how to find your soul’s purpose and tap into the power of manifestation. 
      Discover stories from top experts: Isa Zainab, Azeez Umar Faruk and others</p>
      <div className='grid grid-cols-fluid gap-[2.5rem] mt-[3rem] mb-[3rem]'>
        {posts.map((post)=>{
        return(
          <div>
            <img src={post.node.featuredImage.url} className='min-w-[100%] h-[16rem] md:h-[21.5rem]'/>
            <button className='bg-black text-white p-[0.3rem] text-[0.7rem] font-semibold mt-[1.2rem]'>{post.node.categories[0].name}</button>
            <Link href={`/post/${post.node.slug}`}><h1 className='text-[1.5rem] md:text-[1.65rem]   leading-[1.8rem] font-bold text-[#2a2d38] mt-[0.8rem]'>{post.node.title}</h1></Link>
            <p className='mt-[0.5rem] text-[0.8rem] text-[#909ba5]'>by <span className='text-black font-bold'>{post.node.authur.name}</span> - {moment(post.node.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        )
        })}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CategoryPost

export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);
  
    return {
      props: { posts },
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const categories = await getCategories();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: true,
    };
  }
