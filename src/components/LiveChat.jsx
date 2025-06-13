import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/slices/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store?.chat?.message || []);
  const [chatByUser, setChatByUser] = useState("");
  console.log(chatData);

  useEffect(() => {
    const polling = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: "Krishan Pandey",
          message: "Hey, Krishan this side.",
        })
      );
    }, 2000); 

    return () => {
      clearInterval(polling);
    };
  }, [dispatch]);
  return (
    <div>
      <div className="ml-3 p-2 font-bold border border-black w-[420px] h-[315px] bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        {chatData.map((chat) => (
          <ChatMessage name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="p-[3px] m-2 ml-3 border border-gray-400 rounded-lg outline-none"
          onChange={(e) => setChatByUser(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              dispatch(addMessage({name:"Krishan", message:chatByUser}))
            }
          }}
          ></input>
        <img
          src="https://static.vecteezy.com/system/resources/previews/045/983/772/non_2x/send-icon-submit-icon-arrow-icon-free-vector.jpg"
          alt="arrow-icon"
          className="w-10 h-10"
          onClick={(e) => {dispatch(addMessage({name:"Krishan", message:chatByUser}));}}
        />
      </div>
    </div>
  );
};

export default LiveChat;
