import axios from 'axios'
import React, { useEffect, useState } from 'react'
import docvideo2 from "../assets/docvideo2.mp4"
import novideo from "../assets/novideo.mp4"
const Userlog = ({curfiltertime,setCurfiltertime}) => {
  const [userrecords,setUserRecords]=useState([])
  const bringrecords=async()=>{
    try{
      const result=await axios.post("/api/appoinment/logs")
      setUserRecords(result.data)
      console.log(result.data)
    }catch(error){
      console.log("error userlog(frontend)",error)
    }
  }
  useEffect(()=>{
    bringrecords() 
  },[])
  if(userrecords.length === 0){
    return(
      <>
      <div className='text-center w-[100%] mt-4'>
        <p className='text-2xl md:text-4xl '>No User Logs</p>
      </div>
      </>
    )
  }
  return (
    <>
    {userrecords.map((item, index) => (
      <div key={index} className="bg-[#ffee32] border pr-15 pl-4 pb-4 pt-4  m-2 rounded shadow relative flex md:flex-row md:justify-center md:items-center gap-4 flex-wrap sm:flex-col sm:justify-start sm:items-center">
        <div className='flex justify-center items-center gap-2'>
          <strong>Doctor Name:</strong>
          <p>{item.doctor_name}</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <strong>Department Name:</strong>
          <p>{item.doctor_role}</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <strong>Type of Meeting:</strong>
          <p> {item.mode_appoinment}</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <strong>Date of Visit:</strong>
          <p> {item.date_visit}</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <strong>Time of Visit:</strong>
          <p> {item.time_visit}</p>
        </div>
        <div className="absolute top-2 right-4 text-2xl text-gray-500 userlogs-index">
          <p>{index < 9 ? `0${index+1}` : `${index+1}`}</p>
        </div>
      </div>
    ))}
  </>)
}

export default Userlog