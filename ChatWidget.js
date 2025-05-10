import React, { useState } from 'react';
import './MessagesIcon.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="messages-icon" onClick={toggleChat}>
                
            </div>
            {isOpen && (
                <div className="chat-widget">
                    <div className="chat-header">
                        Chat with Us!
                        <button className="close-btn" onClick={toggleChat}>✖️</button>
                    </div>
                    <div className="chat-messages">
                        Hi there! How can we help you today?
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
