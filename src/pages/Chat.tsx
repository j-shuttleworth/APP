import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'
import ChatMessage from '../components/ChatMessage'
import { useAuth } from '../contexts/AuthContext'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    // Simulate loading initial messages
    const initialMessages = [
      { id: 1, sender: 'Coach', content: 'Welcome to your personalized chat! How can I assist you today?', timestamp: new Date(Date.now() - 86400000).toISOString() },
      { id: 2, sender: user?.firstName, content: 'Hi Coach! I have a question about my upcoming long run.', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 3, sender: 'Coach', content: "Sure, I'd be happy to help. What would you like to know about your long run?", timestamp: new Date(Date.now() - 3540000).toISOString() },
    ]
    setMessages(initialMessages)
  }, [user])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() === '') return

    const userMessage = {
      id: messages.length + 1,
      sender: user?.firstName,
      content: newMessage,
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, userMessage])
    setNewMessage('')

    // Simulate coach's response
    setTimeout(() => {
      const coachResponse = {
        id: messages.length + 2,
        sender: 'Coach',
        content: "I've received your message. I'll get back to you with a detailed response shortly.",
        timestamp: new Date().toISOString(),
      }
      setMessages(prevMessages => [...prevMessages, coachResponse])
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Chat with Your Coach</h1>
      <div className="modern-card flex flex-col h-[calc(100vh-250px)]">
        <div className="flex-grow overflow-y-auto mb-4 p-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} isUser={message.sender === user?.firstName} />
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center p-4 border-t border-gray-200">
          <div className="relative flex-grow">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat