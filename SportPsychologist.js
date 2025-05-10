import React, { useState } from 'react';
import './SportPsychologist.css';

function SportPsychologist() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm Psych, your on demand sport psychologist. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: input }]);

    // Generate bot response based on keywords
    const response = generateResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInput('');
  };

  const generateResponse = (message) => {
    if (message.includes('stress') || message.includes('anxiety')) {
      return "I understand you're feeling stressed. Would you like to try some breathing exercises or discuss what's causing your anxiety?";
    }
    if (message.includes('transition') || message.includes('retirement')) {
      return "The transition from professional sports can be challenging. Have you considered speaking with our career transition specialists?";
    }
    if (message.includes('motivation') || message.includes('focus')) {
      return "Let's work on setting some specific goals and creating a plan to maintain your motivation. What are your current objectives?";
    }
    if (message.includes('confidence') || message.includes('self-doubt')) {
      return "Building confidence takes time and practice. Would you like to explore some techniques to boost your self-belief?";
    }
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to support you. Would you like to schedule a one-on-one session or explore our support programs?";
    }
    return "I'm here to help. Could you tell me more about what you're experiencing?";
  };

  return (
    <div className={`psychologist-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="psychologist-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comments"></i>
        <span>Chat with Psych</span>
      </button>

      <div className="psychologist-chat">
        <div className="chat-header">
          <h3>Psych - Sport Psychologist</h3>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.type === 'user' ? 'user' : 'bot'}`}
            >
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SportPsychologist; 