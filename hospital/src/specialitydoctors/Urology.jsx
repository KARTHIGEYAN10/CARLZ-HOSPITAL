import React from 'react'
import Navbar from '../container/navbar'
import UrologyDoctors from './UrologyDoctors'
import urology from "../assets/urology.png"
const Urology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Urology Surgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Urology is a specialized branch of medicine that focuses on the diagnosis and treatment of conditions related to the urinary tract in both men and women, as well as the male reproductive system. Our expert urologists offer advanced care for a wide range of issues including kidney stones, urinary tract infections, bladder disorders, prostate problems, and male infertility. </p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={urology}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3'>
        <UrologyDoctors />
    </div>
</div>
  )
}

export default Urology