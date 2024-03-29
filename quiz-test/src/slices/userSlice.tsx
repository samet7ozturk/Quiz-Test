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

function saveToLocalStorage(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sendLoginInfo: (state, action) => {
      const { name, surname, email } = action.payload;
      state.user[0] = { ...state.user[0], name, surname, email };
      saveToLocalStorage(state.user[0]);
    },
    scoreIncrease: (state) => {
      state.user[0].score += 10;
      saveToLocalStorage(state.user[0]);
    },
    scoreDecrease: (state) => {
      state.user[0].score -= 10;
      saveToLocalStorage(state.user[0]);
    },
    lifeIncrease: (state) => {
      state.user[0].life += 1;
      saveToLocalStorage(state.user[0]);
    },
    lifeDecrease: (state) => {
      state.user[0].life -= 1;
      saveToLocalStorage(state.user[0]);
    },
    resetUser: (state) => {
      state.user[0].score = initialState.user[0].score;
      state.user[0].life = initialState.user[0].life;
    },
  },
});

export const {
  sendLoginInfo,
  scoreIncrease,
  scoreDecrease,
  lifeIncrease,
  lifeDecrease,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;
