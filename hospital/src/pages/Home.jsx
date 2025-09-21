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
import mission from "../assets/mission.png"
import value from "../assets/value.png"
import vision from "../assets/vision.png"
import Footer from '../container/Footer';
import { MdHistory } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { MdReceiptLong } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaCalendarCheck } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import FeedBackForm from '../container/FeedBackForm';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate=useNavigate();
  const imagelist=[one,three,four]
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
    }, 5000);

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
        {/* <span className='absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl cursor-pointer bg-[#495057] py-2 px-4  rounded-full' onClick={handleimageleft}>
          &#129120;
        </span> */}

        {/* Image */}
        <img src={imagelist[index]} className='w-full' />

        {/* Right Arrow */}
        {/* <span className='absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl cursor-pointer bg-[#495057] py-2 px-4  rounded-full' onClick={handleimageright}>
        🡢
        </span> */}
      </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-around items-center md:w-full h-fit md:h-80  bg-black '>
      <div className='bg-amber-50 md:rounded-md p-5 w-full  md:w-[230px] md:h-[200px] hover:bg-[#e9ecef] cursor-pointer'
      onClick={()=>navigate("/history")}>
        <MdReceiptLong size={40} color="orange" className='mx-auto mt-10' />
        <p className='rowdies-regular mt-5 text-center'>Our History</p>
      </div>
      <div className=' bg-amber-50 md:rounded-md  p-5 w-full  md:w-[230px] h-[200px] hover:bg-[#e9ecef] cursor-pointer'
      onClick={()=>navigate("/general-appointment")}>
        <MdEventAvailable size={40} color="orange"  className='mx-auto mt-10'/>
        <p className='w-full mx-auto rowdies-regular mt-5 text-center'>Book an Appointment</p>
      </div>
      <div className=' bg-amber-50 md:rounded-md p-5 w-full  md:w-[230px] h-[200px] hover:bg-[#e9ecef] cursor-pointer'>
        <FaQuestionCircle size={40} color="orange" className='mx-auto mt-10' />
        <p className='rowdies-regular text-center mt-5'>For Enquiry</p>
      </div>
    </div>
    {/* vision and mission and values */}
    <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 mx-auto mt-0'>
      {/* vision */}
      <div className='bg-[#2364aa] md:rounded-md p-3 md:bg-[#fdd85d]'>
        <div className='w-full'>
          <img src={vision} alt="" className='object-contain w-50 h-50 mx-auto' />
        </div>
        <div className=''>
          <strong className='rowdies-regular'>Our Vision</strong>
          <p>To be the most trusted healthcare destination, delivering excellence in patient care, innovation, and compassion — improving lives and setting the standard for quality healthcare in the community.</p>
        </div>
      </div>
      {/* mission */}
      <div className='p-3 bg-green-800 md:bg-[#fdd85d]  md:rounded-md md:border md:border-x-2 md:border-white sm:hover:scale-110 duration-500 hover:border-none hover:cursor-pointer'>
        <div className='w-full'>
          <img src={mission} alt="" className='object-contain w-50 h-50 mx-auto' />
        </div>
        <div className=''>
          <strong className='rowdies-regular'>Our Mission</strong>
          <p className=''>We are committed to providing world-class healthcare services through advanced medical technology, skilled professionals, and a patient-centered approach. Our mission is to heal, comfort, and inspire hope in every individual we serve.</p>
        </div>
      </div>
      {/* values */}
      <div className='bg-[#d00000] md:rounded-md p-4 md:bg-[#fdd85d]'>
        <div className='w-full'>
          <img src={value} alt="" className='object-contain w-50 h-50 mx-auto' />
        </div>
        <div className=''>
          <strong className='rowdies-regular'>Our Value</strong>
          <p>We believe in treating every patient with compassion, respect, and dignity. We are committed to excellence in every aspect of care, guided by integrity, honesty, and transparency. </p>
        </div>
      </div>

    </div>
      <div className='w-[90%] mx-auto mt-10 mb-3'>
        <p className='w-fit mx-auto text-xl rowdies-regular'>Hospital Facilities</p>
        <div className='mt-1 w-24 h-1 bg-gray-400 mx-auto'></div>

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
      <FeedBackForm/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home