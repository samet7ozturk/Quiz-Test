import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosClose } from "react-icons/io";
import img from "../assets/quizmodeon.png";

function HomePage() {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  function openInput() {
    setClick(!click);
  }

  function gameStart() {
    navigate("/quiz-game");
  }

  return (
    <main className="bg-red-400 h-[100vh] flex flex-col justify-center items-center gap-8 text-3xl text-gray-200">
      <img src={img} alt="img" className="w-60" />
      <p>Welcome</p>
      <p>Click the button to start the game.</p>
      <button
        onClick={openInput}
        className="bg-blue-400 rounded-3xl py-4 px-8 hover:scale-110 duration-300 transition"
      >
        START
      </button>
      {click && (
        <div className="bg-blue-400 absolute flex flex-col h-[500px] w-[500px] rounded-3xl justify-evenly px-16">
          <button className="absolute top-4 right-6" onClick={openInput}>
            <IoIosClose className="h-10 w-10" />
          </button>
          <div className="flex justify-between pt-4">
            <label>Name</label>
            <input
              type="text"
              placeholder=" Name"
              className="w-60 rounded-xl"
            ></input>
          </div>
          <div className="flex justify-between">
            <label>Surname</label>
            <input
              type="text"
              placeholder=" Surname"
              className="w-60 rounded-xl"
            ></input>
          </div>
          <div className="flex justify-between">
            <label>Email</label>
            <input
              type="text"
              placeholder=" Email"
              className="w-60 rounded-xl"
            ></input>
          </div>
          <button
            onClick={gameStart}
            className="bg-red-400 rounded-3xl p-4 hover:scale-110 duration-300 transition"
          >
            START
          </button>
        </div>
      )}
    </main>
  );
}

export default HomePage;
