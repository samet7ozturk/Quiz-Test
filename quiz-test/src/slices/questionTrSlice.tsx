import { createSlice } from "@reduxjs/toolkit";

interface Option {
  id: number;
  text: string;
  correct: boolean;
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
        { id: 1, text: "Ankara", correct: false },
        { id: 2, text: "İstanbul", correct: true },
        { id: 3, text: "Sakarya", correct: false },
        { id: 4, text: "Balıkesir", correct: false },
      ],
    },
    {
      id: 2,
      text: "QuizModeOn hangi sadsa?",
      options: [
        { id: 1, text: "Ankara", correct: false },
        { id: 2, text: "İstanbul", correct: false },
        { id: 3, text: "Sakarya", correct: true },
        { id: 4, text: "Balıkesir", correct: false },
      ],
    },
    {
      id: 3,
      text: "QuizModeOn şehirde?",
      options: [
        { id: 1, text: "Ankara", correct: false },
        { id: 2, text: "İstanbul", correct: false },
        { id: 3, text: "Sakarya", correct: false },
        { id: 4, text: "Balıkesir", correct: false },
      ],
    },
    {
      id: 4,
      text: "QuizModeOn hangi şehirde?",
      options: [
        { id: 1, text: "Ankara", correct: false },
        { id: 2, text: "İstanbul", correct: false },
        { id: 3, text: "Sakarya", correct: false },
        { id: 4, text: "Balıkesir", correct: false },
      ],
    },
    {
      id: 5,
      text: "QuizModeOn hangi şehirde?",
      options: [
        { id: 1, text: "Ankara", correct: false },
        { id: 2, text: "İstanbul", correct: false },
        { id: 3, text: "Sakarya", correct: false },
        { id: 4, text: "Balıkesir", correct: false },
      ],
    },
  ],
  currentQuestionIndex: 0,
};

const questionTrSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default questionTrSlice.reducer;
