import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosClose } from "react-icons/io";
import img from "../assets/quizmodeon.png";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { sendLoginInfo } from "../slices/userSlice";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [click, setClick] = useState(false);

  type FormData = {
    name: string;
    surname: string;
    email: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    dispatch(sendLoginInfo({ ...data }));
  }

  function openInput() {
    setClick(!click);
  }

  function gameStart() {
    navigate("/quiz-game");
  }

  return (
    <main className="bg-red-400 h-[100vh] flex flex-col justify-center items-center gap-8 text-3xl text-gray-200 animate-fade-down">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-blue-400 absolute flex flex-col h-[500px] w-[500px] rounded-3xl justify-evenly px-16 animate-animation1"
        >
          <button className="absolute top-4 right-6" onClick={openInput}>
            <IoIosClose className="h-10 w-10" />
          </button>
          <label className="flex justify-between">
            <p>Name</p>
            <input
              type="text"
              {...register("name", {
                required: "Name is required!",
              })}
              placeholder=" Name"
              className="w-60 rounded-xl"
            ></input>
            <p>{errors.name?.message}</p>
          </label>
          <label className="flex justify-between">
            <p>Surname</p>
            <input
              type="text"
              {...register("surname", {
                required: "Surname is required!",
              })}
              placeholder=" Surname"
              className="w-60 rounded-xl"
            ></input>
            <p>{errors.surname?.message}</p>
          </label>
          <label className="flex justify-between">
            <p>Email</p>
            <input
              type="text"
              {...register("email", {
                required: "Email is required!",
              })}
              placeholder=" Email"
              className="w-60 rounded-xl"
            ></input>
            <p>{errors.email?.message}</p>
          </label>
          <button
            onClick={gameStart}
            className="bg-red-400 rounded-3xl p-4 hover:scale-110 duration-300 transition"
          >
            START
          </button>
        </form>
      )}
    </main>
  );
}

export default HomePage;
