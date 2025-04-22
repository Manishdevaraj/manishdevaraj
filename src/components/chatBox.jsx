import React, { useEffect, useRef, useState } from 'react';
import { FiMessageSquare, FiSend } from 'react-icons/fi';
import { ImSpinner2 } from 'react-icons/im';
import axios from 'axios';
const ChatBox = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

// Auto-scroll to bottom when messages change
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);
  const handleSend = async() => {
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: inputValue }]);
    setLoading(true);

    try {
        // 🔗 Call your n8n webhook
        const response = await axios.post('https://n8n-x96d.onrender.com/webhook/portfolio', {
         
            message: inputValue
          
        });
        const data = await response.data.output;

    
        setMessages(prev => [
          ...prev,
          { from: 'astra', text: data|| "Sorry, I couldn’t find anything!" }
        ]);
    
      } catch (error) {
        setMessages(prev => [
          ...prev,
          { from: 'astra', text: "Oops — something went wrong!" }
        ]);
        console.error('Error talking to Astra:', error);
      }
    
      setLoading(false);
      setInputValue('');
    };

  return (
    <div className="h-[85vh] fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-100">
      <div className="w-full h-full max-w-lg bg-gray-800 rounded-xl shadow-xl flex flex-col ">
        <div className="p-4 text-white font-bold text-xl border-b border-gray-700 flex justify-between items-center">
             <div className='flex items-center gap-1'>
             <FiMessageSquare size={48} className="text-blue-400" />
             Astra Chat
             </div>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, index) => (
             <div
             key={index}
             className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
           >
            <div
             
              className={`p-3 rounded-lg max-w-xs ${
                msg.from === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-700 text-gray-200 self-start'
              }`}
              style={{ whiteSpace: 'pre-line' }}
              ref={messagesEndRef}
            >
              {msg.text}
            </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-blue-400">
              <ImSpinner2 className="animate-spin" size={20} />
              <span>Thinking...</span>
            </div>
          )}
        </div>

        <div className="flex p-4 border-t border-gray-700">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-l-lg bg-gray-900 text-white focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded-r-lg text-white"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
