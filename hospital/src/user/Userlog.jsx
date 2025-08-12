import axios from 'axios'
import React, { useEffect, useState } from 'react'
import docvideo2 from "../assets/docvideo2.mp4"
import novideo from "../assets/novideo.mp4"
const Userlog = ({curfiltertime,setCurfiltertime}) => {
  const [userrecords,setUserRecords]=useState([])
  const [viewopen,setViewOpen]=useState(false)
  const [viewdata,setViewData]=useState({})
  const bringrecords=async()=>{
    try{
      const result=await axios.post("/api/appoinment/logs")
      setUserRecords(result.data)
      console.log(result.data)
    }catch(error){
      console.log("error userlog(frontend)",error)
    }
  }
  const handleView=(item)=>{
    setViewOpen(true)
    setViewData(item)
    console.log(viewdata.doctor_name);
  }
  useEffect(()=>{
    bringrecords() 
  },[])
  return (
    <>
    {userrecords.map((item, index) => (
      <div key={index} className="w-fit h-fit bg-[#ffd100] rounded-md">
      <div className='pt-4 px-4'><strong>Doctor Name:</strong> {item.doctor_name}</div>
      <div className='pt-2 px-4'><strong>Department Name:</strong> {item.doctor_role}</div>
      <div className='pt-2 px-4'><strong>Type of Meeting:</strong> {item.mode_appoinment}</div>
      <div className='pt-2 px-4'><strong>Date of Visit:</strong> {item.date_visit}</div>
      <div className='pt-2 px-4'><strong>Time of Visit:</strong> {item.time_visit}</div>
      <div className='w-[100%] bg-[#000000] rounded-md text-white mt-2 cursor-pointer'>
        <p className='text-center' onClick={()=>handleView(item)}>View More &#11167;</p>
      </div>
      <div className='absolute top-[40%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-[#ebebeb] rounded-md'>
        {viewopen && (
          <div className='w-[400px] h-fit relative'>
            <p className='px-4 pt-1'>Doctor name: {viewdata.doctor_name}</p>
            <p className='px-4 pt-1'>Doctor role: {viewdata.doctor_role}</p>
            <p className='px-4 pt-1'>Doctor appointment: {viewdata.mode_appoinment}</p>
            <p className='px-4 pt-1'>Date of visit: {viewdata.date_visit}</p>
            <p className='px-4 pt-1'>Time of visit: {viewdata.time_visit}</p>
            <p className='px-4 pt-1'>Status: Not Completed</p>
            <div> 
              <span className='absolute top-2 right-5 cursor-pointer' onClick={()=>setViewOpen(false)}>&#x2715;</span>
            </div>
          </div>
        )}
      </div>
    </div>
    ))}
  </>)
}

export default Userlog