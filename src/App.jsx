import { useState } from "react";
import Mainscreen from "./components/mainscreen";
import StartGame from "./components/Startgame";
import "./App.css"

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
