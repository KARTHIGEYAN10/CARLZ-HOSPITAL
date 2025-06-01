import React from 'react'
import Navbar from '../container/navbar'
import Cardiacdoctors from './Cardiacdoctors'
import cardiac from "../assets/cardiac.jpg"
import { useNavigate } from 'react-router-dom'
const Cardiac = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Cardiac Science</h2>
            <p className='m-3 md:text-center md:text-2xl'>Cardiac Science is dedicated to the comprehensive diagnosis, treatment, and management of heart-related conditions and diseases. Our team of expert cardiologists, cardiac surgeons, and support staff utilize advanced technology and evidence-based practices to provide world-class care for patients with heart disease, arrhythmias, congenital heart defects, and other cardiovascular issues. From non-invasive diagnostics to complex surgeries, we ensure personalized treatment plans that focus on improving heart health and enhancing the quality of life for every patient.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={cardiac}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3'>
            <Cardiacdoctors />
        </div>
    </div>
  )
}

export default Cardiac