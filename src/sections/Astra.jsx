import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import ChatBox from '../components/chatBox';

const Astra = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="text-center p-8 h-full">
      <div className="max-w-xl mx-auto p-8 bg-gray-900 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <FiMessageSquare size={48} className="text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Hey, I'm Astra! 👋</h1>
        <p className="text-gray-300 text-lg mb-6">
        You can ask me about <b>Manish</b>, his profile,
        or explore his awesome projects. I'm here to chat with you in real-time!
      </p>
        <button
          onClick={() => setIsChatOpen(true)}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition duration-300"
        >
          Start a Conversation
        </button>
      </div>

      {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Astra;
