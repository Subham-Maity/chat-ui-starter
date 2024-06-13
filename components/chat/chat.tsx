"use client";
import React, { useEffect } from "react";
import TopBarChat from "@/components/chat/nav/top-bar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/redux/store";
import { useParams } from "next/navigation";
import { setCurrentContact } from "@/features/contact-slice";
import { useAppDispatch } from "@/store/useSelector";
import ChatList from "@/components/chat/list/chat-list";
import ChatInput from "@/components/chat/type/input-type";

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
    <div className="flex flex-col justify-between px-8 py-8 w-full min-h-screen">
      {currentContact && (
        <>
          <TopBarChat
            imgUrl={currentContact.profilePictureURL}
            imgName={currentContact.name}
            userName={currentContact.name}
            description="Click here for contact info"
          />
          <div className="flex-grow overflow-y-auto">
            <ChatList chatData={currentContact.chat} />
          </div>
        </>
      )}

      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
