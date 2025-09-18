import React from 'react'
import Navbar from '../container/navbar'
import BloodBankStaff from './BloodBankStaff'
import laboratoryServiceandBloodBank from "../../public/LaboratoryServiceandBloodBank.png"
import { useNavigate } from 'react-router-dom'
const BloodBank = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Blood Bank and Laboratory Service</h2>
            <p className='m-3 md:text-center md:text-2xl'>Blood Bank and Laboratory Services play a crucial role in supporting accurate diagnosis, treatment, and patient care across all medical departments.The blood bank ensures a safe and reliable supply of blood and blood products through rigorous screening and storage protocols. With a commitment to quality, speed, and accuracy, our team of skilled technicians and pathologists provide timely results to aid in effective clinical decision-making.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={laboratoryServiceandBloodBank}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3 w-[85%] mx-auto '>
            <BloodBankStaff />
        </div>
    </div>
  )
}

export default BloodBank