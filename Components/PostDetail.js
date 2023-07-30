import Head from 'next/head'
import React,{useState, useEffect} from 'react'
import moment from 'moment'
import { FaLinkedinIn,FaInstagram,FaTwitter,FaLink,FaWhatsapp } from 'react-icons/fa'


const PostDetail = ({post}) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
            case 'heading-one':
            return <h1 key={index} className="text-3xl text-center font-bold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
            case 'heading-two':
            return <h2 key={index} className="text-2xl text-center font-bold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8 text-[1rem]">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'heading-five':
            return <h5 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
            case 'heading-six':
            return <h6 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>;
            case 'image':
            return (
              <img className='w-full h-[9cm] lg:h-[11cm]'
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
    
  return (
    <div className='mt-[2.5rem] mb-[5rem]'>
       <Head>
      <meta property="og:title" content='Derahdev blog'/>
        <meta property="og:description" content={post.title} />
        <meta property="og:image" content={post.featuredImage.url} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content="URL of the page you're sharing" /> */}
      </Head>
   <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto'>
   <div className='flex justify-center'><button className='bg-black text-white py-[0.3rem] px-[1rem] text-[0.75rem] lg:text-[0.95rem] font-semibold mt-[2rem] mx-auto'>{post.categories[0].name}</button></div>
    <h1 className='text-[1.7rem] lg:text-[2.7rem] text-center font-bold text-[#2a2d38] mt-[1rem] w-[100%] lg:w-[800px] mx-auto leading-[1.7rem] lg:leading-[3.2rem]'>{post.title}</h1>
    <p className='mt-[1.1rem] md:mt-[1.5rem] text-[0.9rem] text-[#909ba5] text-center'>by <span className='text-black font-bold'>{post.authur.name}</span> - {moment(post.createdAt).format('MMM DD, YYYY')}</p>
    <img src={post.featuredImage.url} alt={post.title}
    className='min-w-[100%] mt-[2rem] md:mt-[3rem] h-[17rem] md:h-[90vh]'/>
    <div className='w-full lg:w-[70%] mx-[auto] mt-[3rem]'>
    {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
    </div>
    <div className='flex flex-col md:flex-row mt-[5rem] gap-[1rem] w-[90%] md:w-[100%] lg:w-[1000px] mx-auto'>
    <div className='w-full md:w-[80%] lg:w-[30%]'><img src={post.authur.photo.url} alt={post.authur.name}
    className='w-[7rem] h-[7rem] rounded-full mr-auto ml-auto md:ml-0'/> </div>
    <div>
        <p className='text-[0.8rem] text-center md:text-left'>Written By:</p>
        <h1 className='font-bold text-[1.2rem] text-center md:text-left mx-auto'>{post.authur.name}</h1>
        <p className='w-[100%] md:w-[70%] text-[0.9rem] mt-[1rem] text-center md:text-left mr-auto ml-auto md:ml-0 opacity-[90%]'>{post.authur.bio}</p>
        <div className='flex flex-row gap-[1rem] justify-center md:justify-start w-[50%] ml-auto mr-auto md:ml-0'>
        <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='mt-[1rem]'/></a>
        <a href='https://www.instagram.com/derah.dev' target="_blank" rel="noreferrer"><FaInstagram className='mt-[1rem]'/></a>
        <a href='https://www.twitter.com/derah_dev' target="_blank" rel="noreferrer"><FaTwitter className='mt-[1rem]'/></a>
        <a href='https://isa-zainab.netlify.app' target="_blank" rel="noreferrer"><FaLink className='mt-[1rem]'/></a>
        <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><FaWhatsapp className='mt-[1rem]'/></a>
        </div>
    </div>
    </div>
   </div>
    </div>
  )
}

export default PostDetail
