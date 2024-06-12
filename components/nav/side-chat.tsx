"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/store/redux/store";
import { deleteContact, markAsUnread } from "@/features/contact-slice";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import {IoEllipsisVertical} from "react-icons/io5";
import {Contact} from "@/types/chat.types";
import {truncateMessage} from "@/utils/truncate-message";
import Image from "next/image";

const SideChat: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.chat.contacts);
    const dispatch = useDispatch();
    const [showOptionsMenu, setShowOptionsMenu] = React.useState<string | null>(null);

    const handleMarkAsUnread = (userId: string) => {
        dispatch(markAsUnread(userId));
        setShowOptionsMenu(null);
    };

    const handleDelete = (userId: string) => {
        dispatch(deleteContact(userId));
        setShowOptionsMenu(null);
    };

    const handleToggleOptionsMenu = (userId: string | null) => {
        setShowOptionsMenu(showOptionsMenu === userId ? null : userId);
    };

    return (
        <div className="flex flex-col w-72 bg-gray-100 p-4">
            <h2 className="text-xl font-medium mb-4">Chats</h2>

            {contacts.map((contact:Contact) => (
                <div key={contact.userId} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <Image
                            src={contact.profilePictureURL}
                            alt={contact.name}
                            className="w-10 h-10 object-fill rounded-full mr-2"
                            height={300}
                            width={300}
                        />
                        <div>
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm w-40 text-gray-500">
                                {contact.chat.length > 0 ? truncateMessage(contact.chat[contact.chat.length - 1].you.message) : ''}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {contact.unreadCount > 0 && (
                            <div
                                className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                                {contact.unreadCount}
                            </div>
                        )}
                        <Dropdown>
                            <DropdownTrigger>
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => handleToggleOptionsMenu(contact.userId)}
                                >
                                    <IoEllipsisVertical />
                                </button>
                            </DropdownTrigger>
                            {showOptionsMenu === contact.userId && (
                                <DropdownMenu aria-label="Actions">
                                    <DropdownItem key="markAsUnread"
                                                  onClick={() => handleMarkAsUnread(contact.userId)}>
                                        Mark as unread
                                    </DropdownItem>
                                    <DropdownItem key="delete" onClick={() => handleDelete(contact.userId)}>
                                        Delete
                                    </DropdownItem>
                                    <DropdownItem key="cancel" color="default">
                                        Cancel
                                    </DropdownItem>
                                </DropdownMenu>
                            )}
                        </Dropdown>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default SideChat;