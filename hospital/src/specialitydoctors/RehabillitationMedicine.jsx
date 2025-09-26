import React from 'react'
import Navbar from '../container/Navbar'
import RehabillitationMedicineDoctors from './RehabillitationMedicineDoctors'
import rehabilationmedicine from "../../public/rehabilationmedicine.png"
import { useNavigate } from 'react-router-dom'
const RehabillitationMedicine = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Rehabillitation Medicine</h2>
        <p className='m-3 md:text-center md:text-2xl'>Rehabilitation Medicine is dedicated to helping patients restore function, improve mobility, and enhance quality of life following illness, injury, or surgery. Our multidisciplinary team of physiatrists, therapists, and rehabilitation specialists provides individualized care for conditions such as stroke, spinal cord injuries, musculoskeletal disorders, and post-operative recovery. </p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={rehabilationmedicine}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <RehabillitationMedicineDoctors />
    </div>
</div>
  )
}

export default RehabillitationMedicine