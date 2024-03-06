import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is up ?</div>
        <div className='footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
    </div>
  )
}

export default Message
