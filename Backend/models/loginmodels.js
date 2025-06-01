const mongoose=require("mongoose")
const loginschema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{type:String,
        validate:{
            validator:function(v){
                const model=/^[a-zA-Z0-9._+%-]+@gmail\.com$/
                return model.test(v)
            },
            message:"Please enter valid mail id"
        }
    },
    password:{type:String,
        minlength:[8,"password should have atleast 8 characters"]
    }
},{timestamps:true})
const logeduser=mongoose.model("logeduser",loginschema)
module.exports=logeduser