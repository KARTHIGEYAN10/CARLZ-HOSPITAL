import React, { useState,useEffect} from 'react'
import Navbar from '../container/navbar'
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import logovideo from "../assets/logovideo.mp4";
import a from "../assets/1.jpeg";
import b from "../assets/2.jpeg"
import c from "../assets/3.jpeg"
import d from "../assets/4.jpeg"
import e from "../assets/5.jpeg"
import f from "../assets/6.jpeg"
import g from "../assets/7.jpeg"
import h from "../assets/8.jpeg"
import i from "../assets/9.jpeg"
import j from "../assets/10.jpeg"
import { useprofilecontext } from '../context/profileContext';
import Footer from '../container/Footer';
const Home = () => {
  const imagelist=[one,two,three,four]
  const slidelist=[a,b,c,d,e,f,g,h,i,j]
  const [index,setIndex]=useState(0)
  const handleimageleft=()=>{
    if(index === 0){
      setIndex(3)
      console.log(index)
    }else{
      setIndex(index=>index-1)
      console.log(index)
    }
  }
  const handleimageright=()=>{
    if(index == imagelist.length-1){
      setIndex(0)
    }else{
      setIndex(index => index+1)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === imagelist.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div>
    <div className='flex justify-center items-center'>
        <div className='w-full relative'>
        {/* Left Arrow */}
        <span className='absolute top-1/2 left-8 transform -translate-y-1/2 text-2xl cursor-pointer bg-gray-400 py-2 px-4  rounded-full' onClick={handleimageleft}>
          &#129120;
        </span>

        {/* Image */}
        <img src={imagelist[index]} className='w-full' />

        {/* Right Arrow */}
        <span className='absolute top-1/2 right-8 transform -translate-y-1/2 text-2xl cursor-pointer bg-gray-400 py-2 px-4  rounded-full' onClick={handleimageright}>
        🡢
        </span>
      </div>
    </div>
    <div className='flex justify-around  w-full mx-auto mt-5'>
      <div className='md:w-4/5'>
        <p className='font-bold border-b-1 border-black md:text-2xl md:border-none'>About Us</p>
        <p className=''>
        At carlz, we are committed to delivering world-class healthcare with a human touch. As a multi-speciality hospital, our mission is to provide compassionate, patient-centered medical services backed by advanced technology and a team of highly qualified doctors and medical professionals.
        With a focus on quality, safety, and innovation, we aim to make a difference in the lives of those we serve. Whether it's preventive care, complex surgeries, or emergency treatment, we ensure every patient receives personalized care in a comforting and healing environment.
        </p>
        <strong className='block w-fit mx-auto mt-4'>YOUR HEALTH IS OUR PRIORITY, AND YOUR TRUST IS OUR GREATEST ACHIEVEMENT.</strong>
      </div>
      <div className='hidden md:block'>
        <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[220px]  rounded-xl object-fill"
          >
          <source src={logovideo} type="video/mp4" className='h-[50%]'/>
          Your browser does not support the video tag.
        </video> 
      </div>
    </div>
      <div className='w-[90%] mx-auto mt-4 mb-3'>
        <p className='border-b-1 w-fit mx-auto text-xl font-semibold'>Hospital Facilities</p>

        <div className="overflow-hidden mt-4 scroll-container">
          <div className="flex w-max scroll-animation gap-4">
            {[...slidelist, ...slidelist].map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={item} className='w-40 h-40 rounded-lg object-cover' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home