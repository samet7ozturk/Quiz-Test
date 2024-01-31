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
      <nav
        className={`flex justify-between items-center h-16 ${
          click1 ? "bg-[#22092C]" : "bg-[#87C4FF]"
        } px-6`}
      >
        <div className="flex gap-4 text-white">
          <p>Username:</p>
          <p>Score:{score}</p>
          <p>Rank:</p>
        </div>

        <div className="flex gap-4">
          <select>
            <option value="turkish">Türkçe</option>
            <option value="english">İngilizce</option>
          </select>
          <button onClick={switchTheme}>
            {click1 ? "light mode" : "dark mode"}
          </button>
        </div>
      </nav>

      <main
        className={`${
          click1 ? "bg-[#872341]" : "bg-[#E0F4FF]"
        } h-[calc(100vh_-_64px)]`}
      >
        <div className="flex justify-center pt-20">
          <h1 className="text-3xl">QUIZ</h1>
        </div>

        <div className="flex justify-center py-8">
          <p className="text-2xl">Question {`${count}`}</p>
        </div>
        <div className="flex justify-center pb-8">
          <p className="text-2xl">{questionState.questions[`${count}`].text}</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {questionState.questions[0].options.map((item) => (
            <button
              className={`border-2 rounded-lg w-[200px] h-[40px] hover:scale-105 transition ${
                click1 ? "bg-[#F05941]" : "bg-[#39A7FF]"
              } text-white text-xl`}
              key={item.id}
              onClick={() => handleOptionClick(item.correct)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
