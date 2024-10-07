import React from 'react'

const ChatMessage = ({ message, isUser }) => {
  const formattedTimestamp = new Date(message.timestamp).toLocaleString()

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] p-3 rounded-lg ${isUser ? 'bg-black text-white' : 'bg-white text-black'} shadow-md`}>
        <p className="font-semibold text-sm mb-1">{message.sender}</p>
        <p className="mb-2">{message.content}</p>
        <p className="text-xs opacity-75">{formattedTimestamp}</p>
      </div>
    </div>
  )
}

export default ChatMessage