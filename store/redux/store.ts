// store/redux/store.ts
import { configureStore, Dispatch } from "@reduxjs/toolkit";
import chatSlice from "@/features/contact-slice";
const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
