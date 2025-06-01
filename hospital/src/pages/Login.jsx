import React, { useState } from 'react';
import logovideo from "../assets/logovideo.mp4";
import { Link } from "react-router-dom";
import googleimg from "../assets/google.png";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useuserdoctorcontext } from '../context/UserContext';
import { useprofilecontext } from '../context/profileContext';
import { GoogleLogin } from '@react-oauth/google'; 

const Login = () => {
  const { setAuthUser } = useuserdoctorcontext();
  const { setProfile } = useprofilecontext();
  const [passshow, setPassshow] = useState(false);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  }); 

  const handleeye = () => {
    setPassshow((show) => !show);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", logindata);
      if (res.status === 201) {
        toast.success("Successfully Logged In");
        console.log(res.data);
        localStorage.setItem("loged_user", JSON.stringify(res.data));
        const user = JSON.parse(localStorage.getItem("loged_user"));
        setProfile(user.email[0]);
        setAuthUser(JSON.parse(localStorage.getItem("loged_user")));
      }
    } catch (error) {
      toast.error(error.response?.data);
      console.log(error);
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log(response)
    const credential = response.credential;
  
   
    axios.post('/api/google-login', { token: credential })
      .then((res) => {
        toast.success("Google login successful");
  
        
        localStorage.setItem("loged_user", JSON.stringify(res.data));  
  
        
        const user = JSON.parse(localStorage.getItem("loged_user"));
        setProfile(user.email[0].toUpperCase()) 
  
        setAuthUser(user);  
      })
      .catch((err) => {
        toast.error("Google login failed");
        console.error(err);
      });
  };
  

  const handleGoogleLoginFailure = (error) => {
    toast.error("Google login failed");
    console.error(error);
  };

  return (
    <div className="w-full min-h-screen bg-amber-500 flex items-center justify-center p-4">
      <div className=" w-full max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        <div className="md:w-1/2 w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-60 md:h-full object-cover"
          >
            <source src={logovideo} />
          </video>
        </div>
        <form
          className="md:w-1/2 w-full p-6 bg-white flex flex-col justify-center"
          onSubmit={handlesubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Signup</h2>

          <label htmlFor="email-id" className="mb-4">
            <p className="mb-1">Email ID</p>
            <input
              type="email"
              id="email-id"
              className="border p-2 rounded w-full"
              value={logindata.email}
              onChange={(e) =>
                setLogindata({ ...logindata, email: e.target.value })
              }
              required
            />
          </label>

          {/* Password with eye icon */}
          <label htmlFor="password-id" className="mb-2">
            <p className="mb-1">Password</p>
            <div className="relative">
              <input
                type={passshow ? "text" : "password"}
                id="password-id"
                className="border p-2 rounded w-full pr-10"
                value={logindata.password}
                onChange={(e) =>
                  setLogindata({ ...logindata, password: e.target.value })
                }
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => handleeye()}
              >
                👁️
              </span>
            </div>
          </label>
          <Link to="/forget" className="mb-2">
            <span className="text-blue-600">Forget password?</span>
          </Link>
          
          <button
            className="bg-amber-500 hover:bg-amber-600 transition-colors text-white font-semibold py-2 px-4 rounded mb-2"
            type="submit"
          >
            Sign Up
          </button>
          
          <GoogleLogin 
            onSuccess={handleGoogleLoginSuccess} 
            onError={handleGoogleLoginFailure} 
            useOneTap 
          />
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
