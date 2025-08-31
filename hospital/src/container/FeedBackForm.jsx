import React, { useState } from 'react'
import logovideo from "../assets/logovideo-unscreen.gif"
import axios from 'axios'
import toast from 'react-hot-toast'
const FeedBackForm = () => {
    const[formdata,setFormData]=useState({
        name:"",
        phonenumber:"",
        email:"",
        subject:"",
        message:""
    })
    const handledata=(n,v)=>{
        setFormData({...formdata,[n]:v});
        console.log(formdata)
    }
    const handleFeedbackFormSubmit=async(e)=>{
        try{
            e.preventDefault();
            const res=await axios.post("/api/feedback",formdata);
            console.log(res)
            setFormData({
                name:"",
                phonenumber:"",
                email:"",
                message:"",
                subject:""
            })
            toast.success("Feedback sended sucessfully")
        }catch(error){
            console.error(error)
            toast.error(error.message)
        }
    }
  return (
    <form className='w-full  bg-gradient-to-br from-green-400 via-green-500 to-green-700 hover:cursor-pointer p-5'
        onSubmit={handleFeedbackFormSubmit}>
        <div className='w-full text-center'>
            <strong className='text-xl'>FEEDBACK FORM</strong>
        </div>
        <div className='h-[400px] flex flex-row justify-between'>
            {/* left */}
            <div className='w-2/3 flex flex-row justify-around'>
                <div className=''>
                    <label htmlFor="name-id" className='name-class'>
                        <p className='name-class mb-1 text-xl'>Name</p>
                        <input id='name-id' type="text" className='bg-white text-black px-3 py-2 w-full rounded-md outline-none' placeholder='Enter your name' required
                        onChange={(e)=>handledata(e.target.name,e.target.value)} value={formdata.name} name='name'/>
                    </label>
                    <label htmlFor="phone-id" className='phone-class'>
                        <p className='phone-class mt-8 mb-1 text-xl'>Phone no</p>
                        <input type='tel' id="phone-id" className='w-full bg-white text-black px-3 py-2 rounded-md outline-none ' placeholder='Enter your phone number'
                        onChange={(e)=>handledata(e.target.name,e.target.value)} value={formdata.phonenumber} name='phonenumber'/>
                    </label>
                    <label htmlFor="email-id" className='email-class'>
                        <p className='email-class mt-8 mb-1 text-xl'>Email Id</p>
                        <input type='email'id="email-id" className='w-full bg-white text-black px-3 py-2 rounded-md outline-none' placeholder='Enter your email'
                        onChange={(e)=>handledata(e.target.name,e.target.value)} value={formdata.email} name='email' required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="subject-id" className='subject-class'>
                        <p className='subject-class mb-2 text-xl'>Subject</p>
                        <input id='subject-id' type="text" className='bg-white text-black px-3 py-2 w-[300px] rounded-md outline-none' placeholder='Enter subject here' required
                        onChange={(e)=>handledata(e.target.name,e.target.value)} value={formdata.subject} name='subject'/>
                    </label>
                    <label htmlFor="paragraph-id" className='paragraph-class'>
                        <p className='paragraph-class mb-2 mt-2 text-xl'>Message</p>
                        <textarea  id="paragraph-id" className='bg-white text-black px-3 py-2 w-[300px] h-[250px] resize-none rounded-lg outline-none' placeholder='Enter message here'
                        onChange={(e)=>handledata(e.target.name,e.target.value)} value={formdata.message} name='message'></textarea>
                    </label>
                </div>
            </div>
            {/* right */}
            <div className='w-1/3'>
            <img src={logovideo} autoPlay loop muted className='object-contain w-full h-full'/>
            </div>
        </div>
        <div className='w-full text-center'>
            <button type='submit' className='bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-cyan-100'>Submit</button>
        </div>
    </form>
  )
}

export default FeedBackForm