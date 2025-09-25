const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const authrouter = require("./routes/authroute"); 
const protectroute = require("./middleware/protectroute");
const appointmentbooking = require("./routes/AppointmentBooking");
const Appoinmentbook = require("./models/appoinmentmodel");
const userlog = require("./routes/Userlogs");
const mongodbconnect = require("./mongodbsetup");
const jobrouter = require("./routes/JobApplyRoute");
const feedbackrouter = require("./routes/FeedBackSubmission");
const googlerouter = require("./routes/GoogleLogin");
const domainrouter = require("./routes/Domainnames");
const apppointmentdeleterouter = require("./routes/AppointmentDelete");
const generalappointmentrouter = require("./routes/GeneralAppointment");
const { Router } = require("express");
const router = Router();

router.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.use(router);

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongodbconnect();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS (adjust for production)
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PATCH,DELETE",
  credentials: true,
}));

// Serve frontend static files
const frontendPath = path.resolve(__dirname, "../hospital/dist");
app.use(express.static(frontendPath));
app.use('/images', express.static(path.resolve(__dirname, "assets")));

// API routes
app.use("/api", authrouter);
app.use("/api", jobrouter);
app.use("/api", feedbackrouter);
app.post("/api/appoinment/booking", protectroute, appointmentbooking);
app.use("/api", googlerouter);
app.use("/api", domainrouter);
app.use("/api", apppointmentdeleterouter);
app.post("/api/appoinment/logs", protectroute, userlog);
app.use("/api", generalappointmentrouter);

// Appointment check
app.post("/api/appointment/check", async (req, res) => {
  try {
    const { dateselection, doctorname } = req.body;
    const appointments = await Appoinmentbook.find({
      date_visit: dateselection,
      doctor_name: doctorname
    }).select("time_visit -_id");
    return res.status(201).json(appointments);
  } catch (error) {
    console.log("Error in check:", error.message);
    return res.status(500).json("Internal Server Error");
  }
});

// Appointment response email
app.post("/api/appointment/response", async (req, res) => {
  try {
    const { date_visit, doctor_name, doctor_rate, doctor_role, doctor_success, mode_appoinment, time_visit, user_email, user_name } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS
      }
    });
    const messageoptions = {
      from: process.env.SENDER_EMAIL,
      to: user_email,
      subject: "Appointment Confirmation",
      html: `<div>
        <h2>Dear ${user_name}</h2>
        <p>Your appointment with <strong>Dr. ${doctor_name}</strong> has been scheduled.</p>
        <p>Role: ${doctor_role}, Success Rate: ${doctor_success}, Fee: ₹${doctor_rate}</p>
        <p>Date: ${date_visit}, Time: ${time_visit}, Mode: ${mode_appoinment}</p>
      </div>`
    };
    await transporter.sendMail(messageoptions);
    return res.status(200).json("Email sent successfully");
  } catch (error) {
    console.log("Error in appointment response:", error.message);
    return res.status(500).json("Internal Server Error");
  }
});

// Catch-all: serve frontend for any route not handled by APIs


// Start server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
