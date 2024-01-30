import { useAppSelector } from "./store/store";
import { RootState } from "./store/store";

function App() {
  const questionState = useAppSelector((state: RootState) => state.question);
  console.log(questionState);

  return (
    <>
      <nav>
        <p>Username:</p>
        <p>Score:</p>
        <p>Rank:</p>
        <p>Settings</p>
      </nav>
      <main>
        <h1>QUIZ</h1>
        <p>Question 1</p>
        <p>{questionState.questions[0].text}</p>
        <div>
          {questionState.questions[0].options.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      </main>

      <p></p>
    </>
  );
}

export default App;
