import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emoji';
import useConversation from '../../zustand/useConversation';


const Conversations = () => {
  const{loading,conversations}=useGetConversation();

  console.log("conversation",conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
     {conversations.map((conversation,index)=>(
      <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastInd={index === conversations.length-1}
      />
     ))}
     {loading? <span className='loading loading-spinner'></span>:null }
    </div>
  )
}
export default Conversations

//CODE DE BASE :
// import React from 'react'
// import Conversation from './Conversation'
// import useGetConversation from '../../hooks/useGetConversation';


// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   )
// }
// export default Conversations
