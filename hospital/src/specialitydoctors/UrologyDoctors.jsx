import React from 'react'
import femaledoctor from "../assets/femaledoctor.png"
import maledoctor from "../assets/maledoctor.png"
import { useNavigate } from 'react-router-dom'
import d from "../final_doctors_dataset2_final_sorted.json"
import { useuserdoctorcontext } from '../context/UserContext'
const UrologyDoctors = () => {
    const {setDoctor}=useuserdoctorcontext()
    const handleselected=(item)=>{
        localStorage.setItem("selected_doctor",JSON.stringify(item))
        setDoctor(item)
        console.log(item)
    }
    const urologydoctor=d["Urology"]
  return (
    <div className='flex md:justify-start gap-4 items-center flex-wrap justify-center'>
                                                {urologydoctor.map((item,index)=>(
                                                    <div key={index} className='min-w-[300px] max-w-[360px] h-200px rounded-sm  p-5 border-1 m-2 
                                                    flex items-center justify-between gap-4 hover:shadow-2xl'>
                                                        <div className='p-4 bg-blue-500 rounded-md w-[30%]'>
                                                        <img src={item.gender === "male" ? `${maledoctor}` : `${femaledoctor}`} className='w-20 h-20 mx-auto'/>
                                                        </div>
                                                        <div className='grid-cols-1 w-[70%]'>
                                                        <p>Name : {item.name}</p>
                                                        <p>Role : {item.role}</p>
                                                        <p>Sucess rate : {item.successrate}</p>
                                                        <p>Title : {item.title}</p>
                                                        <button className='bg-green-600 text-white p-3 rounded-lg mt-2 hover:bg-green-900 cursor-pointer' onClick={()=>handleselected(item)}>Book an appoinment</button>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            </div>
  )
}

export default UrologyDoctors