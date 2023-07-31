import Head from 'next/head'
import React from 'react';
import Hero from './Hero'
import {NextSeo} from 'next-seo';
export default function Home() {
  return (
    <>
  <div>
  <Head>
        <title>Derahdev Blog</title>
      </Head>
      <NextSeo
            title='Derah Blog'
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
                    url: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg' ,
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                },
                site_name: 'Next Blog'
            }}
        />
    <Hero/>
  </div>
    </>
  )
}
