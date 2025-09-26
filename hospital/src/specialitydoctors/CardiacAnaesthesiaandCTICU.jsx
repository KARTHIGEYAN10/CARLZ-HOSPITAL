import React from 'react'
import Navbar from '../container/Navbar'
import CardiacAnaesthesiaandCTICUDoctors from './CardiacAnaesthesiaandCTICUDoctors'
import hearandlung from "../../public/Heart & Lung Transplant.png"
import { useNavigate } from 'react-router-dom'
const CardiacAnaesthesiaandCTICU = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
            <div className='md:w-[70%]'>
            <h2 className=' m-3 text-3xl'>Cardiac Anaesthesia & CT ICU</h2>
            <p className='m-3 md:text-center md:text-2xl'>Cardiac Anaesthesia & CT ICU is a specialized unit dedicated to providing advanced perioperative care for patients undergoing complex cardiac and thoracic procedures. Our expert team of cardiac anesthesiologists and critical care specialists ensure safe anesthesia delivery, continuous monitoring, and immediate post-operative support in a high-dependency environment.</p>
            </div>
            <div className='hidden md:block w-[30%] p-5'>
                <img src={hearandlung}/>
            </div>
            <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
        </div>
        <div className='w-full'>
                <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
            </div>
        <div className='mt-3 mx-auto w-[95%]'>
            <CardiacAnaesthesiaandCTICUDoctors />
        </div>
    </div>
  )
}

export default CardiacAnaesthesiaandCTICU