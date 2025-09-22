import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../container/navbar';
import Footer from '../container/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaDownload } from 'react-icons/fa';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import hospitalLogo from "../assets/logo.PNG"
import stamp from "../assets/STAMP.png"
const GeneralAppointment = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [downloadButtonVisible, setDownloadButtonVisible] = useState(false);
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    contactnumber: "",
    emailaddress: "",
    appointmenttype: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const offset = now.getTimezoneOffset();
      const localDate = new Date(now.getTime() - offset * 60 * 1000);
      const formatted = localDate.toISOString().slice(0, 16);
      setCurrentDateTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalData = { ...formData, currentdatetime: currentDateTime };
      const res = await axios.post("/api/general-appointment", finalData);

      const newToken = Math.floor(100 + Math.random() * 900); // 3-digit token
      setToken(newToken);

      setDownloadButtonVisible(true);
      toast.success(res.data || "Appointment booked successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleDownload = () => {
  console.log("hello");
  const pdfData = { ...formData };
  const doc = new jsPDF();

  // 🏥 Add hospital logo at top
  doc.addImage(hospitalLogo, "PNG", 80, 5, 50, 20);

  // 📝 Add title below the logo
  doc.setFontSize(18);
  doc.text("CARLZ Hospital", 105, 35, { align: "center" });
  doc.text("General Appointment Recepit",105,50,{align:"center"})

  // 📌 Appointment info
  doc.setFontSize(12);
  doc.text(`Token Number: ${token}`, 20, 60);
  doc.text(`Date: ${new Date().toLocaleString()}`, 20, 70);

  // Table data
  const tableData = [
    ["Name", pdfData.name],
    ["Age", pdfData.age],
    ["Gender", pdfData.gender],
    ["Date of Birth", pdfData.dob],
    ["Contact Number", pdfData.contactnumber],
    ["Email Address", pdfData.emailaddress],
    ["Appointment Type", pdfData.appointmenttype],
    ["Appointment Date/Time", currentDateTime],
  ];

  // Table
  autoTable(doc, {
    startY: 80,
    head: [["Field", "Details"]],
    body: tableData,
    theme: "grid",
    headStyles: { fillColor: [9, 64, 116] },
    styles: { fontSize: 11, cellPadding: 3 },
    columnStyles: { 0: { cellWidth: 60, fontStyle: "bold" }, 1: { cellWidth: 120 } },
  });

  // Footer text
  const finalY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(11);
  doc.text("✔ Please arrive 10 minutes before your appointment.", 20, finalY);
  doc.text("✔ Bring this receipt when visiting the hospital.", 20, finalY + 10);

  // 🖼 Add stamp at bottom of page
  const pageHeight = doc.internal.pageSize.height; // Get total page height
  doc.addImage(stamp, "PNG", 80, pageHeight - 60, 50, 40); // 40 units above bottom

  // Save PDF
  doc.save(`${pdfData.name}.pdf`);

  // Reset form
  setFormData({
    name: "",
    age: "",
    gender: "",
    dob: "",
    contactnumber: "",
    emailaddress: "",
    appointmenttype: "",
  });
  setDownloadButtonVisible(false);
  setToken(null);
};



  return (
    <div className="bg-[#094074] flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="flex flex-col md:flex-row w-[90%] md:w-[75%] lg:w-[60%] mx-auto gap-1 md:gap-0">

          {/* Left Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleFormSubmit} className="md:h-[500px] overflow-y-scroll bg-[#eff2f1] px-3" >
              <p className="text-center mt-2 font-serif font-semibold">General Appointment</p>

              {/* Form Fields */}
              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Name</p>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Age</p>
                <input
                  type="number"
                  placeholder="Enter patient age"
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  required
                />
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Gender</p>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="block w-full bg-gray-400 text-lg"
                  required
                >
                  <option value="">Select any option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Date of Birth</p>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  required
                />
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Contact Number</p>
                <input
                  type="number"
                  placeholder="Enter phone number"
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  value={formData.contactnumber}
                  onChange={(e) => setFormData({ ...formData, contactnumber: e.target.value })}
                  required
                />
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Email Address</p>
                <input
                  type="email"
                  placeholder="Enter patient email"
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  value={formData.emailaddress}
                  onChange={(e) => setFormData({ ...formData, emailaddress: e.target.value })}
                  required
                />
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Appointment Type</p>
                <select
                  value={formData.appointmenttype}
                  onChange={(e) => setFormData({ ...formData, appointmenttype: e.target.value })}
                  className="block w-full bg-gray-400 text-lg"
                  required
                >
                  <option value="">Select type of appointment</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Child Health / Pediatric Queries">Child Health / Pediatric Queries</option>
                  <option value="Women’s Health Queries">Women’s Health Queries</option>
                  <option value="Senior Citizen / Geriatric Care">Senior Citizen / Geriatric Care</option>
                  <option value="Preventive Health Check-ups">Preventive Health Check-ups</option>
                  <option value="Minor Injuries & First Aid">Minor Injuries & First Aid</option>
                  <option value="Vaccination & Immunization">Vaccination & Immunization</option>
                  <option value="Lifestyle & Wellness">Lifestyle & Wellness</option>
                </select>
              </label>

              <label className="block mt-4">
                <p className="text-lg font-mono font-bold">Current Date/Time</p>
                <input
                  type="datetime-local"
                  className="bg-blue-300 px-3 py-2 text-lg block w-full"
                  value={currentDateTime}
                  readOnly
                />
              </label>

              {/* Buttons */}
              <div className="flex items-center justify-center mt-4 mb-3">
                {downloadButtonVisible && (
                  <button
                    type="button"
                    className="flex items-center px-4 py-2 gap-2 font-sans font-bold text-white bg-amber-500 hover:bg-amber-400 rounded-md cursor-pointer"
                    onClick={handleDownload}
                  >
                    Download <FaDownload />
                  </button>
                )}
                <button
                  type="submit"
                  className={`${
                    downloadButtonVisible ? "ml-5" : ""
                  } px-5 py-2 font-sans font-bold text-white rounded-md bg-green-500 hover:bg-green-400 cursor-pointer`}
                >
                  Submit
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mb-5">
                <span className="text-red-500">*</span> After submitting this form, you will receive a <span className="font-semibold">Token Number</span> for your appointment.
              </p>
            </form>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#eff2f1] p-4">
            <p className="mb-3">Do you want to get appointment/consult based on speciality?</p>
            <span
              className="px-3 py-2 bg-[#bfdbf7] rounded-lg cursor-pointer"
              onClick={() => navigate("/Our-Specialities")}
            >
              Consult by speciality
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GeneralAppointment;
