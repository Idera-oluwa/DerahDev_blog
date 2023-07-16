import React from 'react'
import NavBig from './NavBig'
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
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
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
    <div className='w-[85vw] mx-auto mt-[2.5rem] mb-[5rem]'>
    <NavBig/>
    <div className='flex justify-center'><button className='bg-black text-white py-[0.3rem] px-[1rem] text-[0.95rem] font-semibold mt-[2rem] mx-auto'>Career Growth</button></div>
    <h1 className='text-[2.7rem] text-center font-bold text-[#2a2d38] mt-[1rem] w-[800px] mx-auto leading-[3.2rem]'>{post.title}</h1>
    <p className='mt-[1.5rem] text-[0.9rem] text-[#909ba5] text-center'>by <span className='text-black font-bold'>{post.authur.name}</span> - {moment(post.createdAt).format('MMM DD, YYYY')}</p>
    <img src={post.featuredImage.url} alt={post.title}
    className='w-[100%] mt-[3rem] h-[90vh]'/>
    <div className='w-[70%] mx-[auto] mt-[3rem]'>
    {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
    </div>
    <div className='flex flex-row mt-[5rem] gap-[1rem] w-[1000px]'>
    <div className='w-[30%]'><img src={post.authur.photo.url} alt={post.authur.name}
    className='w-[7rem] h-[7rem] rounded-full'/> </div>
    <div>
        <p className='text-[0.8rem]'>Written By:</p>
        <h1 className='font-bold text-[1.2rem]'>{post.authur.name}</h1>
        <p className='w-[80%] text-[0.9rem] mt-[1rem] opacity-[90%]'>Idera is a content writer for DerahDev and a Certified Life Coach. With a background in spa and wellness, she's constantly on the lookout for natural, effective ways that help with one's overall well-being.</p>
         <FaLinkedinIn className='mt-[1rem]'/>
    </div>
    </div>
    </div>
  )
}

export default PostDetail
