import React from 'react'
import Navbar from '../container/navbar'
import DermatologyDoctors from './DermatologyDoctors'
import dermatology from "../assets/dermatology.jpeg"
import { useNavigate } from 'react-router-dom'
const Dermatology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Dermatology</h2>
            <p className='m-3 md:text-center md:text-2xl'>Dermatology focuses on the diagnosis, treatment, and prevention of a wide range of skin, hair, and nail conditions. Our experienced dermatologists offer personalized care for issues such as acne, eczema, psoriasis, skin infections, and cosmetic concerns.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={dermatology}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3'>
            <DermatologyDoctors />
        </div>
    </div>
  )
}

export default Dermatology