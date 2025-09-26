import React from 'react'
import Navbar from '../container/Navbar'
import gastro from "../../public/gastro.png"
import GastroenterologyandHepatologyDoctors from './GastroenterologyandHepatologyDoctors'
import { useNavigate } from 'react-router-dom'
const GastroenterologyandHepatology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Gastroenterology and Hepatology</h2>
            <p className='m-3 md:text-center md:text-2xl'>Gastroenterology and Hepatology specializes in the diagnosis, treatment, and management of diseases related to the digestive system and liver. Our team of skilled gastroenterologists and hepatologists provides expert care for conditions such as acid reflux, ulcers, irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), hepatitis, fatty liver disease, and cirrhosis.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={gastro}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3 mx-auto w-[85%]'>
            <GastroenterologyandHepatologyDoctors />
        </div>
    </div>
  )
}

export default GastroenterologyandHepatology