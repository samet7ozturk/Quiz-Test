import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  score: number;
  health: number;
}

interface UserState {
  user: User[];
}

const initialState: UserState = {
  user: [
    {
      id: 1,
      name: "Samet Ozturk",
      score: 0,
      health: 3,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increase: (state) => {
      state.user[0].score += 10;
    },
    decrease: (state) => {
      state.user[0].score -= 10;
    },
  },
});

export const { increase, decrease } = userSlice.actions;
export default userSlice.reducer;
