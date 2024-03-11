import React from 'react'
import Message from './Message'
import  useGetMessage from '../../hooks/useGetMessage'

const Messages = () => {
  const {messages,loading} = useGetMessage();
  console.log("message",messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message />
      <Message />
      <Message />
    </div>
  )
}


export default Messages

//FIRST COMPORTEMENT
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   )
// }


// export default Messages

