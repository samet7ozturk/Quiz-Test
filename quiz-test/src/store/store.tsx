import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import questionTrReducer from "../slices/questionTrSlice";
import questionEnReducer from "../slices/questionEnSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    questionTr: questionTrReducer,
    questionEn: questionEnReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
