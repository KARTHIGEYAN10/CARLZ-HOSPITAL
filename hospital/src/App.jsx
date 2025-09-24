import { useEffect, useState } from 'react'
import {Navigate,Route,Routes, useNavigate} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import './App.css'
import Home from './pages/Home'
import Job from './pages/Job'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Register from './pages/Register'
import Userlogs from './user/Userlogs'
import Cardiac from './specialitydoctors/Cardiac'
import EmergencyMedicine from './specialitydoctors/EmergencyMedicine'
import EntHeadNeckSurgery from './specialitydoctors/EntHeadNeckSurgery'
import HeadLungTransplant from './specialitydoctors/HeadLungTransplant'
import InfectiousDiseaseandControl from './specialitydoctors/InfectiousDiseaseandControl'
import InternalMedicine from './specialitydoctors/InternalMedicine'
import Neurology from './specialitydoctors/Neurology'
import Neurosurgery from './specialitydoctors/Neurosurgery'
import Orthopaedics from './specialitydoctors/Orthopaedics'
import Spinesurgery from './specialitydoctors/Spinesurgery'
import Nephrology from './specialitydoctors/Nephrology'
import Urology from './specialitydoctors/Urology'
import LiverTransplantandHpbsurgery from './specialitydoctors/LiverTransplantandHpbsurgery'
import Hematology from './specialitydoctors/Hematology'
import BloodBank from './specialitydoctors/BloodBank'
import RehabillitationMedicine from './specialitydoctors/RehabillitationMedicine'
import ShoulderElbowInjuries from './specialitydoctors/ShoulderElbowInjuries'
import PediatricsandNeonatology from './specialitydoctors/PediatricsandNeonatology'
import GastroenterologyandHepatology from './specialitydoctors/GastroenterologyandHepatology'
import Ophthalmology from './specialitydoctors/Ophthalmology'
import MaxillofacialandDentalSurgery from './specialitydoctors/MaxillofacialandDentalSurgery'
import Dermatology from './specialitydoctors/Dermatology'
import CardiacAnaesthesiaandCTICU from './specialitydoctors/CardiacAnaesthesiaandCTICU'
import PlasticSurgery from './specialitydoctors/PlasticSurgery'
import Psychiatry from './specialitydoctors/Psychiatry'
import Ivf from './specialitydoctors/Ivf'
import Appoinment from './pages/Appoinment'
import { useuserdoctorcontext } from './context/UserContext'
import HistoryPage from './pages/HistoryPage'
import GeneralAppointment from './pages/GeneralAppointment'
import TreatmentPlans from './pages/TreatmentPlans'

function App() {
  const {authuser,doctor}=useuserdoctorcontext()
  return (
    <>
    <Toaster position='top-center'toastOptions={{
          duration: 3000, 
        }}/>
    <Routes>
      <Route path='/' element={authuser ? <Navigate to="/home" /> : <Login />}/>
      <Route path='/careers' element={authuser ? <Job /> : <Navigate to="/" /> }/>
      <Route path='/Our-Specialities' element={authuser ? <Doctors /> : <Navigate to="/"/>}/>
      <Route path='/home' element={authuser ? <Home /> : <Navigate to="/"/>}/> 
      <Route path='/register' element={authuser ? <Navigate to="/"/> :<Register />} />
      <Route path='/userlogs' element={authuser ? <Userlogs /> : <Navigate to="/" />}/>
      <Route path='/history' element={authuser ? <HistoryPage /> : <Navigate to="/"/>}/>
      <Route path='/cardiac' element={doctor ? <Navigate to="/appointment"/> :<Cardiac />} />
      <Route path="/emergency-medicine" element={doctor ? <Navigate to="/appointment"/> : <EmergencyMedicine />} />
      <Route path="/infectious-and-disease-control" element={doctor ? <Navigate to="/appointment"/> :<InfectiousDiseaseandControl />} />
      <Route path="/internal-medicine" element={doctor ? <Navigate to="/appointment"/> :<InternalMedicine />} />
      <Route path="/Neurosurgery" element={doctor ? <Navigate to="/appointment"/> :<Neurosurgery />} />
      <Route path="/spine-surgery" element={doctor ? <Navigate to="/appointment"/> :<Spinesurgery />} />
      <Route path="/Neurology" element={doctor ? <Navigate to="/appointment"/> :<Neurology />} />
      <Route path="/heart-and-lung-transplant" element={doctor ? <Navigate to="/appointment"/> :<HeadLungTransplant />} />
      <Route path="/ent-head-and-neck" element={doctor ? <Navigate to="/appointment"/> :<EntHeadNeckSurgery />} />
      <Route path="/Orthopaedics" element={doctor ? <Navigate to="/appointment"/> :<Orthopaedics />} />
      <Route path="/Nephrology" element={doctor ? <Navigate to="/appointment"/> :<Nephrology />} />
      <Route path="/urology" element={doctor ? <Navigate to="/appointment"/> :<Urology />} />
      <Route path="/liver-diseases-and-transplant" element={doctor ? <Navigate to="/appointment"/> :<LiverTransplantandHpbsurgery />} />
      <Route path="/Hematology" element={doctor ? <Navigate to="/appointment"/> :<Hematology />} />
      <Route path="/laboratory-service-and-blood-bank" element={doctor ? <Navigate to="/appointment"/> :<BloodBank />} />
      <Route path="/rehabilitation-medicine" element={doctor ? <Navigate to="/appointment"/> :<RehabillitationMedicine />} />
      <Route path="/shoulder-and-elbow" element={doctor ? <Navigate to="/appointment"/> :<ShoulderElbowInjuries />} />
      <Route path="/pediatrics" element={doctor ? <Navigate to="/appointment"/> :<PediatricsandNeonatology />} />
      <Route path="/gastro" element={doctor ? <Navigate to="/appointment"/> :<GastroenterologyandHepatology />} />
      <Route path="/ophthalmology" element={doctor ? <Navigate to="/appointment"/> :<Ophthalmology />} />
      <Route path="/dental-surgery" element={doctor ? <Navigate to="/appointment"/> :<MaxillofacialandDentalSurgery />} />
      <Route path="/dermatology" element={doctor ? <Navigate to="/appointment"/> :<Dermatology />} />
      <Route path="/cardiac-anaesthesia-and-ct-icu" element={doctor ? <Navigate to="/appointment"/> :<CardiacAnaesthesiaandCTICU />} />
      <Route path="/plastic-surgery" element={doctor ? <Navigate to="/appointment"/> :<PlasticSurgery />} />
      <Route path="/psychiatry" element={doctor ? <Navigate to="/appointment"/> :<Psychiatry />} />
      <Route path="/ivf" element={doctor ? <Navigate to="/appointment"/> :<Ivf />} />
      <Route path='/appointment' element={authuser ? <Appoinment /> : <Navigate to="/"/>}/>
      <Route path='/general-appointment' element={authuser ? <GeneralAppointment /> : <Navigate to="/"/>}/>
      <Route path='/treatment-plans' element={authuser ? <TreatmentPlans /> : <Navigate to="/"/>}/>
    </Routes>
    </>
    
  )
}

export default App
