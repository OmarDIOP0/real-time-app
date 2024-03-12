import React from 'react'
import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extraTime } from '../../utils/extraTime';

const Message = ({message}) => {
  const {authUser} =useAuthContext();
  const {selectConversation} = useConversation();
  const keys = Object.keys(authUser)
  const fromMe = message.senderId === authUser[keys[0]];
  const chatClassName = fromMe ? "chat-end":"chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500": ""; 
  // const formattedTime = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedTime = extraTime(message.createdAt)
  return (
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>    
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>
    </div>
  )
}

export default Message
