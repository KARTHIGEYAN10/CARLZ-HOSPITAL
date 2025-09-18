import React from 'react'
import EmergencyDoctors from './EmergencyDoctors'
import emergencymedicine from "../../public/emergencymedicine.png"
import Navbar from '../container/navbar'
import { useNavigate } from 'react-router-dom'
const EmergencyMedicine = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Emergency Medicine</h2>
            <p className='m-3 md:text-center md:text-2xl'>Emergency Medicine is the frontline of healthcare, providing rapid assessment, diagnosis, and treatment for patients experiencing acute illness or injury. Our Emergency Department is equipped with state-of-the-art technology and staffed by highly trained emergency physicians, nurses, and support teams who are available 24/7. </p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={emergencymedicine}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3 mx-auto w-[85%]'>
            <EmergencyDoctors />
        </div>
    </div>
  )
}

export default EmergencyMedicine