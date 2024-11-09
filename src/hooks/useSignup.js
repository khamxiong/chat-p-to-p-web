import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext();

    const signUp= async ({userName, password,email,gender,comfirmPassword}) => {
        console.log('useSignup:',userName, password,email,gender,comfirmPassword)
         const isValid = handleError({userName, password,email,gender,comfirmPassword})
         console.log('isValid:',isValid)
         if(!isValid) return;
         try{
             setLoading(true);
             const response = await fetch("http://localhost:8000/api-v1/auth/sign-up", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({userName, password,email,gender,comfirmPassword})
             })
             const data = await response?.json();
             toast.success("created successfully")
             if(data){
                 setLoading(false);
                 localStorage.setItem("userAuth", JSON.stringify(data?.data));
                 localStorage.setItem("token", data?.token);
                 setAuthUser(data?.data)
             }
         }catch(err){
             toast.error(err.message)
         }
    }

    return {loading, signUp}
}

export default useSignUp;


const handleError = ( {userName, password,email,gender,comfirmPassword})=>{
if(!userName || !password || !email || !gender || !comfirmPassword){
    toast.error("All fields are required")
    return false
}else{
    return true
}
}