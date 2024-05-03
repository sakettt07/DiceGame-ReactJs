import Numberselector from "./Numberselector";
import Score from "./Score";
import Rolldice from "./Rolldice";
import { useState } from "react";
import Rules from "./Rules";

const Mainscreen = () => {
  const [score, setscore] = useState(0);
  const [selectednum, setselectednum] = useState();
  const [dice, setdice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generaterandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolldice = () => {
    if (!selectednum) {
      seterror("You have not selected any number");
      return;
    }
    const randomnum = generaterandom(1, 7);
    setdice((prev) => randomnum);

    if (selectednum == randomnum) {
      setscore((prev) => prev + randomnum);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectednum(undefined);
  };
  const resetScore = () => {
    setscore(0);
  };
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-400 to-sky-800 min-h-screen">
      <div className="maincont md:flex justify-between px-10 py-6 items-center">
        <Score score={score} />
        <Numberselector
          error={error}
          seterror={seterror}
          selectednum={selectednum}
          setselectednum={setselectednum}
        />
      </div>
      <Rolldice dice={dice} rolldice={rolldice} />
      <div className="btns flex w-full p-6 md:p-5 justify-center md:gap-7 gap-4">
        <button
          className=" bg-black p-3 md:px-4 md:py-3 rounded-md text-[5vw] md:text-[2vw] px-8 hover:bg-white text-white hover:text-black"
          onClick={resetScore}
        >
          Reset Score
        </button>
        <button className=" bg-black text-[5vw] p-3 md:px-4 md:py-3 rounded-md md:text-[2vw] px-8 hover:bg-white text-white hover:text-black" onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      {showRules && <Rules />}
    </div>
  );
};

export default Mainscreen;

