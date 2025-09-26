import React, { useState } from 'react';
import Navbar from '../container/Navbar';
import logo from '../assets/CARL`Z.png';
import axios from 'axios';
import Footer from '../container/Footer';
import toast from 'react-hot-toast';

const Job = () => {
  const [jobdetails, setjobdetails] = useState({
    role: "",
    fullname: "",
    fathername: "",
    mobilenumber: "",
    email: "",
    maritalstatus: "",
    photo: "",
    dob: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    postalcode: "",
    secondmobilenumber: "",
    resume: ""
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setjobdetails({ ...jobdetails, photo: file });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setjobdetails({ ...jobdetails, resume: file });
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      let res = await axios.post("/api/jobapply", jobdetails);
      toast.success("Job applied sucessfully")
      console.log(res);
    }catch(error){
      toast.error(error.message)
      console.log(error)
    }
  };

  const handlereset = () => {
    setjobdetails({
      role: "",
      fullname: "",
      fathername: "",
      mobilenumber: "",
      email: "",
      maritalstatus: "",
      photo: "",
      dob: "",
      gender: "",
      street: "",
      city: "",
      state: "",
      postalcode: "",
      secondmobilenumber: "",
      resume: ""
    });
  };

  const inputClass =
    "text-xl p-2 border border-black rounded-sm w-full mt-2";

  return (
    <>
      <Navbar />
      <div className="w-full pb-5">
        <form
          className="w-[90%] mt-3 mx-auto flex flex-col items-start gap-4 md:flex-row overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* LEFT SECTION */}
          <div>
            <img src={logo} alt="Logo" />
            <p className="mt-2">For any Queries</p>
            <strong className="mt-1">Contact us,</strong>
            <p className="mt-2">
              HR Department: <strong>+91 6374346339</strong>
            </p>
            <p>
              Email: <strong>carlz@gmail.com</strong>
            </p>
            <p>
              Telephone/Landline: <strong>044 2026 2026</strong>
            </p>
            <p>
              Address:{" "}
              <strong>No:7/10 vadapalani, Chennai, India</strong>
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-[90%] flex flex-col justify-between items-start p-4 border rounded-lg overflow-hidden ">
            <strong className="border border-black w-full p-2 bg-amber-200">
              Apply For Job
            </strong>

            {/* Role Preference */}
            <label htmlFor="options" className="mt-3">
              Role Preference:
            </label>
            <select
              id="options"
              className={inputClass}
              value={jobdetails.role}
              onChange={(e) =>
                setjobdetails({ ...jobdetails, role: e.target.value })
              }
            >
              <option value="">Select any role</option>
              <option value="Neurologists">Neurologists</option>
              <option value="Cardiologists">Cardiologists</option>
              <option value="Physiotherapists">Physiotherapists</option>
              <option value="ENT Specialists">ENT Specialists</option>
              <option value="HR Manager">HR Manager</option>
              <option value="General Physicians">General Physicians</option>
              <option value="Emergency Nurses">Emergency Nurses</option>
            </select>

            {/* Full Name */}
            <label htmlFor="name-id" className="mt-3 w-full">
              Full Name <sup className="text-red-700">*</sup>
              <input
                id="name-id"
                type="text"
                className={inputClass}
                value={jobdetails.fullname}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, fullname: e.target.value })
                }
                placeholder='Enter your Full name'
                required
              />
            </label>

            {/* Father Name */}
            <label htmlFor="fname-id" className="mt-3 w-full">
              Father Name
              <input
                id="fname-id"
                type="text"
                className={inputClass}
                value={jobdetails.fathername}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, fathername: e.target.value })
                }
                placeholder='Enter your Father name'
              />
            </label>

            {/* Mobile */}
            <label htmlFor="mobile-id" className="mt-3 w-full">
              Mobile No <sup className="text-red-700">*</sup>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg pointer-events-none">
                  +91
                </span>
                <input
                  id="mobile-id"
                  type="tel"
                  className={`${inputClass} pl-14`}
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  value={jobdetails.mobilenumber}
                  onChange={(e) =>
                    setjobdetails({
                      ...jobdetails,
                      mobilenumber: e.target.value
                    })
                  }
                  required
                />
              </div>
            </label>

            {/* Email */}
            <label htmlFor="email-id" className="mt-3 w-full">
              Email <sup className="text-red-700">*</sup>
              <input
                id="email-id"
                type="email"
                className={inputClass}
                value={jobdetails.email}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, email: e.target.value })
                }
                placeholder='Enter your email'
                required
              />
            </label>

            {/* Marital Status */}
            <div className="mt-4 w-full">
              <strong>Marital Status</strong>
              <div className="flex flex-col gap-2 mt-2">
                {["single", "married", "separated"].map((status, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value={status}
                      checked={jobdetails.maritalstatus === status}
                      onChange={() =>
                        setjobdetails({ ...jobdetails, maritalstatus: status })
                      }
                    />
                    <span>
                      {status === "single"
                        ? "Single"
                        : status === "married"
                        ? "Married"
                        : "Separated/Divorced"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photo */}
            <label htmlFor="photo-upload" className="mt-3 w-full">
              Upload Photo <sup className="text-red-700">*</sup>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className={inputClass}
                onChange={handlePhotoChange}
              />
            </label>

            {/* DOB */}
            <label htmlFor="dob-id" className="mt-3 w-full">
              Date of Birth
              <input
                type="date"
                id="dob-id"
                className={inputClass}
                value={jobdetails.dob}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, dob: e.target.value })
                }
              />
            </label>

            {/* Gender */}
            <div className="mt-4 w-full">
              <strong>Gender</strong>
              <div className="flex flex-col gap-2 mt-2">
                {["male", "female", "prefer not to say"].map((g, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={jobdetails.gender === g}
                      onChange={() =>
                        setjobdetails({ ...jobdetails, gender: g })
                      }
                    />
                    <span>
                      {g === "male"
                        ? "Male"
                        : g === "female"
                        ? "Female"
                        : "Prefer not to say"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Street */}
            <label htmlFor="street-id" className="mt-3 w-full">
              Street
              <input
                id="street-id"
                type="text"
                className={inputClass}
                value={jobdetails.street}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, street: e.target.value })
                }
                placeholder='Enter your street'
              />
            </label>

            {/* City */}
            <label htmlFor="city-id" className="mt-3 w-full">
              City/District
              <input
                id="city-id"
                type="text"
                className={inputClass}
                value={jobdetails.city}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, city: e.target.value })
                }
                placeholder='Enter your city'
              />
            </label>

            {/* State */}
            <label htmlFor="state-id" className="mt-3 w-full">
              State
              <input
                id="state-id"
                type="text"
                className={inputClass}
                value={jobdetails.state}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, state: e.target.value })
                }
                placeholder='Enter your state'
              />
            </label>

            {/* Postal Code */}
            <label htmlFor="postal-id" className="mt-3 w-full">
              Postal code
              <input
                id="postal-id"
                type="text"
                className={inputClass}
                value={jobdetails.postalcode}
                onChange={(e) =>
                  setjobdetails({ ...jobdetails, postalcode: e.target.value })
                }
                placeholder='Enter your pin code'
              />
            </label>

            {/* Second Mobile */}
            <label htmlFor="second-mobile-id" className="mt-3 w-full">
              Second Mobile No
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg pointer-events-none bg-">
                  +91
                </span>
                <input
                  id="second-mobile-id"
                  type="tel"
                  className={`${inputClass} pl-14`}
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  value={jobdetails.secondmobilenumber}
                  onChange={(e) =>
                    setjobdetails({
                      ...jobdetails,
                      secondmobilenumber: e.target.value
                    })
                  }
                />
              </div>
            </label>

            {/* Resume */}
            <label htmlFor="resume-id" className="mt-3 w-full">
              Resume (PDF) <sup className="text-red-800">*</sup>
              <input
                id="resume-id"
                type="file"
                accept="application/pdf"
                className={inputClass}
                onChange={handleResumeChange}
              />
            </label>

            {/* Buttons */}
            <div className="w-full flex justify-center items-center mt-4 gap-4">
              <button
                className="rounded-sm px-5 py-2 font-medium cursor-pointer text-center bg-green-600 active:scale-110 transition-all duration-100 hover:bg-green-500"
                type="submit"
              >
                Apply
              </button>
              <button
                className="rounded-sm px-5 py-2 font-medium cursor-pointer text-center bg-red-600 active:scale-110 transition-all duration-100 hover:bg-red-500"
                type="button"
                onClick={handlereset}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default Job;
