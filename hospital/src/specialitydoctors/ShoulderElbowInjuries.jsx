import React from 'react'
import Navbar from '../container/Navbar'
import ShoulderElbowInjuriesDoctors from './ShoulderElbowInjuriesDoctors'
import showlderelbow from "../../public/showlderelbow.png"
import { useNavigate } from 'react-router-dom'
const ShoulderElbowInjuries = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Shoulder & Elbow Injuries</h2>
        <p className='m-3 md:text-center md:text-2xl'>Shoulder & Elbow Injuries specialty focuses on the diagnosis, treatment, and rehabilitation of conditions affecting the shoulder and elbow joints, including fractures, dislocations, tendon tears, ligament injuries, arthritis, and sports-related trauma. Our expert orthopedic surgeons and rehabilitation specialists use advanced imaging, minimally invasive procedures, and personalized therapy plans to restore strength, mobility, and function.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={showlderelbow}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <ShoulderElbowInjuriesDoctors />
    </div>
</div>
  )
}

export default ShoulderElbowInjuries