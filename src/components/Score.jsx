function Score({score}) {
  return (
    <div className=" w-[20%]">
      <h1 className="text-[5vw] text-center">{score}</h1>
      <p className="text-[30px] pb-4 font-semibold text-center">Total Score</p>
    </div>
  );
};

export default Score;
