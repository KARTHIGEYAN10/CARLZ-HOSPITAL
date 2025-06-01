import { createContext, useContext,useState ,useEffect} from "react"

const userdoctorcontext=createContext()

export const useuserdoctorcontext=()=>{
    return useContext(userdoctorcontext)
}
export const UserdoctorContextProvider=({children})=>{
    const [authuser,setAuthUser]=useState(JSON.parse(localStorage.getItem("loged_user")) || null)
    const [doctor,setDoctor]=useState(JSON.parse(localStorage.getItem("selected_doctor"))||null) 
    return (<userdoctorcontext.Provider value={{authuser,setAuthUser,doctor,setDoctor}}>{children}</userdoctorcontext.Provider>)
}