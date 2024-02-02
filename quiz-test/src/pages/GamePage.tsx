import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  scoreDecrease,
  scoreIncrease,
  lifeDecrease,
  lifeIncrease,
} from "../slices/userSlice";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import img from "../assets/profil.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  TbTimeDuration10,
  TbExposurePlus1,
  TbMultiplier2X,
} from "react-icons/tb";
import { LiaTrophySolid } from "react-icons/lia";

function GamePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const questionStateTr = useAppSelector(
    (state: RootState) => state.questionTr
  );
  const questionStateEn = useAppSelector(
    (state: RootState) => state.questionEn
  );
  const userState = useAppSelector((state: RootState) => state.user);

  const MySwal = withReactContent(Swal);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(30);
  const [click1, setClick1] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  //const [darkMode, setDarkMode] = useState("");
  const [gameWinner, setGameWinner] = useState(false);
  const [life, setLife] = useState(userState.user[0].life);
  const [joker1Used, setJoker1Used] = useState(false);
  const [joker2Used, setJoker2Used] = useState(false);
  const [questions, setQuestions] = useState(questionStateTr);
  const [sentences, setSentences] = useState({
    username: "Kullanıcı Adı:",
    score: "Skor:",
    question: "Soru",
  });

  const storedUserData = localStorage.getItem("user");
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  function handleLanguageChange(selectedValue: string) {
    if (selectedValue == "turkish") {
      setQuestions(questionStateTr);
      setSentences({
        username: "Kullanıcı Adı:",
        score: "Score:",
        question: "Soru",
      });
    } else if (selectedValue == "english") {
      setQuestions(questionStateEn);
      setSentences({
        username: "Username:",
        score: "Score:",
        question: "Question",
      });
    }
  }

  function switchTheme() {}

  const joker1 = () => {
    if (life < 3) {
      setLife(life + 1);
      setJoker1Used(true);
      dispatch(lifeIncrease());
    }
  };

  const joker2 = () => {
    setJoker2Used(true);
    if (timer + 10 <= 30) {
      setTimer(timer + 10);
    } else {
      setTimer(30);
    }
  };

  const joker3 = () => {};

  const handleFire = () => {
    Swal.fire({
      title: "Congratulations!",
      text: "Correct answer!",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  function handleOptionClick(optionId: number, optionisCorrect: boolean) {
    if (count < questionStateTr.questions.length - 1) {
      if (optionisCorrect === true) {
        setCount((count) => count + 1);
        dispatch(scoreIncrease());
        setTimer(30);
        setShowCorrect(!showCorrect);
        handleFire();
      } else {
        dispatch(scoreDecrease());
        setShowCorrect(!showCorrect);
        if (life > 0) {
          setLife(life - 1);
          dispatch(lifeDecrease());
        } else if (life == 0) {
        }
      }
    } else {
      setGameWinner(!gameWinner);
      console.log("Tebrikler oyunu kazandınız!");
    }
    setSelectedOption(optionId);
    setShowCorrect(true);
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    if (count === questionStateTr.questions.length - 1 || timer === 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [count, timer, questionStateTr.questions.length]);

  const circumference = 60 * 2 * Math.PI;
  const [circleOffset, setCircleOffset] = useState(circumference);

  useEffect(() => {
    setCircleOffset(circumference - (timer / 60) * circumference);
  }, [timer]);

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 ${
           darkMode:bg-[#2b2a2d]  bg-[#849df5]
         px-6 font-rubik text-xl"
      >
        <div className="flex gap-4 text-white items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={img} />
            </div>
          </div>
          <p>{`${sentences.username} ${user.name}`}</p>
          <p>{`${sentences.score} ${user.score}`}</p>
        </div>

        <div className="flex items-center gap-4">
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="rounded-md h-8 text-base"
          >
            <option value="turkish">Turkish</option>
            <option value="english">English</option>
          </select>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={switchTheme}
            />
            <svg
              className="swap-on fill-current w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>

      <main
        className={`${
          click1 ? "bg-[#5b595e]" : "bg-[#f1f0ef]"
        } h-[calc(100vh_-_64px)] font-black tracking-wider font-normal`}
        key={count}
      >
        <div className="flex justify-center pt-20 animate-animation3">
          <h1 className="text-[40px]">QUIZ</h1>
        </div>

        <div className="flex justify-center gap-12 py-8 animate-animation3">
          <button
            onClick={joker1}
            disabled={joker1Used}
            className="disabled:opacity-35"
          >
            <TbExposurePlus1 className="text-2xl" />
          </button>
          <button
            onClick={joker2}
            disabled={joker2Used}
            className="disabled:opacity-35"
          >
            <TbTimeDuration10 className="text-3xl" />
          </button>
          <button onClick={joker3}>
            <TbMultiplier2X className="text-3xl" />
          </button>
        </div>

        <div className="flex justify-around py-8 animate-animation2">
          <div>
            <div className="flex  py-8">
              <p className="text-2xl">{`${sentences.question} ${count + 1}`}</p>
            </div>
            <div className="flex justify-center pb-8">
              <p className="text-xl ">{questions.questions[`${count}`].text}</p>
            </div>
          </div>

          <div className="flex gap-4 text-2xl">
            {Array(life)
              .fill("faHeart")
              .map((_, index) => (
                <FaHeart key={index} />
              ))}
            {Array(3 - life)
              .fill("faRegHeart")
              .map((_, index) => (
                <FaRegHeart key={index} />
              ))}
          </div>

          <div className="flex items-center justify-center overflow-hidden rounded-full">
            <svg className="w-20 h-20">
              <circle
                className="text-[#5b595e]"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-[#2b2a2d]"
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={circleOffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
            </svg>
            <span className="absolute text-xl text-[#2b2a2d]">{`${timer}`}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-y-12 justify-between w-[750px] animate-animation2">
            {questionStateTr.questions[`${count}`].options.map((item) => (
              <button
                className={`border border-none rounded-lg w-[300px] h-[40px] hover:scale-105 transition ${
                  showCorrect && !item.isCorrect && selectedOption === item.id
                    ? "bg-red-500"
                    : "bg-slate-300"
                } text-white text-xl tracking-wider font-light`}
                key={item.id}
                onClick={() => handleOptionClick(item.id, item.isCorrect)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
        {gameWinner && (
          <div className="absolute top-[40%] left-[37%] bg-white rounded-md w-[400px] h-[300px] flex flex-col items-center justify-center gap-8">
            <p>Congratulations! You Won the Game.</p>
            <p>{`Score:${user.score}`}</p>
            <div>
              <LiaTrophySolid className="h-16 w-16 text-yellow-400" />
            </div>
            <button onClick={goToHomePage}>Play Again</button>
          </div>
        )}
        {!life && (
          <div
            className={`absolute top-[40%] left-[37%] ${
              click1 ? "bg-[#2b2a2d]" : "bg-[]"
            } rounded-md w-[400px] h-[300px] flex flex-col items-center justify-center gap-8 text-white`}
          >
            <p>Unfortunately, You Lost the Game.</p>
            <p>{`Score:${user.score}`}</p>
            <div>
              <LiaTrophySolid className="h-16 w-16 text-yellow-400" />
            </div>
            <button
              onClick={goToHomePage}
              className={`${click1 ? "bg-[#7a7385]" : ""} rounded-md w-28 h-8`}
            >
              Play Again
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default GamePage;
