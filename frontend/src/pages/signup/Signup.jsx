import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter
      backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
            Signup
        <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form>
        <div>
            <label className='label p-2'>
              <span className=' text-white label-text'>Fullname</span>
            </label>
            <input type="text" placeholder='Omar Diop' className='w-full input input-bordered h-10 bg-black text-white' />
          </div>
          <div>
            <label className='label p-2'>
              <span className=' text-white label-text'>Username</span>
            </label>
            <input type="text" placeholder='omzo' className='w-full input input-bordered h-10 bg-black text-white' />
          </div>
          <div>
            <label className='label p-2'>
              <span className=' text-white label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 bg-black text-white' />
          </div>
          <div>
            <label className='label p-2'>
              <span className=' text-white label-text'>Confim Password</span>
            </label>
            <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10 bg-black text-white' />
          </div>
          <GenderCheckbox/>
          <a href="#" className='text-sm  text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account ?
          </a>
          <div className="">
            <button className='btn btn-block btn-sm mt-2 bg-black text-white border-black'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter
//       backdrop-blur-lg bg-opacity-0">
//         <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//             Signup
//         <span className='text-blue-500'>ChatApp</span>
//         </h1>
//         <form>
//         <div>
//             <label className='label p-2'>
//               <span className=' text-white label-text'>Fullname</span>
//             </label>
//             <input type="text" placeholder='Omar Diop' className='w-full input input-bordered h-10 bg-black text-white' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className=' text-white label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='omzo' className='w-full input input-bordered h-10 bg-black text-white' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className=' text-white label-text'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 bg-black text-white' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className=' text-white label-text'>Confim Password</span>
//             </label>
//             <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10 bg-black text-white' />
//           </div>
//           <GenderCheckbox/>
//           <a href="#" className='text-sm  text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account ?
//           </a>
//           <div className="">
//             <button className='btn btn-block btn-sm mt-2 bg-black text-white border-black'>Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
