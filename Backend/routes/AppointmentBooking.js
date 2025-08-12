const Appoinmentbook = require("../models/appoinmentmodel")

const appointmentbooking=async(req,res)=>{
    try{
        const {username,useremail,doctorname,doctoremail,doctorrate,doctorsuccess,doctorrole,dateofvisit,timeofvisit,modeofappointment,reasonforappointment,status}=req.body
        const user=req.user
        const newappoinment={
            user_name:username,
            user_email:useremail,
            doctor_name:doctorname,
            doctor_email:doctoremail,
            doctor_rate:doctorrate,
            doctor_success:doctorsuccess,
            doctor_role:doctorrole,
            date_visit:dateofvisit,
            time_visit:timeofvisit,
            mode_appoinment:modeofappointment,
            reason_for_appointment:reasonforappointment,
            status:status
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