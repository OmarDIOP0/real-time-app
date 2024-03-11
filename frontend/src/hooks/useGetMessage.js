import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessage = () => {
  const [loading,setLoading]=useState(false);
  const {messages,setMessages,selectConversation}=useConversation();
    
  useEffect(()=>{
    const getMessage=async ()=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/${selectConversation._id}`);
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
        } catch (error) {
            toast.error(error.messsage);
        }finally{
            setLoading(false);
        }
    };
    if(selectConversation?._id) getMessage();
  },[selectConversation?._id,setMessages]);
  
  return {messages,loading}; 
}
export default useGetMessage;