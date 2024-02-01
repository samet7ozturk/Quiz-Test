import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  score: number;
  life: number;
}

interface UserState {
  user: User[];
}

const initialState: UserState = {
  user: [
    {
      id: 1,
      name: "",
      surname: "",
      email: "",
      score: 0,
      life: 3,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sendLoginInfo: (state, action) => {
      const { name, surname, email } = action.payload;
      state.user[0] = { ...state.user[0], name, surname, email };
    },
    increase: (state) => {
      state.user[0].score += 10;
    },
    decrease: (state) => {
      state.user[0].score -= 10;
    },
  },
});

export const { sendLoginInfo, increase, decrease } = userSlice.actions;
export default userSlice.reducer;
