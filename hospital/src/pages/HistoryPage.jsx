import React from 'react'
import Navbar from '../container/navbar'
import Footer from '../container/Footer'
import hospitalimg from "../assets/hospital.jpeg"
import ambulanceimg from "../assets/ambulance.jpg"
import infrastructureimg from "../assets/8.jpeg";
import groupofdoctors from "../assets/gdoctors.png"
const HistoryPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='mx-auto'>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-3/5 xl:w-4/6 flex flex-col justify-center items-center bg-[#e63946]  sm:rounded-r-full xl:p-7 md:p-10'>
            <strong className='text-2xl mb-10'>Our Hospital</strong>
                <p>Carlz AI Hospital was founded in 2025 by Karthigeyan, with a vision to merge cutting-edge technology with compassionate healthcare. From its inception, the hospital has aimed to provide world-class medical services while harnessing the power of artificial intelligence to enhance patient care, diagnostics, and hospital management.<span className='md:hidden'>Over the years, Carlz AI Hospital has grown into a trusted institution, known for its state-of-the-art facilities, dedicated medical professionals, and a commitment to innovating healthcare solutions. Our AI-driven systems ensure efficient patient management, accurate diagnostics, and a personalized healthcare experience for everyone who walks through our doors.</span>
                </p>
                <strong className='mt-5 '>Caring for Life, Healing with Heart.</strong>
                <p>~ Karthigeyan B, Founder & CEO</p>
            </div>
            <div className='w-full md:w-2/5 xl:w-2/6'>
              <img src={hospitalimg} alt="" className='w-full h-100 object-fill'/>
            </div>
        </div>
        <div className='flex flex-row flex-wrap-reverse'>
          <div className='w-full md:w-2/5 xl:w-2/6'>
              <img src={ambulanceimg} alt="" className='w-full h-100 object-fill'/>
            </div>
            <div className='w-full md:w-3/5 xl:w-4/6 flex flex-col justify-center items-center bg-amber-200 sm:rounded-l-full p-7 '>
                <strong className='text-2xl mb-10'>Our Services</strong>
                <p className='md:px-5'>At Carlz Hospital, our mission is to save lives with speed and precision. We pride ourselves on providing rapid and efficient medical care, ensuring that every patient receives timely attention in emergencies. Our state-of-the-art operation theaters are equipped for quick interventions, while our ambulance service ensures that patients reach us safely and swiftly, no matter the distance.<span className='md:hidden'>Every service is delivered with compassion, expertise, and a commitment to making every second count when it comes to health and well-being.</span></p>
            </div>
        </div>
        <div className='flex flex-row flex-wrap'>
          <div className='w-full md:w-3/5 xl:w-4/6 flex flex-col justify-center items-center bg-[#e63946] sm:rounded-r-full p-7'>
                <strong className='text-2xl mb-10'>Our Infrastructures</strong>
                <p>At Carlz Hospital, we are committed to providing world-class healthcare through state-of-the-art infrastructure and modern facilities. Our hospital is equipped with advanced diagnostic tools, fully functional operation theaters, and specialized departments to cater to a wide range of medical needs. We offer comfortable patient rooms, a well-stocked pharmacy, and 24/7 emergency services, including a rapid-response ambulance fleet.<span className='md:hidden'>Our cutting-edge technology, combined with a skilled team of doctors and support staff, ensures efficient, safe, and compassionate care for every patient. From routine check-ups to critical surgeries, Carlz Hospital is designed to deliver excellence in healthcare at every step.</span></p>
            </div>
          <div className='w-full md:w-2/5 xl:w-2/6'>
              <img src={infrastructureimg} alt="" className='w-full h-100 object-fill'/>
            </div>
        </div>
        <div className='flex flex-row flex-wrap-reverse'>
          <div className='w-full md:w-2/5 xl:w-2/6'>
              <img src={groupofdoctors} alt="" className='w-full h-100 object-fill'/>
            </div>
            <div className='w-full md:w-3/5 xl:w-4/6 flex flex-col justify-center items-center bg-amber-200 sm:rounded-l-full p-7'>
                <strong className='text-2xl mb-10'>Our Support</strong>
                <p className='md:ml-6'>At Carlz Hospital, our doctors and support staff are dedicated to providing compassionate and personalized care to every patient. Each member of our team combines medical expertise with empathy, ensuring that patients feel heard, supported, and safe throughout their treatment journey. From routine consultations to critical care, our professionals work tirelessly to deliver accurate diagnoses, effective treatments, and continuous monitoring.<span className='md:hidden'>With a focus on both physical and emotional well-being, our hospital staff ensures that every patient receives care with respect, kindness, and unwavering attention.</span></p>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HistoryPage