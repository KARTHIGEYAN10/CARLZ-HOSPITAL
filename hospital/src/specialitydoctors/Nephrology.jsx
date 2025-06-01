import React from 'react'
import Navbar from '../container/navbar'
import NephrologyDoctors from './NephrologyDoctors'
import nephrology from "../assets/nephrology.png"
import { useNavigate } from 'react-router-dom'
const Nephrology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Nephrology</h2>
        <p className='m-3 md:text-center md:text-2xl'>Nephrology focuses on the diagnosis and management of kidney-related diseases and disorders. Our team of experienced nephrologists offers comprehensive care for conditions such as chronic kidney disease, kidney stones, hypertension, and electrolyte imbalances.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={nephrology }/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3'>
        <NephrologyDoctors />
    </div>
</div>
  )
}

export default Nephrology