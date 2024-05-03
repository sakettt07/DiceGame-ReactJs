import styled from "styled-components";
function Numberselector({ seterror, error, selectednum, setselectednum }) {
  const array = [1, 2, 3, 4, 5, 6];
  const numberselectorhandler = (value) => {
    setselectednum(value);
    seterror("");
  };

  return (
    <div className="mt-[-20px] md:mt-0">
      <p className="error text-center mt-20 whitespace-nowrap text-[3vw] md:text-[1.6rem] text-red-800">{error}</p>
      <div className="numbers flex justify-center items-center ">
        {array.map((value, i) => (
          <Box className=" cursor-pointer w-[1vw] px-5 md:h-[72px] md:w-[72px] hover:scale-110"
            isselected={value === selectednum}
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="md:text-[2.3vw] text-[5vw] text-center font-semibold">Select a Number</p>
    </div>
  );
}

export default Numberselector;
const Box = styled.div`
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
