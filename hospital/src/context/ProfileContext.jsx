import { createContext, useContext, useEffect, useState } from "react";

const profilecontext=createContext()

export const useprofilecontext=()=>{
    return useContext(profilecontext)
}
export const ProfilecontextProvider=({children})=>{
    const [profile,setProfile]=useState("")
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("loged_user"))
        if(user){
            setProfile(user.email[0].toUpperCase())
        }
    },[])
    return(
        <profilecontext.Provider value={{profile,setProfile}}>{children}</profilecontext.Provider>
    )
}