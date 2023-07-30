import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const AuthContext=createContext();
export const AuthContextProvider =({children}) =>{
    const [currentUser,setCurrentUser] =useState( null );
    const login = async (inputs)=>{
        const res= await axios.post("http://localhost:8800/api/auth/login",inputs, {
         withCredentials:true,
        });
        setCurrentUser(res.data)
    };
   useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(currentUser))
   },[currentUser])
   return(
    <AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>
   )
};