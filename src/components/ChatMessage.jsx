import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center">
       <img
          className="h-8 col-span-1"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
        <span className="font-bold mx-2">{name}</span>
        <span className="font-normal">{message}</span>
    </div>
  );
};

export default ChatMessage;
