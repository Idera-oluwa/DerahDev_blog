import React,{useState, useEffect} from 'react'
import NavBig from './NavBig'
import NavSmall from './NavSmall'
import moment from 'moment'
import { FaLinkedinIn } from 'react-icons/fa'


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
    <NavBig/>
    <NavSmall/>
   <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-auto'>
   <div className='flex justify-center'><button className='bg-black text-white py-[0.3rem] px-[1rem] text-[0.75rem] lg:text-[0.95rem] font-semibold mt-[2rem] mx-auto'>{post.categories[0].name}</button></div>
    <h1 className='text-[1.7rem] lg:text-[2.7rem] text-center font-bold text-[#2a2d38] mt-[1rem] w-[100%] lg:w-[800px] mx-auto leading-[1.7rem] lg:leading-[3.2rem]'>{post.title}</h1>
    <p className='mt-[1.1rem] md:mt-[1.5rem] text-[0.9rem] text-[#909ba5] text-center'>by <span className='text-black font-bold'>{post.authur.name}</span> - {moment(post.createdAt).format('MMM DD, YYYY')}</p>
    <img src={post.featuredImage.url} alt={post.title}
    className='w-[100%] mt-[2rem] md:mt-[3rem] h-[17rem] md:h-[90vh]'/>
    <div className='w-full lg:w-[70%] mx-[auto] mt-[3rem]'>
    {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
    </div>
    <div className='flex flex-col md:flex-row mt-[5rem] gap-[1rem] w-[90%] md:w-[100%] lg:w-[1000px]'>
    <div className='w-full md:w-[80%] lg:w-[30%]'><img src={post.authur.photo.url} alt={post.authur.name}
    className='w-[7rem] h-[7rem] rounded-full mr-auto ml-auto md:ml-0'/> </div>
    <div>
        <p className='text-[0.8rem] text-center md:text-left'>Written By:</p>
        <h1 className='font-bold text-[1.2rem] text-center md:text-left mx-auto'>{post.authur.name}</h1>
        <p className='w-[80%] md:w-[70%] text-[0.9rem] mt-[1rem] text-center md:text-left mr-auto ml-auto md:ml-0 opacity-[90%]'>{post.authur.bio}</p>
        <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='mt-[1rem] mr-auto ml-auto md:ml-0'/></a>
    </div>
    </div>
   </div>
    </div>
  )
}

export default PostDetail
