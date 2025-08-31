const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer=require("nodemailer")
const cookieParser = require("cookie-parser");
const authrouter = require("./routes/authroute"); 
const protectroute=require("./middleware/protectroute")
const axios = require('axios');
const logeduser = require("./models/loginmodels");
const GenerateToken = require("./utils/tokengeneration");
const appointmentbooking = require("./routes/AppointmentBooking");
const Appoinmentbook = require("./models/appoinmentmodel");
const userlog = require("./routes/Userlogs");
const mongodbconnect = require("./mongodbsetup");
const jobrouter=require("./routes/JobApplyRoute");
const feedbackrouter=require("./routes/FeedBackSubmission");
const googlerouter=require("./routes/GoogleLogin");
dotenv.config();
//basic setup
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", 
    methods:"GET,POST,PATCH,DELETE",
    credentials: true, 
}));
app.use(cookieParser());

const PORT = process.env.PORT;
mongodbconnect()

//routers
app.use("/api", authrouter);
app.use("/api",jobrouter);
app.use("/api",feedbackrouter);
app.post("/api/appoinment/booking",protectroute,appointmentbooking)
app.use("/api",googlerouter);
app.post("/api/appoinment/logs",protectroute,userlog)

app.post("/api/appointment/check",async (req,res)=>{
  try{
    const {dateselection,doctorname}=req.body
    const appoinments= await Appoinmentbook.find({date_visit:dateselection,doctor_name:doctorname}).select("time_visit -_id")
    console.log(appoinments)
    return res.status(201).json(appoinments)
  }catch(error){
    console.log("error in check(backend)",error.message)
    return res.status(500).json("Internal Server Error")
  }
})

app.post("/api/appointment/response",async(req,res)=>{
  try{
    const {date_visit,doctor_name,doctor_rate,doctor_role,doctor_success,mode_appoinment,time_visit,user_email,user_name}=req.body
    const transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.SENDER_EMAIL,
        pass:process.env.SENDER_PASS
      }
    })
    const messageoptions = {
  from: process.env.SENDER_EMAIL,
  to: user_email,
  subject: "Appointment Confirmation - Scheduled Successfully",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
      <h2 style="color: #2c3e50;">Dear ${user_name},</h2>

      <p>We are pleased to inform you that your appointment with <strong>Dr. ${doctor_name}</strong> has been successfully scheduled.</p>

      <p><strong>👨‍⚕️ Doctor Role:</strong> ${doctor_role}</p>
      <p><strong>💼 Success Rate:</strong> ${doctor_success}</p>
      <p><strong>💳 Consultation Fee:</strong> ₹${doctor_rate}</p>
      
      <p style="margin-top: 20px;"><strong>📅 Date:</strong> ${ date_visit}</p>
      <p><strong>⏰ Time:</strong> ${time_visit}</p>
      <p><strong>🔗 Mode:</strong> ${mode_appoinment}</p>

      <hr style="margin: 20px 0;" />

      <p>We look forward to serving you. Please be available at the scheduled time.</p>

      <p style="margin-top: 30px;">
        Best regards,<br/>
        <strong>CARLZ Hospital Team</strong><br/>
        <em>Committed to your care</em>
      </p>
    </div>
  `
};

    const result=await transporter.sendMail(messageoptions)
    console.log(result)
    return res.status(200).json("SENDED TO EMAIL SUCCESSFULLY")
  }catch(error){
    console.log("Error in appoinment response",error.message)
    return res.status(500).json("Internal Server Error")
  }
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});