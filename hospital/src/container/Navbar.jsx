import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useprofilecontext } from '../context/profileContext';
import { useuserdoctorcontext } from '../context/UserContext';

const Navbar = () => {
  const {setAuthUser}=useuserdoctorcontext()
  const {profile}=useprofilecontext()
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handlePage = (value) => {
    if (value === "home"){
      navigate("/home");
    }
    else if (value === "our specialities") navigate("/Our-Specialities");
    else if (value === "schemes"){
      navigate("/treatment-plans");
    }
    else if (value === "careers") navigate("/careers");
    setMobileMenu(false); // close mobile menu on click
  };
  const handlelogout=async()=>{
    try{
      const result=await axios.post("api/logout")
      console.log(result)
      toast.success("Logged Out Successfully")
      localStorage.removeItem("loged_user")
      setAuthUser(null)
    }catch(error){
      toast.error("Error Occured in Logout")
      console.log(error)
    }
  }

  return (
    <div className="w-full bg-black text-white px-4 py-3 flex justify-between items-center relative">
      
      {/* Logo or title */}
      <div className="text-xl font-bold">CARLZ</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {["Home", "Our Specialities", "Schemes", "Careers"].map((item, i) => (
          <div
            key={i}
            onClick={() => handlePage(item.toLowerCase())}
            className="text-lg cursor-pointer hover:text-[#e9d8a6] transition"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMobileMenu(!mobileMenu)}>
        &#9776;
      </div>

      {/* Profile icon */}
      <div className="relative">
        <div
          className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer hover:ring-1 ring-offset-2 ring-offset-white"
          onClick={() =>{
            if(open){
              setOpen(false)
              return
            }
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 5000);
            }
          }
        >
          {profile}
        </div>

        {open && (
          <div className="absolute top-full mt-2 right-0 bg-white text-black border rounded-lg shadow-md w-40 z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>navigate("/userlogs")}>Patient Logs</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handlelogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white text-black mt-2 rounded-md shadow-md md:hidden z-10">
          {["Home", "Our Specialities", "Schemes", "Job"].map((item, i) => (
            <div
              key={i}
              onClick={() => handlePage(item.toLowerCase())}
              className="px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
