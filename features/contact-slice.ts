import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "@/data";
import { ContactSliceState } from "@/types/chat.types";

const initialState: ContactSliceState = {
  contacts: data,
  currentContact: null,
};

const contactSlice = createSlice({
  name: "contacts",
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
    setCurrentContact: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      const contact = state.contacts.find((c) => c.userId === userId);
      if (contact) {
        // Reset unreadCount to 0
        contact.unreadCount = 0;
        state.currentContact = contact;
      } else {
        state.currentContact = null;
      }
    },
  },
});

export const { markAsUnread, deleteContact, setCurrentContact } =
  contactSlice.actions;
export default contactSlice.reducer;
