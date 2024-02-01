import { createSlice } from "@reduxjs/toolkit";

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
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
        { id: 1, text: "Ankara", isCorrect: false },
        { id: 2, text: "İstanbul", isCorrect: true },
        { id: 3, text: "Sakarya", isCorrect: false },
        { id: 4, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "QuizModeOn hangi sadsa?",
      options: [
        { id: 1, text: "Ankara", isCorrect: false },
        { id: 2, text: "İstanbul", isCorrect: false },
        { id: 3, text: "Sakarya", isCorrect: true },
        { id: 4, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "QuizModeOn şehirde?",
      options: [
        { id: 1, text: "Ankara", isCorrect: false },
        { id: 2, text: "İstanbul", isCorrect: false },
        { id: 3, text: "Sakarya", isCorrect: false },
        { id: 4, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "QuizModeOn hangi şehirde?",
      options: [
        { id: 1, text: "Ankara", isCorrect: false },
        { id: 2, text: "İstanbul", isCorrect: false },
        { id: 3, text: "Sakarya", isCorrect: false },
        { id: 4, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "QuizModeOn hangi şehirde?",
      options: [
        { id: 1, text: "Ankara", isCorrect: false },
        { id: 2, text: "İstanbul", isCorrect: false },
        { id: 3, text: "Sakarya", isCorrect: false },
        { id: 4, text: "Balıkesir", isCorrect: false },
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
