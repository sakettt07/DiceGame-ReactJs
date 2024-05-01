import styled from "styled-components";
function Numberselector({ seterror, error, selectednum, setselectednum }) {
  const array = [1, 2, 3, 4, 5, 6];
  const numberselectorhandler = (value) => {
    setselectednum(value);
    seterror("");
  };

  return (
    <div className=" p-4">
      <p className="error text-center text-[1.6rem] text-red-800">{error}</p>
      <div className="numbers md:flex-row md:flex flex-col">
        {array.map((value, i) => (
          <Box className=" cursor-pointer hover:scale-110"
            isselected={value === selectednum}
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="text-[2.3vw] text-center font-semibold">Select a Number</p>
    </div>
  );
}

export default Numberselector;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
