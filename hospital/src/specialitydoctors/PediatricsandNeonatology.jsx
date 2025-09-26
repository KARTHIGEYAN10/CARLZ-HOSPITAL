import React from 'react'
import Navbar from '../container/Navbar'
import PediatricsandNeonatologyDoctors from './PediatricsandNeonatologyDoctors'
import pediatrics from "../../public/pediatrics.png"
import { useNavigate } from 'react-router-dom'
const PediatricsandNeonatology = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='relative w-full flex justify-between items-center mt-1 p-5 bg-[#f5ebe0] rounded-md cursor-pointer mx-auto'>
        <div className='md:w-[70%]'>
        <h2 className=' m-3 text-3xl'>Pediatrics and Neonatology</h2>
        <p className='m-3 md:text-center md:text-2xl'>Pediatrics and Neonatology focuses on the comprehensive healthcare of infants, children, and adolescents—from birth through early adulthood. Our compassionate team of pediatricians and neonatologists provides expert care for common childhood illnesses, developmental concerns, and complex medical conditions. In the Neonatology unit, we specialize in the care of newborns, especially those born prematurely or with critical health issues, using advanced neonatal intensive care technology.</p>
        </div>
        <div className='hidden md:block w-[30%] p-5'>
            <img src={pediatrics}/>
        </div>
        <div className='absolute top-1 left-3 transform translate-y-1/2'>
                <span className='hover:text-blue-600' onClick={()=>navigate("/Our-Specialities")}>&#11164; Hospital</span>
            </div>
    </div>
    <div className='w-full'>
            <p className='w-fit border-b-2 mx-auto text-2xl'>Our Doctors</p>
        </div>
    <div className='mt-3 mx-auto w-[85%]'>
        <PediatricsandNeonatologyDoctors />
    </div>
</div>
  )
}

export default PediatricsandNeonatology