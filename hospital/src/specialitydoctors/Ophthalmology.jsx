import React from 'react'
import Navbar from '../container/Navbar'
import OphthalmologyDoctors from './OphthalmologyDoctors'
import ophthalmology from "../../public/ophthalmology.jpeg"
import { useNavigate } from 'react-router-dom'
const Ophthalmology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Ophthalmology</h2>
        <p className='m-3 md:text-center md:text-2xl'>Ophthalmology is dedicated to the care and treatment of eye disorders and vision problems. Our expert ophthalmologists offer advanced diagnostic and surgical solutions for conditions such as cataracts, glaucoma, diabetic retinopathy, macular degeneration, and refractive errors. </p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={ophthalmology}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <OphthalmologyDoctors />
    </div>
</div>
  )
}

export default Ophthalmology