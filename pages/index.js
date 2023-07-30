import Head from 'next/head'
import React from 'react';
import Hero from './Hero'
export default function Home() {
  return (
    <>
  <div>
  <Head>
        <title>Derahdev Blog</title>
        <Head>
      <meta property="og:title" content='Derahdev blog'/>
        <meta property="og:description" content='An exclusive website' />
        <meta property="og:image" content='Images/dev.jpg' />
        <meta property="og:type" content="article" />
        <link rel="icon" href="Images/dev.jpg" />
        {/* <meta property="og:url" content="URL of the page you're sharing" /> */}
      </Head>
      </Head>
    <Hero/>
  </div>
    </>
  )
}
