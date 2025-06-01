import React, { useEffect, useState } from 'react';
import logvideo from "../assets/logovideo.mp4";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";
const Register = () => {
  const navigate=useNavigate()
  const [registerinputs,setRegisterInputs]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""  
  })
  const [passsee, setPasssee] = useState(false);
  const handleye = () => setPasssee((prev) => !prev);
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(registerinputs.password !== registerinputs.confirmpassword){
      toast.error("password mismatch")
      return
    }
    try {
      const res = await axios.post("/api/register", registerinputs);
  
      if (res.status === 201) {
        console.log(res)
        toast.success("Registered successfully")
        navigate("/",setInterval(() => {
        }, 3000))
      }
    } catch (error) {
      console.log(error)
      const message = error.response?.data || "Server Error. Try again later.";
      toast.error(message);
    }
  }
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundImage: "linear-gradient(60deg, #edf6f9, #3a3a3a)",
      }}
    >
      <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        
        {/* Video Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ display: "block", lineHeight: 0 }}
          >
            <source src={logvideo} />
          </video>
        </div>

        {/* Form Section */}
        <form className="w-full md:w-1/2 p-6 flex flex-col justify-center"
        onSubmit={handleSubmit}>
          <strong className="mb-3 text-2xl font-semibold">Register</strong>

          <label htmlFor="username-id" className="mb-4">
            <p className="mb-1">Username</p>
            <input
              type="text"
              id="username-id"
              className="rounded-lg w-full p-3 text-lg border"
              value={registerinputs.username}
              onChange={(e)=>setRegisterInputs({...registerinputs,username:e.target.value})}
              required
            />
          </label>

          <label htmlFor="remail-id" className="mb-4">
            <p className="mb-1">Email</p>
            <input
              type="email"
              id="remail-id"
              className="rounded-lg w-full p-3 text-lg border"
              value={registerinputs.email}
              onChange={(e)=>setRegisterInputs({...registerinputs,email:e.target.value})}
              required
            />
          </label>

          <label htmlFor="rpass-id" className="mb-4">
            <p className="mb-1">Password</p>
            <div className="relative">
              <input
                type={passsee ? "text" : "password"}
                id="rpass-id"
                className="rounded-lg w-full p-3 text-lg border"
                value={registerinputs.password}
              onChange={(e)=>setRegisterInputs({...registerinputs,password:e.target.value})}
                required
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 p-3.5 right-0 bg-amber-950 text-white rounded-r-lg cursor-pointer"
                onClick={handleye}
              >
                👁️
              </span>
            </div>
          </label>

          <label htmlFor="rcpass-id" className="mb-4">
            <p className="mb-1">Confirm Password</p>
            <div className="relative">
              <input
                type={passsee ? "text" : "password"}
                id="rcpass-id"
                className="rounded-lg w-full p-3 text-lg border"
                value={registerinputs.confirmpassword}
              onChange={(e)=>setRegisterInputs({...registerinputs,confirmpassword:e.target.value})}
                required
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 p-3.5 right-0 bg-amber-950 text-white rounded-r-lg cursor-pointer"
                onClick={handleye}
              >
                👁️
              </span>
            </div>
          </label>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white mb-3 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
