"use client";
import React from "react";
import { RootState } from "@/store/redux/store";
import { deleteContact, markAsUnread } from "@/features/contact-slice";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { truncateMessage } from "@/utils/truncate-message";
import { useAppDispatch, useAppSelector } from "@/store/useSelector";

const SideChat: React.FC = () => {
  const contacts = useAppSelector((state: RootState) => state.chat.contacts);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPath = usePathname();
  const handleMarkAsUnread = (userId: string) => {
    dispatch(markAsUnread(userId));
  };

  const handleDelete = (userId: string) => {
    dispatch(deleteContact(userId));
  };

  const handleToggleOptionsMenu = (userId: string) => {
    const isCurrentChat = currentPath.includes(`/chat/${userId}`);
    if (!isCurrentChat) {
      router.push(`/chat/${userId}`);
    }
  };

  return (
    <div className="flex flex-col w-[346px] min-h-screen bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-medium mb-4">Chats</h2>
      {contacts.map((contact) => (
        <div
          key={contact.userId}
          className={`flex justify-between items-center mb-4 p-2 cursor-pointer ${currentPath.includes(`/chat/${contact.userId}`) ? "bg-[#F5F7FB] rounded-lg" : ""}`}
          onClick={() => router.push(`/chat/${contact.userId}`)}
        >
          <div className="flex items-center">
            <Image
              src={contact.profilePictureURL}
              alt={contact.name}
              className="w-10 h-10 object-fill rounded-full mr-2"
              height={300}
              width={300}
            />
            <div>
              <h3
                className={`font-semibold ${currentPath.includes(`/chat/${contact.userId}`) ? "font-extrabold" : ""}`}
              >
                {contact.name}
              </h3>
              <p className="text-sm w-40 text-gray-500">
                {contact.chat.length > 0
                  ? truncateMessage(
                      contact.chat[contact.chat.length - 1].you.message,
                    )
                  : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {contact.unreadCount > 0 && (
              <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                {contact.unreadCount}
              </div>
            )}
            <Dropdown>
              <DropdownTrigger>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => handleToggleOptionsMenu(contact.userId)}
                >
                  <IoEllipsisVertical className="text-[#007AFF]" />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Actions">
                <DropdownItem
                  key="markAsUnread"
                  onClick={() => handleMarkAsUnread(contact.userId)}
                >
                  Mark as unread
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  onClick={() => handleDelete(contact.userId)}
                >
                  Delete
                </DropdownItem>
                <DropdownItem key="cancel" color="default">
                  Cancel
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideChat;
