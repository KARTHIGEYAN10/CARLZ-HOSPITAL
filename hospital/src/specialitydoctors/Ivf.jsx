import React from 'react'
import Navbar from '../container/Navbar'
import IvfDoctors from './IvfDoctors'
import ivf from "../../public/ivf.jpeg"
import { useNavigate } from 'react-router-dom'
const Ivf = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Ivf</h2>
        <p className='m-3 md:text-center md:text-2xl'>In Vitro Fertilization (IVF) is a highly advanced fertility treatment designed to help individuals and couples overcome challenges related to conception. Our IVF center offers comprehensive care with cutting-edge technology, personalized treatment plans, and a compassionate team of fertility specialists.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={ivf}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <IvfDoctors />
    </div>
</div>
  )
}

export default Ivf