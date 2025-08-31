import React from 'react'
import { FaPhoneAlt,FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {

  return (
    <div className=' bg-black flex flex-col md:flex-row md:justify-between w-full p-5'>
        {/* left */}
        <div className='md:w-2/4 w-full flex flex-col justify-between items-center'>
            {/* location */}
            <div className=''>
                <div className=" flex flex-row items-center gap-2">
                <div className="bg-black p-4 rounded-full">
                    <MdLocationOn className="text-yellow-300 w-8 h-8" />
                </div>
                <div className="text-white">
                    <p>Chennai - 600093</p>
                    <strong>TN, INDIA</strong>
                </div>
            </div>
            {/* phone */}
            <div className='flex flex-row items-center gap-2'>
                <div className='bg-black p-4 rounded-full'>
                    <FaPhoneAlt className='text-green-400 w-8 h-8'/>
                </div>
                <div className='text-white'>
                    <p>+91 63743 46339</p>
                </div>
            </div>
            {/* email */}
            <div className='flex flex-row justify-between items-center gap-2'>
                <div className='bg-black p-4 rounded-full'>
                    <MdEmail className='text-orange-400 w-8 h-8' onClick={()=>handleLinkedin()}/>
                </div>
                <div className='text-blue-400'>
                    <p className='cursor-pointer'>carlz@gmail.com</p>
                </div>
            </div>
            </div>
        </div>

        {/* right */}
        <div className='md:w-2/4 w-full flex flex-col justify-around'>
            {/* About */}
            <div className='text-white'>
                <strong className='text-2xl'>About the company</strong>
                <p className='mt-3'>Carlz Hospital delivers exceptional healthcare through advanced facilities, skilled specialists, and personalized treatment. We are committed to ensuring every patient receives compassionate, reliable, and timely medical care.</p>
            </div>
            {/* linkedin and github */}
            <div className='flex flex-row gap-5 mt-4'>
                    <a href="https://www.linkedin.com/in/karthigeyan-b-3654b731b/" target='_blank' rel='noopener noreferrer'>
                        <SiLinkedin className="w-8 h-8 text-blue-500  cursor-pointer"/>
                    </a>
                    <a href='https://github.com/KARTHIGEYAN10' target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-gray-500 w-8 h-8'/>
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Footer