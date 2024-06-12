import React from "react";
import Chat from "@/components/chat/chat";
import SideChat from "@/components/nav/side-chat";

const MainLayout = () => {
  return (
    <div className="flex">
      <SideChat />
      <Chat />
    </div>
  );
};

export default MainLayout;
