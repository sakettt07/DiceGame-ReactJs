function Score({score}) {
  return (
    <div className="md:w-[20%]">
      <h1 className="md:text-[5vw] text-[16vw] text-center">{score}</h1>
      <p className="md:text-[30px] text-[2rem] md:pb-4 font-semibold text-center">Score</p>
    </div>
  );
};

export default Score;
