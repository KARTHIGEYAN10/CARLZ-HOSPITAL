import React from 'react'
import Navbar from '../container/Navbar'
import Footer from '../container/Footer'
import Children from '../schemescontainer/Children'
import Women from '../schemescontainer/Women'
import { MdWoman } from 'react-icons/md'
import SeniorCitizen from '../schemescontainer/SeniorCitizen'
import Yearly from '../schemescontainer/Yearly'

const TreatmentPlans = () => {
  return (
    <div>
    <Navbar/>
    <p className='w-full mt-10 text-4xl font-serif font-semibold text-center'>Healthcare Packages</p>
    <div className='mb-20'>
      <div className='mt-10 w-[95%] mx-auto'>
      <p className='text-3xl font-semibold mb-10'>For Childrens</p>
        <Children/>
    </div>
    <div className='mt-10 w-[95%] mx-auto'>
      <p className='text-3xl font-semibold mb-10'>For Womens</p>
        <Women/>
    </div>
    <div className='mt-10 w-[95%] mx-auto'>
      <p className='text-3xl font-semibold mb-10'>For Senior Citizens</p>
        <SeniorCitizen/>
    </div>
    <div className='mt-10 w-[95%] mx-auto'>
      <p className='text-3xl font-semibold mb-10'>For Yearly</p>
        <Yearly/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default TreatmentPlans