import React from 'react'
import Navbar from '../container/Navbar'
import gdoctors from '../assets/gdoctors.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../container/Footer'
import { FaSearch } from "react-icons/fa";   // FontAwesome
import { MdSearch } from "react-icons/md";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Doctors = () => {
  const navigate=useNavigate()
  const [domainnames,setDomainnames]=useState([]);
  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '').replace(/&/g, 'and');
  const[domainsearch,setDomainsearch]=useState('');
  const domainapicall=async()=>{
    try{
      const res=await axios.get("/api/domain")
      console.log(res.data);
      setDomainnames(res.data)
    }catch(error){
      console.log(error)
    }
  }
  const filtering=(v)=>{
    const data=v.toLowerCase();
    if(data == ""){
      domainapicall()
    }
    setDomainsearch(data);
    const filterednames=domainnames.filter(item => item.label.toLowerCase().startsWith(data));
    setDomainnames(filterednames);
  }
  
  useEffect(()=>{
    domainapicall()
  },[])
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='w-full'>
      <div className='w-[80%] mx-auto p-5 mt-4 rounded-lg flex flex-col-reverse md:flex-row items-center justify-between  cursor-pointer'
        style={{ backgroundImage: "linear-gradient(to bottom, #edf6f9, #3a3a3a)" }}
      >
        <p className=''>Our doctors are the heart of our hospital — dedicated, compassionate, and highly skilled professionals who work tirelessly to ensure every patient receives the best care possible. Their expertise, empathy, and unwavering commitment to healing make a world of difference in countless lives every day. We are proud to have a team of doctors who not only treat illnesses but also bring hope, comfort, and trust to every patient they meet.</p>
        <img src={gdoctors} className='w-30 h-30' />
      </div>

        <div className="w-full mt-7">
          <p className='text-center text-xl rowdies-regular w-fit mx-auto'>Consult Doctor By Speciality</p>
        </div>
        <div className='w-[200px] h-1 bg-gray-400 mx-auto'></div>
        <div className='mt-10 '>
          <div className='relative w-full text-center'>
            <input type="text" placeholder='Search for domain..' className='bg-[#ebebeb] w-[400px] py-2 px-3 outline-none rounded-2xl cursor-pointer'
            onChange={(e)=>{filtering(e.target.value);
            }} value={domainsearch}/>
            <MdSearch className='text-black text-xl cursor-pointer absolute top-1/2 right-1/2 transform translate-x-45 -translate-y-1/2'/>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4'>
          {domainnames.map((item, index) => (
            <div
              key={index}
              className='card-hover border rounded-lg p-3 text-center hover:shadow-lg hover:scale-102 hover:bg-amber-400  transition-all duration-500 bg-white cursor-pointer
              '
              onClick={()=>{navigate(`/${slugify(item.label)}`);
            console.log(slugify(item.label))}}
            >
              <img
                src={item.img}
                alt={item.label}
                className='w-20 h-20 mx-auto object-cover rounded-full mb-2'
              />
              <p className='text-sm font-medium'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Doctors;