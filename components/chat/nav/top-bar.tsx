"use client";
import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { IoEllipsisVertical, IoVideocamOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TopBarChatProps } from "@/components/chat/types/nav.types";

const TopBarChat = ({
  imgUrl,
  imgName,
  userName,
  description,
}: TopBarChatProps) => {
  return (
    <div className="flex justify-between p-8 items-center h-[78px] bg-[#f6f6f6] z-50 top-0 w-full rounded-md">
      <div className="flex gap-2">
        <Image
          src={imgUrl}
          alt={imgName}
          className="w-10 h-10 object-fill rounded-full mr-2"
          height={300}
          width={300}
        />
        <div className="items-start flex flex-col gap-1">
          <p className="flex items-center justify-center gap-2 text-md font-medium text-black">
            {userName}
            <GoDotFill className="text-green-500" />
          </p>
          <p className="text-sm font-light text-[#222222]">{description}</p>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <IoVideocamOutline className="text-[#007AFF] text-xl" />
        <BsTelephone className="text-[#007AFF] text-xl" />
        <IoEllipsisVertical className="text-[#007AFF] text-xl" />
      </div>
    </div>
  );
};

export default TopBarChat;
