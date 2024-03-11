import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

export const useGetMessage = () => {
  const [loading,setLoading]=useState(false);
  const {messsages,setMessages,selectConversation}=useConversation();
  useEffect(()=>{
    const getMessage=async ()=>{
        setLoading(false);
        try {
            const res = await fetchh(`/api/messages/${selectConversation._id}`);
            const data = await res.json();
            if(data.error) throw new Error(error.messsage);
            setMessages(data);
        } catch (error) {
            toast.error(error.messsage);
        }finally{
            setLoading(false);
        }
    };
    if(selectConversation._id) getMessage();
  },[selectConversation._id,setMessages]);
  
  return {messsages,loading}; 
}
export default useConversation;