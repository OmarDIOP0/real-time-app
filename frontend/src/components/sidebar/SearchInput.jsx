import React from 'react'
import {IoSearchSharp} from 'react-icons/io5';

const SearchInput = () => {
  return (
    <div>
      <form className='flex items-center gap-2'>
      <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 bg-black text-white' />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
      <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
      </form>
    </div>
  )
}

export default SearchInput
