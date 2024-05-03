import styled from "styled-components";
import { useState } from "react";
import sound from "/src/roll_the_dice.mp3";

function Rolldice({ rolldice, dice }) {
  const [audio] = useState(new Audio(sound)); // Update the path to your dice rolling sound

  const playSound = () => {
    audio.play(); // Play the dice rolling sound
  };

  return (
    <div className="flex items-center flex-col relative md:mt-[-30px]">
      <div className="dice cursor-pointer" onClick={() => { rolldice(); playSound(); }}>
        <img className="w-32 md:w-52" src={`/images/dice/dice_${dice}.png`} alt="dice 1" />
      </div>
      <p className="text-[1rem] md:text-[2rem] font-semibold">Click on Dice to roll</p>
    </div>
  );
}

export default Rolldice;
const Dicecont = styled.div`
  p {
    font-size: 20px;
    font-weight: 700;
  }
`;
