import React from 'react'
import Navbar from '../container/navbar'
import HeartLungTransplantDoctors from './HeartLungTransplantDoctors'
import hearandlung from "../../public/Heart & Lung Transplant.png"
import { useNavigate } from 'react-router-dom'
const HeadLungTransplant = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Heart & Lung Transplant</h2>
            <p className='m-3 md:text-center md:text-2xl'>Heart & Lung Transplant and Mechanical Circulatory Support is a specialized department dedicated to managing end-stage heart and lung failure through advanced surgical interventions. Our expert team of cardiothoracic surgeons, transplant specialists, and critical care professionals provide comprehensive evaluation, transplant procedures, and post-operative care for patients in need of heart and lung transplants.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={hearandlung}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3 mx-auto w-[85%]'>
            <HeartLungTransplantDoctors />
        </div>
    </div>
  )
}

export default HeadLungTransplant