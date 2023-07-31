import Head from 'next/head'
import React from 'react'
import {getPosts, getPostDetails} from '../../services'
import PostDetail from '../../Components/PostDetail';
import RelatedPosts from '../../Components/RelatedPosts';
import Footer from '../../Components/Footer';
import CommentsForm from '../../Components/CommentsForm';
import Comments from '../../Components/Comments';
import {useRouter} from 'next/router'
import {NextSeo} from 'next-seo';

const postDetails = ({post}) => {
    const router = useRouter();
    if (router.isFallback){
      return <h1>My name is Zainab</h1>
    }
  return (
    <div>
      <NextSeo
            title={post.node.title}
            description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
            canonical="www.example.com/next-seo-blog"
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2022-06-21T23:04:13Z',
                    modifiedTime: '2022-01-21T18:04:43Z',
                    authors: [
                        'https://www.example.com/authors/@firstnameA-lastnameA',
                        'https://www.example.com/authors/@firstnameB-lastnameB',
                    ],
                    tags: ['Tag A', 'Tag B', 'Tag C'],
                },
                url: 'www.example.com/next-seo-blog',
                images: {
                    url: post.featuredImage.url ,
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                },
                site_name: 'Next Blog'
            }}
        />
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