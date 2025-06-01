const Appoinmentbook = require("../models/appoinmentmodel")

const appointmentbooking=async(req,res)=>{
    try{
        const {doctorname,doctorrate,doctorsuccessrate,doctorrole,dateofvisit,timeofvisit,modeofappointment}=req.body
        const user=req.user
        const newappoinment={
            user_name:user.username,
            user_email:user.email,
            doctor_name:doctorname,
            doctor_rate:doctorrate,
            doctor_success:doctorsuccessrate,
            doctor_role:doctorrole,
            date_visit:dateofvisit,
            time_visit:timeofvisit,
            mode_appoinment:modeofappointment
        }
        console.log(newappoinment)
        const result=await Appoinmentbook.create(newappoinment)
        return res.status(200).json(result)
    }catch(error){
        console.log("Error in appoinmentroute:",error.message)
        res.status(500).json("Internal server Error")
    }
}
module.exports=appointmentbooking