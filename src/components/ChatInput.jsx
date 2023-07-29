/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { useState } from "react";
import styled from "styled-components";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import { setMessageInstance } from "../messageInstanceSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsSendFill } from "react-icons/bs";
const ChatInput = ({ roomName, roomId, emptyChatRef }) => {
  const [inputVal, setInputValue] = useState("");
  const [user] = useAuthState(auth);
  const dipatch = useDispatch();
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!roomId) return false;
    await addDoc(
      collection(db, "rooms", roomId, "messages"),
      {
        message: inputVal,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      },
      { merge: true }
    );
    dipatch(setMessageInstance(inputVal));
    setInputValue("");
    emptyChatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
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
          <BsSendFill />
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
  > form > button {
    display: none !important;
    position: fixed;
    right: 1rem;
    bottom: 2.5rem;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    > form > button {
      display: block !important;
    }
  }
`;
