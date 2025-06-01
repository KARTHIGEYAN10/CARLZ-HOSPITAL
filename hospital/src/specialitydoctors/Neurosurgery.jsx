import React from 'react'
import NeurosurgeryDoctors from './NeurosurgeryDoctors'
import neurosurgery from "../assets/neurosurgery.png"
import Navbar from '../container/navbar'
import { useNavigate } from 'react-router-dom'
const Neurosurgery = () => {
    const navigate=useNavigate()    
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Neurosurgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Neurosurgery is a highly specialized field focused on the surgical treatment of conditions affecting the brain, spine, and nervous system. Our team of skilled neurosurgeons performs complex procedures for brain tumors, spinal cord injuries, aneurysms, herniated discs, and other neurological disorders with precision and care. </p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={neurosurgery}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3'>
        <NeurosurgeryDoctors />
    </div>
</div>
  )
}

export default Neurosurgery