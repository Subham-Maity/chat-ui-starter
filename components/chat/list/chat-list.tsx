import React from "react";
import { ChatListProps } from "@/components/chat/types/chat.types";

const ChatList: React.FC<ChatListProps> = ({ chatData }) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100vh-200px)] w-full px-4 py-2">
      {chatData.map((message, index) => (
        <div key={index}>
          {message.user && (
            <div className="flex justify-start mb-2">
              <div className="bg-[#FAFAFA] font-light text-black rounded-3xl px-3 py-2 max-w-[60%]">
                <p>{message.user.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.user.timeStamp}
                </p>
              </div>
            </div>
          )}
          {message.you && (
            <div className="flex justify-end mb-2">
              <div className="bg-[#DCF7C5] font-light text-black rounded-3xl px-3 py-2 max-w-[60%]">
                <p>{message.you.message}</p>
                <p className="text-right text-xs text-gray-500 mt-1">
                  {message.you.timeStamp}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
