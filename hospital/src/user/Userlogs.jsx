import React, { useState } from 'react'
import Navbar from '../container/navbar'
import Userlog from './Userlog'

const Userlogs = () => {
    const [curfiltertime,setCurfiltertime]=useState(null)
    //applicationstatus
    const [apptype,setApptype]=useState("ongoing")
  return (
    <div>
        <Navbar />
        <label htmlFor="filter" className='filter-id'>
            <strong className='filter ml-3 mt-5 block'>Filter</strong>
            <select value={curfiltertime} id='filter-id' onChange={(e)=>setCurfiltertime(e.target.value)} className='ml-3 p-2 bg-white border-1 rounded-md block'>
                <option value="select any option">select any option</option>
                <option value="this-month">This-Month</option>
                <option value="this-year">This-Year</option>
                <option value="all-time-records">All-Time-Records</option>
            </select>
        </label>
        <div>
            <div className='flex justify-center items-center gap-4'>
                <div className='w-1/2 flex justify-end-safe'>
                    <p className={`${apptype === "ongoing" ? "border-b-3 bg-gradient-to-t from-red-700  to-white":""} hover:cursor-pointer p-2`} onClick={()=>setApptype("ongoing")}>Ongoing Appoinments</p>
                </div>
                <div className='w-1/2'>
                    <p className={`${apptype === "completed" ? "border-b-3 bg-gradient-to-t from-green-600  to-white":""} p-2 w-fit hover:cursor-pointer`} onClick={()=>setApptype("completed")}>Completed Appoinments</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mx-5 mt-10'>
                <Userlog curfiltertime={curfiltertime} setCurfiltertime={setCurfiltertime}/>
            </div>
        </div>
    </div>
  )
}

export default Userlogs