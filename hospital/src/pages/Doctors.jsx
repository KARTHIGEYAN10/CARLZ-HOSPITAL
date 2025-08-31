import React from 'react'
import Navbar from '../container/navbar'
import gdoctors from '../assets/gdoctors.png'
import cardiac from "../assets/cardiac.jpg"
import dentalsurgery from "../assets/dentalsurgery.jpeg"
import dermatology from "../assets/dermatology.jpeg"
import emergencymedicine from "../assets/emergencymedicine.png"
import entheadneck from "../assets/entheadandneck.png"
import gastro from "../assets/gastro.png"
import hearandlung from "../assets/Heart & Lung Transplant.png"
import heamtology from "../assets/Hematology.png"
import infectiousanddiseasecontrol from "../assets/infectiousanddiseasecontrol.png"
import internalmedicine from  "../assets/internalmedicine.jpg"
import ivf from "../assets/ivf.jpeg"
import laboratoryServiceandBloodBank from "../assets/LaboratoryServiceandBloodBank.png"
import LiverDiseasesTransplant from "../assets/LiverDiseasesTransplant.png"
import nephrology from "../assets/nephrology.png"
import neurology from "../assets/neurology.png"
import neurosurgery from "../assets/neurosurgery.png"
import ophthalmology from "../assets/ophthalmology.jpeg"
import orthopaedics from "../assets/Orthopaedics.png"
import pediatrics from "../assets/pediatrics.png"
import physicatry from "../assets/physicatry.jpeg"
import plasticsurgery from "../assets/plasticsurgery.jpeg"
import rehabilationmedicine from "../assets/rehabilationmedicine.png"
import showlderelbow from "../assets/showlderelbow.png"
import splinesergery from "../assets/splinesergery.png"
import urology from "../assets/urology.png"
import { useNavigate } from 'react-router-dom'
import Footer from '../container/Footer'

const Doctors = () => {
  const navigate=useNavigate()
  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '').replace(/&/g, 'and');
  
  const departments = [
    { img: cardiac, label: "Cardic Science" },
    { img: emergencymedicine, label: "Emergency Medicine" },
    { img: infectiousanddiseasecontrol, label: "Infectious Disease and Infection Control" },
    { img: internalmedicine, label: "Internal Medicine and Alliged Science" },
    { img: neurosurgery, label: "Neurosergery" },
    { img: splinesergery, label: "Spine Surgery" },
    { img: neurology, label: "Neurology" },
    { img: hearandlung, label: "Heart & Lung Transplant and Mechanical Circulatory Support" },
    { img: entheadneck, label: "ENT, Head & Neck surgery" },
    { img: orthopaedics, label: "Orthopaedics" },
    { img: nephrology, label: "Nephrology" },
    { img: urology, label: "Urology" },
    { img: LiverDiseasesTransplant, label: "Liver Diseases, Transplant & HPB Surgery" },
    { img: heamtology, label: "Hematology" },
    { img: laboratoryServiceandBloodBank, label: "Laboratory Service and Blood Bank" },
    { img: rehabilationmedicine, label: "Rehabilitation Medicine" },
    { img: showlderelbow, label: "Shoulder, Elbow, Hand & Sports Injuries" },
    { img: pediatrics, label: "Pediatrics and Neonatology" },
    { img: gastro, label: "Gastroenterology & Hepatology" },
    { img: ophthalmology, label: "Ophthalmolgoy" },
    { img: dentalsurgery, label: "Maxillofacial & Dental Surgery" },
    { img: dermatology, label: "Dermatology" },
    { img: hearandlung, label: "Cardiac Anaesthesia & CT ICU" },
    { img: plasticsurgery, label: "Plastic sergery" },
    { img: physicatry, label: "Psychiatry" },
    { img: ivf, label: "Ivf" }
  ];

  return (
    <>
      <Navbar />
      <div className='w-full'>
      <div className='w-[80%] mx-auto p-5 mt-4 rounded-lg flex flex-col-reverse md:flex-row items-center justify-between  cursor-pointer'
        style={{ backgroundImage: "linear-gradient(to bottom, #edf6f9, #3a3a3a)" }}
      >
        <p className=''>Our doctors are the heart of our hospital — dedicated, compassionate, and highly skilled professionals who work tirelessly to ensure every patient receives the best care possible. Their expertise, empathy, and unwavering commitment to healing make a world of difference in countless lives every day. We are proud to have a team of doctors who not only treat illnesses but also bring hope, comfort, and trust to every patient they meet.</p>
        <img src={gdoctors} className='w-30 h-30' />
      </div>

        <div className="w-full mt-4">
          <p className='text-center border-b-2 w-fit mx-auto'>Consult Doctor By Speciality</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4'>
          {departments.map(({ img, label }, index) => (
            <div
              key={index}
              className='card-hover border rounded-lg p-3 text-center hover:shadow-lg hover:scale-102 hover:bg-amber-400  transition-all duration-500 bg-white cursor-pointer
              '
              onClick={()=>navigate(`/${slugify(label)}`)}
            >
              <img
                src={img}
                alt={label}
                className='w-20 h-20 mx-auto object-cover rounded-full mb-2'
              />
              <p className='text-sm font-medium'>{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Doctors;