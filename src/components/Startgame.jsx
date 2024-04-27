
import Rolldice from "../rolldice.json";
import Lottie from "lottie-react";

const StartGame = ({ toggle }) => {
  return (
    <div className=" w-full h-screen bg-gradient-to-tr from-slate-700 via-zinc-500 to-zinc-900 grid grid-cols-1 md:grid-cols-2">
      <div className="p-20">
        <Lottie className="md:w-[89%]" animationData={Rolldice} />
      </div>
      <div className="md:p-20 flex flex-col md:pt-52 items-center">
        <h1 className="text-center md:mt-0 mt-[-10rem] md:pr-10 text-[13vw] md:text-[6.9vw] font-semibold whitespace-nowrap">DICE🎲<span className="text-white">GAME</span></h1>
        <button className="ml-1 mt-5 bg-black p-4 md:p-7 rounded-md md:text-[2vw] px-16 hover:bg-white text-white hover:text-black" onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};

export default StartGame;

