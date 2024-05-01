import styled from "styled-components";

function Rolldice({ rolldice, dice }) {
  return (
    <div className="flex items-center flex-col mt-[-30px]">
      <div className="dice  cursor-pointer" onClick={rolldice}>
        <img className="w-32 md:w-52" src={`/images/dice/dice_${dice}.png`} alt="dice 1"></img>
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
