import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setLoading] =useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async(username,password)=>{
        setLoading(true);
        if(!username || !password){
            toast.error('Fields are required');
        }
        try {
            const res = await fetch('/api/auth/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data = await res.json();
        if(data.error){
            throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);
            toast.success('Welcome back 👊')
        
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }

    }
    return {loading,login}
}

export default useLogin

function handleInputError({username,password}){
   if(!username || !password){
    toast.error('fields are required')
    return false;
   }
   return true;
}
