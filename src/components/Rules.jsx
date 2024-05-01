import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer className="bg-gradient-to-b from-sky-200 via-gray-300 to-gray-50 ">
      <h2 className="text-[1.5rem] font-semibold">How to play dice game</h2>
      <div className="text pt-2">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
`;
