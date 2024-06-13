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
import SideChat from "@/components/nav/side-chat";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useMediaQuery from "@/hooks/use-window-dimension";

const ChatLayout = () => {
  const { chatId } = useParams();
  const dispatch = useAppDispatch();
  const currentContact = useSelector(
    (state: RootState) => state.chat.currentContact,
  );
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (chatId) {
      const chatIdString = Array.isArray(chatId) ? chatId[0] : chatId;
      dispatch(setCurrentContact(chatIdString));
    }
  }, [chatId, dispatch]);

  return isDesktopOrLaptop ? (
    <div className="flex">
      <SideChat />
      <div className="flex flex-col justify-between lg:px-8 lg:py-8 w-full min-h-screen">
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
    </div>
  ) : (
    <Sheet>
      <div className="flex">
        <SheetContent
          side="left"
          className="flex flex-col w-[346px] min-h-screen bg-white border-r border-gray-200 p-0"
        >
          <SideChat />
        </SheetContent>
        <div className="flex flex-col justify-between lg:px-8 lg:py-8 w-full min-h-screen">
          {currentContact && (
            <>
              <SheetTrigger asChild>
                <button>
                  <TopBarChat
                    imgUrl={currentContact.profilePictureURL}
                    imgName={currentContact.name}
                    userName={currentContact.name}
                    description="Click here for contact info"
                  />
                </button>
              </SheetTrigger>
              <div className="flex-grow overflow-y-auto px-2">
                <ChatList chatData={currentContact.chat} />
              </div>
            </>
          )}
          <div className="lg:pb-0 pb-2 px-2">
            <ChatInput />
          </div>
        </div>
      </div>
    </Sheet>
  );
};

export default ChatLayout;
