import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../container/navbar';
import Footer from '../container/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

const GeneralAppointment = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [formdata,setFormData]=useState({
    name:"",
    age:"",
    gender:"",
    dob:"",
    contactnumber:"",
    emailaddress:"",
    appointmenttype:"",
  })
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    try{
        e.preventDefault();
        const final={...formdata,currentdatetime:currentDateTime}
        console.log("form submitted",final);
        const res=await axios.post("/api/general-appointment",formdata);
        toast.success(res.data)
        console.log(res)
    }catch(error){
      toast.error(error);
      console.log(error);
    }

  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const offset = now.getTimezoneOffset();
      const localDate = new Date(now.getTime() - offset * 60 * 1000);
      const formatted = localDate.toISOString().slice(0, 16);
      setCurrentDateTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#094074] flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows and pushes footer to bottom */}
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="flex flex-col md:flex-row w-[90%] md:w-[75%] lg:w-[60%] mx-auto gap-1 md:gap-0">
          
          {/* Left Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleFormSubmit} className="md:h-[500px] overflow-y-scroll bg-[#eff2f1] px-3">
              <p className="text-center mt-2 font-serif font-semibold">General Appointment</p>

              {/* Name */}
              <label htmlFor="name-id">
                <p className="text-lg font-mono font-bold mt-3">Name</p>
                <input type="text" placeholder="Enter patient name" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="name-id" required
                onChange={(e)=>setFormData({...formdata,name:e.target.value})} value={formdata.name}/>
              </label>

              {/* Age */}
              <label htmlFor="age-id">
                <p className="text-lg font-mono font-bold mt-4">Age</p>
                <input type="number" placeholder="Enter patient age" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="age-id" required 
                onChange={(e)=>setFormData({...formdata,age:e.target.value})} value={formdata.age}/>
              </label>

              {/* Gender */}
              <label htmlFor="gender-id">
                <p className="text-lg font-mono font-bold mt-4">Gender</p>
                <select name="gender" id="gender-id" className="block w-full bg-gray-400 text-lg"
                onChange={(e)=>setFormData({...formdata,gender:e.target.value})} value={formdata.gender}>
                  <option value="">Select any option</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </label>

              {/* DOB */}
              <label htmlFor="dob-id">
                <p className="text-lg font-mono font-bold mt-4">Dob</p>
                <input type="date" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="dob-id" required 
                onChange={(e)=>setFormData({...formdata,dob:e.target.value})} value={formdata.dob}/>
              </label>

              {/* Phone */}
              <label htmlFor="phone-id">
                <p className="text-lg font-mono font-bold mt-4">Contact number</p>
                <input type="number" placeholder="Enter phone number" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="phone-id" required 
                onChange={(e)=>setFormData({...formdata,contactnumber:e.target.value})} value={formdata.contactnumber}/>
              </label>

              {/* Email */}
              <label htmlFor="email-id">
                <p className="text-lg font-mono font-bold mt-4">Email Address</p>
                <input type="email" placeholder="Enter patient email" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="email-id" required 
                onChange={(e)=>setFormData({...formdata,emailaddress:e.target.value})} value={formdata.emailaddress}/>
              </label>

              {/* Appointment Type */}
              <label htmlFor="appointment-id">
                <p className="text-lg font-mono font-bold mt-4">Appointment Type</p>
                <select name="app-type" id="appointment-id" className="block w-full bg-gray-400 text-lg"
                onChange={(e)=>setFormData({...formdata,appointmenttype:e.target.value})} value={formdata.appointmenttype}>
                  <option value="">Select type of appointment</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Child Health / Pediatric Queries">Child Health / Pediatric Queries</option>
                  <option value="Women’s Health Queries">Women’s Health Queries</option>
                  <option value="Senior Citizen / Geriatric Care">Senior Citizen / Geriatric Care</option>
                  <option value="Preventive Health Check-ups">Preventive Health Check-ups</option>
                  <option value="Minor Injuries & First Aid">Minor Injuries & First Aid</option>
                  <option value="Vaccination & Immunization">Vaccination & Immunization</option>
                  <option value="Lifestyle & Wellness">Lifestyle & Wellness</option>
                </select>
              </label>

              {/* Current Date/Time */}
              <label htmlFor="curdate-id">
                <p className="text-lg font-mono font-bold mt-4">Current Date/Time</p>
                <input type="datetime-local" className="bg-blue-300 px-3 py-2 text-lg block w-full" id="curdate-id" value={currentDateTime} readOnly 
                />
              </label>

              <div className="text-center mt-4 mb-5">
                <button type="submit" className="px-5 py-2 font-sans font-bold text-white rounded-lg bg-green-500 hover:bg-green-400">Submit</button>
              </div>
            </form>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#eff2f1] p-4">
            <p className="mb-3">Do you want to get appointment/consult based on speciality?</p>
            <span
              className="px-3 py-2 bg-[#bfdbf7] rounded-lg cursor-pointer"
              onClick={() => navigate("/Our-Specialities")}
            >
              Consult by speciality
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GeneralAppointment;
