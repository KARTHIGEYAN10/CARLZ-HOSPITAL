import React, { useState } from 'react'
import Navbar from '../container/navbar'
import Userlog from './Userlog'

const Userlogs = () => {
    const [curfiltertime,setCurfiltertime]=useState(null)
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
            <Userlog curfiltertime={curfiltertime} setCurfiltertime={setCurfiltertime}/>
        </div>
    </div>
  )
}

export default Userlogs