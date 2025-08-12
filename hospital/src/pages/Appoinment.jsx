import React, { useEffect, useRef, useState } from 'react';
import maledoctor from '../assets/maledoctor.png';
import femaledoctor from '../assets/femaledoctor.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import blurimage from "../assets/blur.jpeg";
import { useuserdoctorcontext } from '../context/UserContext';
import Navbar from '../container/navbar';

const Appoinment = () => {
    const { doctor, setDoctor, authuser, setAuthUser } = useuserdoctorcontext();
    const navigate = useNavigate();
    const today = new Date();
    const curtime = today.getHours();

    // For DB usage
    const dateList = [];
    // For UI purpose
    const dateList1 = [];

    // Date formatting helpers
    const pad = (n) => n.toString().padStart(2, '0');

    const getFormattedDate = (dateObj) => {
        const day = pad(dateObj.getDate());
        const month = pad(dateObj.getMonth() + 1);
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const getFormattedDate1 = (dateObj) => {
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = dateObj.toLocaleString('default', { month: 'short' });
        return `${month} ${day}`;
    };

    for (let i = 0; i < 5; i++) {
        const tempDate = new Date(today);
        tempDate.setDate(today.getDate() + i);
        dateList.push(getFormattedDate(tempDate));
        dateList1.push(getFormattedDate1(tempDate));
    }

    // State variables
    const [dateselection, setDateSelection] = useState(dateList1[0]);
    const [timeselection, setTimeSelection] = useState();
    const [modeofappointment, setModeOfAppointment] = useState();
    const [doctornonavailabletimeslots, setDoctorNonAvailableTimeSlots] = useState([]);
    const reasonref = useRef("");

    const handleDeselectDoctor = () => {
        setDoctor(null);
        navigate('/doctor');
    };

    const HandleDoctorAvailabilityCheck = async () => {
        try {
            const index = dateList1.indexOf(dateselection);
            let res = await axios.post("/api/appointment/check", {
                dateselection: dateList[index],
                doctorname: doctor.name
            });
            let timeslots = res.data.map(item => item.time_visit);
            setDoctorNonAvailableTimeSlots(timeslots);
        } catch (error) {
            console.log("error occured:", error.message);
        }
    };

    const HandleAppoinmentBooking = async (e) => {
        try {
            e.preventDefault();
            if (!timeselection || !modeofappointment) {
                window.alert("please select timeslots and mode of appointment");
                return;
            }
            const index = dateList1.indexOf(dateselection);
            const d = dateList[index];
            const data = {
                username: authuser.username,
                useremail: authuser.email,
                doctorname: doctor.name,
                doctoremail: doctor.email,
                doctorrate: doctor.rate,
                doctorsuccess: doctor.successrate,
                doctorrole: doctor.role,
                dateofvisit: d,
                timeofvisit: timeselection,
                modeofappointment: modeofappointment,
                reasonforappointment: reasonref.current.value,
                status: "Appointed"
            };
            await axios.post("/api/appoinment/booking", data);
            toast.success("Appointment booked successfully");
            setModeOfAppointment("select any option");
            setTimeSelection(null);
            reasonref.current.value = "";
            HandleDoctorAvailabilityCheck();
        } catch (error) {
            toast.error("Appointment Failed");
            console.error(error);
        }
    };

    const handletimeselection = (time, crossedtimeslots) => {
        if (doctornonavailabletimeslots.includes(time)) {
            return;
        } else if (getFormattedDate1(today) === dateselection && crossedtimeslots.includes(time)) {
            return;
        }
        setTimeSelection(time);
    };

    useEffect(() => {
        if (dateselection && doctor) {
            HandleDoctorAvailabilityCheck();
        }
    }, [dateselection, doctor]);

    // If no doctor selected, show message early and stop rendering
    if (!doctor) {
        return (
            <div className='w-full h-screen overflow-hidden'>
                <Navbar />
                <div className='w-full h-full relative'>
                    <img src={blurimage} alt="" className='w-full h-full object-cover' />
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-[#0d1b2a] text-white w-[330px] h-[170px] p-5 rounded-md'>
                        <p>Sorry, You have not selected any doctor for appointment. Please select a doctor first.</p>
                        <div className='flex justify-center items-center gap-4 mt-3'>
                            <button className='bg-white rounded-md font-medium px-3 py-2 hover:cursor-pointer text-black hover:bg-amber-400'
                                onClick={() => navigate("/home")}>Go To Home</button>
                            <button className='bg-white rounded-md px-3 py-2 font-medium hover:cursor-pointer text-black hover:bg-amber-400'
                                onClick={() => navigate("/doctor")}>Select Doctor</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Safe to compute crossedtimeslots now
    const crossedtimeslots = doctor?.availability?.filter(item => {
        const startTime = parseInt(item.split('-')[0]);
        return startTime <= curtime;
    }) || [];

    return (
        <div>
            <Navbar />
            <div
                className='relative mt-2 ml-2 cursor-pointer w-fit mb-5'
                onClick={handleDeselectDoctor}
            >
                <span className='absolute top-1/2 left-0 transform -translate-y-1/2'>
                    &#11164;
                </span>
                <p className='text-2xl pl-5 text-blue-600 underline'>Doctors</p>
            </div>

            <form className='w-[90%] mx-auto mt-4' onSubmit={HandleAppoinmentBooking}>
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
                            <p><strong>₹</strong> {doctor.rate} </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-start gap-10'>
                    <div className='flex flex-col justify-self-start items-center'>
                        <p className='mb-2 text-lg'>DATE</p>
                        <div className='flex justify-start items-center gap-5 mb-10 mt-5'>
                            {dateList1.map((item, index) => (
                                <div key={index}>
                                    <span
                                        className={`${dateselection === item ? 'bg-amber-400' : 'bg-amber-200'
                                            } rounded-md text-black p-4 cursor-pointer text-xl`}
                                        onClick={() => {
                                            setDateSelection(item);
                                            setTimeSelection(null);
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className='mb-2 text-lg'>TIMINGS</p>
                        <div className='flex justify-start items-center gap-4 mb-5 mt-5 flex-wrap'>
                            {doctor?.availability?.map((time, index) => (
                                <div key={index}>
                                    <span
                                        className={`px-7 rounded-md py-2 ${
                                            doctornonavailabletimeslots.includes(time) ||
                                            (crossedtimeslots.includes(time) && getFormattedDate1(today) === dateselection)
                                                ? "border-2 border-black text-red-600 cursor-not-allowed"
                                                : timeselection === time
                                                    ? "bg-green-900 text-white hover:bg-green-800 cursor-pointer"
                                                    : "bg-green-500 text-gray-950 hover:bg-green-300 cursor-pointer text-xl"
                                        }`}
                                        onClick={() => handletimeselection(time, crossedtimeslots)}
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
                                value={modeofappointment}
                                onChange={(e) => setModeOfAppointment(e.target.value)}
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
                                onClick={handleDeselectDoctor}
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
                    </div>
                    <div className='flex flex-col justify-self-start items-start'>
                        <div><p className='text-lg mb-2'>Reason For Appointment</p></div>
                        <div>
                            <textarea
                                className="bg-amber-100 w-[300px] h-[200px] overflow-y-auto resize-none border-4 rounded-lg border-red-700 p-2 focus:outline-none"
                                placeholder='Enter text here...'
                                ref={reasonref}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Appoinment;
