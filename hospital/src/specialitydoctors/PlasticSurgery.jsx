import React from 'react'
import Navbar from '../container/navbar'
import PlasticSurgeryDoctors from './PlasticSurgeryDoctors'
import plasticsurgery from "../../public/plasticsurgery.jpeg"
import { useNavigate } from 'react-router-dom'
const PlasticSurgery = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-4xl'>Plastic Surgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Plastic Surgery is dedicated to enhancing appearance, restoring function, and improving quality of life through both reconstructive and cosmetic procedures. Our experienced plastic surgeons specialize in a wide range of treatments, including facial reconstruction, burn care, post-trauma surgeries, scar revision, and aesthetic enhancements.  </p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={plasticsurgery}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <PlasticSurgeryDoctors />
    </div>
</div>
  )
}

export default PlasticSurgery