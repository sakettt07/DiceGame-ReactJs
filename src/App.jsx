import { useState } from "react";
import StartGame from "./components/Startgame";
import "./App.css";
import Mainscreen from "./components/Mainscreen";

function App() {
  const [isGamestarted, setIsGamestarted] = useState(false);
  const togglegameplay = () => {
    setIsGamestarted((prev) => !prev);
  };
  return (
    <>
      {isGamestarted ? <Mainscreen /> : <StartGame toggle={togglegameplay} />}
    </>
  );
}

export default App;
