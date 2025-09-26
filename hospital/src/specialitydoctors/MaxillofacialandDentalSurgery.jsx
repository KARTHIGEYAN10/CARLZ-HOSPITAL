import React from 'react'
import Navbar from '../container/Navbar'
import MaxillofacialandDentalDoctors from './MaxillofacialandDentalDoctors'
import dentalsurgery from "../../public/dentalsurgery.jpeg"
import { useNavigate } from 'react-router-dom'
const MaxillofacialandDentalSurgery = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Maxillofacial and Dental surgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Maxillofacial and Dental Surgery specializes in the diagnosis and surgical treatment of diseases, injuries, and defects affecting the face, jaw, mouth, and teeth. Our expert surgeons and dental specialists handle a wide range of procedures including corrective jaw surgery, dental implants, facial trauma management, and treatment of oral cancers.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={dentalsurgery }/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <MaxillofacialandDentalDoctors />
    </div>
</div>
  )
}

export default MaxillofacialandDentalSurgery