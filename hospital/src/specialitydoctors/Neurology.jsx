import React from 'react'
import Navbar from '../container/Navbar'
import NeurologyDoctors from './NeurologyDoctors'
import neurology from "../../public/neurology.png"
import { useNavigate } from 'react-router-dom'
const Neurology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Neurology</h2>
        <p className='m-3 md:text-center md:text-2xl'>Neurology specializes in the diagnosis, treatment, and management of disorders related to the brain, spinal cord, and nervous system. Our expert neurologists provide advanced care for conditions such as stroke, epilepsy, Parkinson’s disease, multiple sclerosis, migraines, and neuropathies.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={neurology}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <NeurologyDoctors />
    </div>
</div>
  )
}

export default Neurology