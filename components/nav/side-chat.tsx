"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "@/store/redux/store";
import {deleteContact, markAsUnread} from "@/features/contact-slice";
import OptionsMenu from "@/components/nav/options/options-menu";


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
    const truncateMessage = (message:any) => {
        const maxWords = 5;
        const words = message.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return message;
    };
    return (
        <div className="flex flex-col w-72 bg-gray-100 p-4">
            {contacts.map((contact) => (
                <div key={contact.userId} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <img
                            src={contact.profilePictureURL}
                            alt={contact.name}
                            className="w-10 h-10 bg-cover rounded-full mr-2"
                        />
                        <div>
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm w-40 text-gray-500">
                                {contact.chat.length > 0 ? truncateMessage(contact.chat[contact.chat.length - 1].you.message) : ''}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => handleToggleOptionsMenu(contact.userId)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                            </svg>
                        </button>
                        {showOptionsMenu === contact.userId && (
                            <OptionsMenu
                                onMarkAsUnread={() => handleMarkAsUnread(contact.userId)}
                                onDelete={() => handleDelete(contact.userId)}
                            />
                        )}
                    </div>
                    {contact.unreadCount > 0 && (
                        <div
                            className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {contact.unreadCount}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SideChat;