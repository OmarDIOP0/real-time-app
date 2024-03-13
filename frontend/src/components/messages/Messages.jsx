import React, { useEffect } from 'react'
import Message from './Message'
import  useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import { useRef } from 'react';
import  useListenMessages  from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages,loading} = useGetMessage();
  useListenMessages();
  const lastMessage = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({behavior:"smooth"});
    },100)
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && 
       messages.map((message)=>(
        <div key={message._id} ref={lastMessage}>
          <Message message={message}/>
        </div>
       ))}
      {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
        )}
    </div>
  );
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

