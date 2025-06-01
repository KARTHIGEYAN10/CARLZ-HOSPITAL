import React, { useEffect, useState } from 'react';
import Navbar from '../container/navbar';
import maledoctor from '../assets/maledoctor.png';
import femaledoctor from '../assets/femaledoctor.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import docvideo from '../assets/docvideo3.mp4'
import { useuserdoctorcontext } from '../context/UserContext';

const Appoinment = () => {
    const [unavailableTimes, setUnavailableTimes] = useState([]);
    const navigate = useNavigate();
    const { doctor , setDoctor } = useuserdoctorcontext();

    const cur = new Date();
    const c1=cur.getDate()
    const options={month:"short",day:"numeric"}
    const datelist = [];
    for(let i=0;i<3;i++){
        const nextdate=new Date(cur)
        console.log("c",nextdate)
        nextdate.setDate(cur.getDate()+i)
        console.log(nextdate)
        const formatted=nextdate.toLocaleDateString("en-US",options)
        datelist.push(formatted)
    }
    console.log(datelist)
    const [dateselection, setDateSelection] = useState(datelist[0]);
    const [timeselection, setTimeSelection] = useState(null);
    const [mode, setMode] = useState(null);
    const curtime=cur.getHours() > 12 ? cur.getHours()-12 :cur.getHours()
    console.log(curtime)
    useEffect(()=>{
        if(doctor){
            handleappoinmentcheck()
        }
    },[doctor,dateselection])
    const handleappoinmentcheck=async()=>{
        try{
            const result=await axios.post("/api/appointment/check",
                {dateselection,
                doctorname:doctor.name})
            const non_available=result.data
            console.log(non_available)
            const arr=non_available.map((item => item.time_visit))
            setUnavailableTimes(arr)
        }catch(error){
            console.log("error in appoinment check(frontend)")
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!dateselection || !timeselection || !mode || mode === 'select any option') {
            window.alert('Select date, time, and mode for an appointment 🔐');
            return;
        }

        const appointment = {
            doctorname: doctor.name,
            doctorrate: doctor.rate,
            doctorsuccessrate: doctor.successrate,
            doctorrole: doctor.role,
            dateofvisit: dateselection,
            timeofvisit: timeselection,
            modeofappointment: mode,
        };
        console.log(appointment)
        try {
            const result = await axios.post('/api/appoinment/booking',appointment);
            const response=await axios.post('/api/appointment/response',result.data)
            console.log(response.data)
            console.log(result.data);
            toast.success('Appointment Booked Successfully');
            handleappoinmentcheck()
        } catch (error) {
            toast.error('Error booking appointment');
            console.log(error);
        }
    };
    function handleremovedoctor(){
        localStorage.removeItem("selected_doctor")
        setDoctor(null)
        navigate("/doctor")
    }
    if (!doctor) {
        return (
            <div>
                <Navbar />
                <div
                className='relative mt-2 ml-2 cursor-pointer w-fit mb-5'
                onClick={() => navigate('/doctor')}
            >
                <span className='absolute top-1/2 left-0 transform -translate-y-1/2'>
                    &#11164;
                </span>
                <p className='text-xl pl-5 text-blue-600 underline'>Doctors</p>
            </div>
                <div className='w-[90%] mx-auto h-1/2 text-center mt-5'>
                    <p className='text-red-500 bg-red-200'>Please select a doctor for an appointment</p>
                    <video autoPlay playsInline muted loop>
                        <source src={docvideo}/>
                    </video>
                </div>
            </div>
        );
    }
    const handletimeselection=(item)=>{
        if(unavailableTimes.includes(item)){
            return
        }
        if(item === timeselection){
            setTimeSelection(null)
        }else{
            setTimeSelection(item)
        }
    }
    console.log(timeselection)
    return (
        <div>
            <Navbar />
            <div
                className='relative mt-2 ml-2 cursor-pointer w-fit mb-5'
                onClick={handleremovedoctor}
            >
                <span className='absolute top-1/2 left-0 transform -translate-y-1/2'>
                    &#11164;
                </span>
                <p className='text-2xl pl-5 text-blue-600 underline'>Doctors</p>
            </div>

            <form className='w-[90%] mx-auto mt-4' onSubmit={handlesubmit}>
                <div className='flex flex-col text-xl md:flex-row items-center justify-center mb-10 md:text-2xl'>
                    <div className='w-[100%] md:w-1/2 flex justify-center'>
                        <img
                            src={doctor.gender === 'male' ? maledoctor : femaledoctor}
                            className='w-60 h-60'
                            alt='Doctor'
                        />
                    </div>
                    <div className='w-[100%] md:w-1/2 pt-5 md:pt-0'>
                        <div className='flex justify-start gap-3 mb-2'>
                            <strong>Name :</strong>
                            <p>{doctor.name}</p>
                        </div>
                        <div className='flex justify-start gap-3 mb-2'>
                            <strong>Role:</strong>
                            <p>{doctor.role}</p>
                        </div>
                        <div className='flex justify-start gap-3 mb-2'>
                            <strong>Success Rate :</strong>
                            <p>{doctor.successrate}</p>
                        </div>
                        <div className='flex justify-start gap-3 mb-2'>
                            <strong>Rate :</strong>
                            <p><strong>₹</strong> {doctor.rate}</p>
                        </div>
                    </div>
                </div>
                <p className='mb-2 text-lg'>DATE</p>
                <div className='flex justify-start items-center gap-5 mb-10 mt-5'>
                    {datelist.map((item, index) => (
                        <div key={index}>
                            <span
                                className={`${
                                    dateselection === item
                                        ? 'bg-amber-400'
                                        : 'bg-amber-200'
                                } rounded-md text-black p-4 cursor-pointer`}
                                onClick={() =>{ setDateSelection(item);
                                    setTimeSelection(null)
                                }}
                            >
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
                <p className='mb-2 text-lg'>TIMINGS</p>
                <div className='flex justify-start items-center gap-4 mb-5 mt-5 flex-wrap'>
                    {doctor.availability &&
                        Object.entries(doctor.availability).map(([time, status], index) => (
                            <div key={index}>
                                <span
                                    className={`${unavailableTimes.includes(time) ? "border-1 border-gray-700  text-black cursor-not-allowed" :timeselection === time ? "bg-green-700" : "bg-green-500 hover:bg-green-300 cursor-pointer"}  text-gray-950 px-7 rounded-md py-2`}
                                    onClick={()=>handletimeselection(time)}
                                >
                                    {time}
                                </span>
                            </div>
                        ))}
                </div>

                <label htmlFor='mode-appoinment-id' className='mode-appoinment'>
                    <p className='mode-appoinment text-lg mb-2'>MODE OF APPOINMENT</p>
                    <select
                        id='mode-appoinment-id'
                        className='p-3 rounded-md cursor-pointer border-1 mb-2'
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        required
                    >
                        <option value='select any option'>select any option</option>
                        <option value='Phone-call'>Phone Call</option>
                        <option value='Video-call'>Video Call</option>
                        <option value='Physical'>Physical</option>
                    </select>
                </label>

                <div className='mt-6 flex justify-center items-center gap-4 mb-10'>
                    <button
                        type='button'
                        className='w:[1/2] md:w-fit bg-red-600 hover:bg-red-500 p-4 border-1 rounded-lg cursor-pointer'
                        onClick={handleremovedoctor}
                    >
                        Unselect This Doctor
                    </button>
                    <button
                        type='submit'
                        className='w:[1/2] md:w-fit ml-10 bg-green-500 p-4 border-1 rounded-lg hover:bg-green-400 cursor-pointer'
                    >
                        Request Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Appoinment;
