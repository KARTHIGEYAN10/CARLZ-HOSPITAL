import React from 'react'
import Navbar from '../container/Navbar'
import InternalMedicineDoctors from './InternalMedicineDoctors'
import internalmedicine from  "../../public/internalmedicine.jpg"
import { useNavigate } from 'react-router-dom'
const InternalMedicine = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Internal Medicine</h2>
        <p className='m-3 md:text-center md:text-2xl'>Internal Medicine focuses on the comprehensive care of adults, providing expert diagnosis, treatment, and management of a wide range of conditions including diabetes, hypertension, heart disease, and respiratory disorders. Our team of skilled internists emphasizes preventive care, early detection, and personalized treatment plans to address both common and complex medical issues.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={internalmedicine}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <InternalMedicineDoctors />
    </div>
</div>
  )
}

export default InternalMedicine