import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '@/types/chat.types';
import {data} from "@/data";

const initialState: { contacts: Contact[] } = {
    contacts: data,
};
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        markAsUnread: (state, action: PayloadAction<string>) => {
            const contactId = action.payload;
            const contact = state.contacts.find((c) => c.userId === contactId);
            if (contact) {
                contact.unreadCount = 1;
            }
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            const contactId = action.payload;
            state.contacts = state.contacts.filter((c) => c.userId !== contactId);
        },
    },
});

export const { markAsUnread, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;