import React, { useRef,useState} from 'react'
import Navbar from '../container/navbar'
import logo from '../assets/CARL`Z.png'
const Job = () => {
  const[jobdetails,setjobdetails]=useState({
    role:"",
    fullname:"",
    fathername:"",
    mobilenumber:"",
    email:"",
    maritalstatus:"",
    photo:"",
    dob:"",
    gender:"",
    street:"",
    city:"",
    state:"",
    postalcode:"",
    secondmobilenumber:"",
    resume:""
  })
  const[role,setRole]=useState("")
  const [fullname,setFullname]=useState("")
  const [fathername,setFathername]=useState("")
  const [mobilenumber,setMobilenumber]=useState("")
  const [email,setEmail]=useState("")
  const [maritalstatus,setMaritalstatus]=useState("")
  const [photo,setPhoto]=useState("")
  const [dob,setDob]=useState("")
  const [gender,setGender]=useState("")
  const [street,setStreet]=useState("")
  const [city,setCity]=useState("")
  const[state,setState]=useState("")
  const [postalcode,setPostalcode]=useState("")
  const [secondmobilenumber,setSecondmobilenumber]=useState("")
  const [resume,setResume]=useState("")
  const handlePhotoChange = (e) => {
    const file = e.target.files[0]; 
    setPhoto(file);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(jobdetails)
  }
  return (
    <>
    <Navbar />
    <div className='w-full pb-5'>
      <form className='w-[90%] mt-3 mx-auto flex flex-col items-start gap-4 md:items-start justify-between md:flex-row overflow-hidden' onSubmit={handleSubmit}>
        <div className=''>
          <img src={logo}/>
          <p className='mt-2'>For any Queries</p>
          <strong className='mt-1'>Contact us,</strong>
          <p className='mt-2'>HR Department:  <strong>+91 6374346339</strong></p>
          <p>Email: <strong>carlz@gmail.com</strong></p>
          <p>Telephone/Landline: <strong>044 2026 2026</strong></p>
          <p>Address: <strong>No:7/10 vadapalani,chennai,India</strong></p>
        </div>
        <div className='w-[90%] flex flex-col justify-between items-start p-4 border-1 rounded-lg overflow-hidden'>
          <strong className='border border-black w-full p-2'>Apply For Job</strong>
          <label htmlFor="options" className="mt-3">Role Preference:</label>
          <select
            id="options"
            className="border border-gray-400 rounded px-5 overflow-y-auto" 
            value={role}
            onChange={(e)=>setRole(e.target.value)}>
            <option value="">Select</option>
            <option value="Neurologists">Neurologists</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Physiotherapists">Physiotherapists</option>
            <option value="ENT Specialists">ENT Specialists</option>
            <option value="HR Manager">HR Manager</option>
            <option value="General Physicians">General Physicians</option>
            <option value="Emergency Nurses">Emergency Nurses</option>
          </select>
          <label htmlFor='name-id' className='name mt-5'>
            <strong className='name  w-10' required>Full Name<sup className='text-red-700'>*</sup></strong>
            <input id='name-id' type='text' className='text-xl p-1 border border-gray-300 rounded-sm  mt-2 w-full'value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
          </label>
          <label htmlFor='fname-id' className='fname'>
            <strong className='fname mt-2 w-10'required>Father Name</strong>
            <input id='fname-id' type='text' className='text-xl p-1 border border-gray-300 rounded-sm w-full  mt-2' value={fathername} onChange={(e)=>setFathername(e.target.value)}/>
          </label>
          <label htmlFor='mobile-id' className='mobile'>
            <strong className='mobile mt-2 w-fit block'>Mobile No<sup className='text-red-700'>*</sup></strong>
            <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg pointer-events-none">
                      +91
                      </span>
                      <input
                        id="mobile-id"
                        type="tel"
                        className="text-xl border border-gray-300 rounded-sm pl-14 pr-4 py-2 w-full"
                        pattern="[6-9]{1}[0-9]{9}"
                        maxLength={10}
                        value={mobilenumber}
                        onChange={(e) => setMobilenumber(e.target.value)}
                        required
                      />
                    </div>
          </label>
          <label htmlFor='email-id' className='email'>
            <strong className='email mt-2 w-10'>Email<sup className='text-red-700'>*</sup></strong>
            <input id='email-id' type='email' className='text-xl p-1 border border-gray-300 rounded-sm  w-full mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </label>
          <div className='flex justify-between items-start mt-4'>
          <div>
          <strong>Marital Status</strong>
          </div>
          <div className='flex flex-col gap-2 ml-3'>
            <label htmlFor="single-id" className='flex items-center gap-2'>
              <input type='radio' id='single-id' name="maritalStatus" value="single" checked={maritalstatus === "single"} onChange={(e)=>setMaritalstatus(e.target.value)}/>
              <span>Single</span>
            </label>
            <label htmlFor="marriage-id" className='flex items-center gap-2'>
              <input type='radio' id='marriage-id' name="maritalStatus" value="married" checked={maritalstatus === "married"} onChange={(e)=>setMaritalstatus(e.target.value)}/>
              <span>Married</span>
            </label>
            <label htmlFor="divorce-id" className='flex items-center gap-2'>
              <input type='radio' id='divorce-id' name="maritalStatus" value="separated" checked={maritalstatus === "separated"} onChange={(e)=>setMaritalstatus(e.target.value)}/>
              <span>Separated/Divorced</span>
            </label>
         </div>
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="photo-upload" className="font-semibold mb-1">
              Upload Photo <sup className="text-red-700">*</sup>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered bg-blue-400 p-2 rounded-sm ml-3 cursor-pointer w-60"
          onChange={handlePhotoChange}/>
        </div>
        <label htmlFor='dob-id' className='dob'>
          <strong className='dob'>Date of Bith</strong>
          <input type='date' id='dob-id' className='ml-3 mt-2 border border-gray-300 rounded-sm' value={dob} onChange={(e)=>setDob(e.target.value)}/>
        </label>
        <div className='flex justify-between items-start mt-4'>
          <div>
          <strong>Gender</strong>
          </div>
          <div className='flex flex-col gap-2 ml-3'>
            <label htmlFor="male-id" className='flex items-center gap-2'>
              <input type='radio' id='male-id' name="gender" value="male" checked={gender === "male"} onChange={(e)=>setGender(value)}/>
              <span>Male</span>
            </label>
            <label htmlFor="female-id" className='flex items-center gap-2'>
              <input type='radio' id='female-id' name="gender" value="female" checked={gender === "female"} onChange={(e)=>setGender(value)}/>
              <span>Female</span>
            </label>
            <label htmlFor="nottosay-id" className='flex items-center gap-2'>
              <input type='radio' id='nottosay-id' name="gender" value="prefer not to say" checked={gender === "prefer not to say"} onChange={(e)=>setGender(e.target.value)}/>
              <span>Prefer not to say</span>
            </label>
         </div>
        </div>
        <label htmlFor='street-id' className='street'>
          <strong className='street'>Street</strong>
          <input id='street-id' className='p-2 border border-gray-300 rounded-sm w-full mt-2' type='text' value={street} onChange={(e)=>setStreet(e.target.value)}/>
        </label>
        <label htmlFor='city-id' className='city'>
          <strong className='city'>City/District</strong>
          <input id='city-id' className='p-2 border border-gray-300 rounded-sm w-full mt-2' type='text' value={city} onChange={(e)=>setCity(e.target.value)}/>
        </label>
        <label htmlFor='state-id' className='state'>
          <strong className='state'>State</strong>
          <input id='state-id' className='p-2 border border-gray-300 rounded-sm w-full mt-2' type='text'value={state} onChange={(e)=>setState(e.target.value)}/>
        </label>
        <label htmlFor='postal-id' className='postal'>
          <strong className='postal'>Postal code</strong>
          <input id='postal-id' className='p-2 border border-gray-300 rounded-sm w-full mt-2' type='text' value={postalcode} onChange={(e)=>setPostalcode(e.target.value)}/>
        </label>
        <label htmlFor='second-mobile-id' className='second-mobile'>
          <strong className='second-mobile mt-2 w-10'>Second Mobile No</strong>
          <div className='relative mt-2'>
            <span className='absolute top-1/2 left-3 transform -translate-y-1/2 text-lg pointer-events-none text-gray-600'>+91</span>
            <input id='second-mobile-id' type='tele' className='text-xl border border-gray-300 rounded-sm pl-14 pr-4 py-2 w-full' pattern='[6-9]{1}[0-9]{9}' maxLength={10} value={secondmobilenumber} onChange={(e)=>setSecondmobilenumber(e.target.value)}/>
          </div>
        </label>
        <label htmlFor='resume-id' className='resume'>
          <strong className='resume'>Resume(pdf)<sup className='text-red-800'>*</sup></strong>
          <input id='resume-id' type='file' accept='application/pdf' className='bg-blue-400 p-2 rounded-sm ml-3 mt-2 cursor-pointer w-60'  onChange={handleResumeChange}/>
        </label>
        <div className='w-full flex justify-center mt-2'>
        <button className='rounded-sm px-5 py-2 cursor-pointer text-center block bg-green-600 active:scale-110 transition-all duration-100'
        type='submit'>Apply</button>
        </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Job