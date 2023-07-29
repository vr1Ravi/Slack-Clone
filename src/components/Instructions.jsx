import styled from "styled-components";
import { GrHostMaintenance } from "react-icons/gr";

const Instructions = () => {
  return (
    <InstructionBox>
      <h1> ↪ Instructions:</h1>
      <h3>
        ▶{" "}
        <span>
          This app is under Development (
          <GrHostMaintenance />
          ).For now you can only chat with your friends.
        </span>
      </h3>
      <p> 👉 Select Any Channel in bottom left and start messasing.</p>
      <p> 👉 To Create New Channel Click on Add Channel.</p>
    </InstructionBox>
  );
};

export default Instructions;

const InstructionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 1rem;
  flex-direction: column;
  text-align: center;
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #3f0e40;
  }
  > h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #3f0e40;
    > span {
      color: gray;
      font-size: 1.5rem;
      svg {
        color: blue;
        font-size: 1rem;
      }
    }
  }
  > p {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: green;
  }
  @media screen and (max-width: 550px) {
    margin-left: 8px;
    > h3 > span {
      font-size: 12px;
      > svg {
        font-size: 8px;
      }
    }
    > p {
      font-size: 10px;
    }
  }
`;
