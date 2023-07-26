/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { useState } from "react";
import styled from "styled-components";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
const ChatInput = ({ roomName, roomId }) => {
  const [inputVal, setInputValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!roomId) return false;
    await setDoc(doc(db, "rooms", roomId, "messages", "messages1"), {
      message: inputVal,
      timestamp: serverTimestamp(),
      user: "ravi jha",
      userImage: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg`,
    });
    setInputValue("");
  };
  return (
    <ChatInputBox>
      <form>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputVal}
          placeholder={`Message #${roomName}`}
        />
        <Button type="Submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputBox>
  );
};

export default ChatInput;

const ChatInputBox = styled.div`
  border-radius: 23px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 1.9rem;
    width: 60%;
    outline: none;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1.1rem;
    transition: all 0.5s ease-in-out;
  }
  > form > input:focus {
    border: 2px solid #49274b;
  }
`;
