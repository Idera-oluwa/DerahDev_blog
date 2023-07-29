import React from 'react'
import {getPosts, getPostDetails} from '../../services'
import PostDetail from '../../Components/PostDetail';
import RelatedPosts from '../../Components/RelatedPosts';
import Footer from '../../Components/Footer';
import CommentsForm from '../../Components/CommentsForm';
import Comments from '../../Components/Comments';
import {useRouter} from 'next/router'

const postDetails = ({post}) => {
    const router = useRouter();
    if (router.isFallback){
      return <h1>My name is Zainab</h1>
    }
  return (
    <div>
      <PostDetail post={post}/>
      <CommentsForm slug={post.slug}/>
      <Comments slug={post.slug}/>
      <RelatedPosts slug={post.slug} categories={post.categories.map((category)=>category.slug)}/>
      <Footer/>
    </div>
  )
}

export default postDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }
  

  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }