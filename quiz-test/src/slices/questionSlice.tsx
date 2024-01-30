import { createSlice } from "@reduxjs/toolkit";

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface QuestionState {
  questions: Question[];
  currentQuestionIndex: number;
}

const initialState: QuestionState = {
  questions: [
    {
      id: 1,
      text: "QuizModeOn hangi şehirde?",
      options: [
        { id: 1, text: "Ankara" },
        { id: 2, text: "İstanbul" },
        { id: 3, text: "Sakarya" },
        { id: 4, text: "Balıkesir" },
      ],
    },
  ],
  currentQuestionIndex: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

//export const { increment, decrement } = counterSlice.actions;
export default questionSlice.reducer;
