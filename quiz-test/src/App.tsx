import { useState } from "react";
import { useAppSelector } from "./store/store";
import { RootState } from "./store/store";

function App() {
  const [click1, setClick1] = useState(true);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const questionState = useAppSelector((state: RootState) => state.question);
  console.log(questionState);

  const switchTheme = () => {
    setClick1(!click1);
  };

  const handleOptionClick = (optionCorrect: boolean) => {
    console.log(`Option ${optionCorrect} clicked`);
    if (count < questionState.questions.length - 1) {
      if (optionCorrect == true) {
        setCount((count) => count + 1);
        setScore((score) => score + 10);
      } else {
        setScore((score) => score - 10);
      }
    } else {
      console.log("Tebrikler oyunu kazandınız!");
    }
  };

  return (
    <>
      <nav>
        <p>Username:</p>
        <p>Score:{score}</p>
        <p>Rank:</p>
        <p>Settings</p>
        <select>
          <option value="turkish">Türkçe</option>
          <option value="english">İngilizce</option>
        </select>
        <button onClick={switchTheme}>
          {click1 ? "dark mode" : "light mode"}
        </button>
      </nav>
      <main>
        <h1>QUIZ</h1>
        <p>Question {`${count}`}</p>
        <p>{questionState.questions[`${count}`].text}</p>
        <div>
          {questionState.questions[0].options.map((item) => (
            <button
              key={item.id}
              onClick={() => handleOptionClick(item.correct)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </main>

      <p></p>
    </>
  );
}

export default App;
