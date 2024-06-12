"use client";
import React, { useEffect } from "react";
import TopBarChat from "@/components/chat/nav/top-bar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/redux/store";
import { useParams } from "next/navigation";
import { setCurrentContact } from "@/features/contact-slice";
import { useAppDispatch } from "@/store/useSelector";

const Chat = () => {
  const { chatId } = useParams();
  const dispatch = useAppDispatch();
  const currentContact = useSelector(
    (state: RootState) => state.chat.currentContact,
  );
  useEffect(() => {
    if (chatId) {
      const chatIdString = Array.isArray(chatId) ? chatId[0] : chatId;
      dispatch(setCurrentContact(chatIdString));
    }
  }, [chatId, dispatch]);

  return (
    <div className="w-full h-screen ">
      <div className="px-8 mt-6">
        {currentContact && (
          <>
            <TopBarChat
              imgUrl={currentContact.profilePictureURL}
              imgName={currentContact.name}
              userName={currentContact.name}
              description="Click here for contact info"
            />
            {/* Render the chat messages here */}
            {currentContact.chat.map((message, index) => (
              <div key={index}>
                {message.user1 && (
                  <div>
                    <p>{message.user1.message}</p>
                    <p>{message.user1.timeStamp}</p>
                  </div>
                )}
                {message.you && (
                  <div>
                    <p>{message.you.message}</p>
                    <p>{message.you.timeStamp}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
