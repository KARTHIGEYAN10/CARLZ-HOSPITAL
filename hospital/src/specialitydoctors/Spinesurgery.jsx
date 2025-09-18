import React from 'react'
import Navbar from '../container/navbar'
import SpinesurgeryDoctors from './SpinesurgeryDoctors'
import splinesergery from "../../public/splinesergery.png"
import { useNavigate } from 'react-router-dom'
const Spinesurgery = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Spine Surgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Spine Surgery focuses on the diagnosis and surgical treatment of spinal disorders, including herniated discs, spinal stenosis, scoliosis, trauma, tumors, and degenerative spine diseases. Our experienced spine surgeons use advanced techniques—ranging from minimally invasive procedures to complex spinal reconstructions—to alleviate pain, restore spinal stability, and improve overall mobility.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={splinesergery}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <SpinesurgeryDoctors />
    </div>
</div>
  )
}

export default Spinesurgery