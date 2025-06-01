import React from 'react'
import Navbar from '../container/navbar'
import LiverTransplantandHpbDoctors from './LiverTransplantandHpbDoctors'
import LiverDiseasesTransplant from "../assets/LiverDiseasesTransplant.png"
import { useNavigate } from 'react-router-dom'
const LiverTransplantandHpbsurgery = () => {
    const navigate=useNavigate()  
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center m-3 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Liver Disease,Transplant and HPB surgery</h2>
        <p className='m-3 md:text-center md:text-2xl'>Liver Disease, Transplant, and HPB (Hepato-Pancreato-Biliary) Surgery focuses on the diagnosis, treatment, and surgical care of liver, pancreas, and biliary tract disorders. Our expert team of hepatologists and HPB surgeons offers advanced treatments for conditions such as liver cirrhosis, liver cancer, bile duct obstructions, and pancreatitis.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={LiverDiseasesTransplant}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/doctor")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3'>
        <LiverTransplantandHpbDoctors />
    </div>
</div>
  )
}

export default LiverTransplantandHpbsurgery