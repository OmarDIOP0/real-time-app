import React, { useState } from 'react'
import {IoSearchSharp} from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectConversation} = useConversation();
  const {conversations} = useGetConversation();
  const handleSubmit=(e)=>{
     e.preventDefault();
     if(!search) return;
     if(search.length<3){
      return toast.error('Search term must be at leat 3 characters long')
     }
     const conversation  = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
     if(conversation){
      setSelectConversation(conversation);
      setSearch('');
     }
     else{
      toast.error('No user found');
     }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 bg-black text-white' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white' >
      <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
      </form>
    </div>
  )
}

export default SearchInput
