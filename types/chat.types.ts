export interface Chat {
  user: { message: string; timeStamp: string };
  you: { message: string; timeStamp: string };
}

export interface Contact {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: Chat[];
}

export interface ContactSliceState {
  contacts: Contact[];
  currentContact: Contact | null;
}
