import React from "react";
import ChatWidget from "./ChatWidget";

function MessagesIcon() {
  return (
    <div className="messages-icon">
      <ChatWidget /> {/* Render the ChatWidget directly */}
    </div>
  );
}

export default MessagesIcon;
