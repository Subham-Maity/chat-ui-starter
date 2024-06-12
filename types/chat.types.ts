export interface Chat {
    user1?: { message: string; timeStamp: string };
    user2?: { message: string; timeStamp: string };
    you: { message: string; timeStamp: string };
}

export interface Contact {
    userId: string;
    name: string;
    unreadCount: number;
    profilePictureURL: string;
    chat: Chat[];
}
