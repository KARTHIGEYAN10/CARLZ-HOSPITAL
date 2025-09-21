import axios from 'axios'
import React, { useEffect, useState } from 'react'
import docvideo2 from "../assets/docvideo2.mp4"
import novideo from "../assets/novideo.mp4"
import toast from 'react-hot-toast'
const Userlog = ({curfiltertime,setCurfiltertime,apptype,setApptype}) => {
  const [userrecords,setUserRecords]=useState([])
  const [viewopen,setViewOpen]=useState(false)
  const [viewdata,setViewData]=useState({})
  const bringrecords=async(type)=>{
    try{
      const result=await axios.post("/api/appoinment/logs",{type})
      setUserRecords(result.data)
    }catch(error){
      console.log("error userlog(frontend)",error)
    }
  }
  const handleView=(item)=>{
    setViewOpen(true)
    setViewData(item)
  }
  const handlecancelappointment=async(_id)=>{
    try{
      console.log(_id);
      const res=await axios.delete(`/api/appointment/delete/${_id}`);
      toast.success("Appointment deleted sucessfully")
      bringrecords(apptype);
      setViewOpen(false)
    }catch(error){
      console.log(error)
      toast.error(error)
    }
  }
  useEffect(()=>{
    bringrecords(apptype) 
  },[apptype])
  return (
    <>
    {userrecords.map((item, index) => (
      <div key={index} className={`${item.status === "ongoing" ? "bg-[#6f1d1b]" : "bg-[#2c6e49]"} w-fit h-fit rounded-md`}>
      <div className='pt-4 px-4 text-yellow-400'><strong>Doctor Name:</strong> {item.doctor_name}</div>
      <div className='pt-2 px-4 text-yellow-400'><strong>Department Name:</strong> {item.doctor_role}</div>
      <div className='pt-2 px-4 text-yellow-400'><strong>Type of Meeting:</strong> {item.mode_appoinment}</div>
      <div className='pt-2 px-4 text-yellow-400'><strong>Date of Visit:</strong> {item.date_visit}</div>
      <div className='pt-2 px-4 text-yellow-400'><strong>Time of Visit:</strong> {item.time_visit}</div>
      <div className='w-[100%] bg-[#000000] rounded-md text-white mt-2 cursor-pointer'>
        <p className='text-center' onClick={()=>handleView(item)}>View More &#11167;</p>
      </div>
      <div className='absolute top-[40%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-[#ebebeb] rounded-md'>
        {viewopen && (
          <div className='w-[400px] h-fit relative'>
            <p className='px-4 pt-7'>Doctor name: {viewdata.doctor_name}</p>
            <p className='px-4 pt-1'>Doctor role: {viewdata.doctor_role}</p>
            <p className='px-4 pt-1'>Doctor appointment: {viewdata.mode_appoinment}</p>
            <p className='px-4 pt-1'>Date of visit: {viewdata.date_visit}</p>
            <p className='px-4 pt-1'>Time of visit: {viewdata.time_visit}</p>
            <p className='px-4 pt-1'>Status: {viewdata.status}</p>
            {
              viewdata.status && viewdata.status === "ongoing" ? (
                <div className='w-full text-center mb-5 mt-4'>
              <span className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600'
              onClick={()=>handlecancelappointment(viewdata._id)}>Cancel appointment</span>
            </div>
              ):""
            }
            <div> 
              <span className='absolute top-1 right-2 cursor-pointer hover:bg-gray-400 p-2' onClick={()=>setViewOpen(false)}>&#x2715;</span>
            </div>
          </div>
        )}
      </div>
    </div>
    ))}
  </>)
}

export default Userlog