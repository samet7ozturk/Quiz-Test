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
      text: "In which city is QuizModeOn located?",
      options: [
        { id: 12, text: "Ankara", isCorrect: false },
        { id: 13, text: "İstanbul", isCorrect: true },
        { id: 14, text: "Sakarya", isCorrect: false },
        { id: 15, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Where is the capital of Turkey?",
      options: [
        { id: 16, text: "Ankara", isCorrect: true },
        { id: 17, text: "İstanbul", isCorrect: false },
        { id: 18, text: "Sakarya", isCorrect: false },
        { id: 19, text: "Balıkesir", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "How many geographical regions does Turkey consist of?",
      options: [
        { id: 20, text: "5", isCorrect: false },
        { id: 21, text: "6", isCorrect: false },
        { id: 22, text: "7", isCorrect: true },
        { id: 23, text: "8", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which sea does Turkey not have a coastline on?",
      options: [
        { id: 24, text: "Karadeniz", isCorrect: false },
        { id: 25, text: "Akdeniz", isCorrect: false },
        { id: 26, text: "Ege Denizi", isCorrect: false },
        { id: 27, text: "Kızıldeniz", isCorrect: true },
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
