import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className='text-label text-white'>Male</span>
                <input type='checkbox' className="checkbox checkbox-warning" border-slate-900 />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className='text-label text-white'>Femelle</span>
                <input type='checkbox' className="checkbox checkbox-warning" border-slate-900 />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox

//START CODE 

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='text-label text-white'>Male</span>
//                 <input type='checkbox' className="checkbox checkbox-warning" border-slate-900 />
//             </label>
//         </div>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='text-label text-white'>Femelle</span>
//                 <input type='checkbox' className="checkbox checkbox-warning" border-slate-900 />
//             </label>
//         </div>
      
//     </div>
//   )
// }

// export default GenderCheckbox
