/* eslint-disable react/prop-types */
import styled from "styled-components";
const ChatMessage = ({ message, timestamp, user, userImage }) => {
  console.log(timestamp);
  return (
    <MessageZone>
      <img src={userImage} alt="userImg" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageZone>
  );
};

export default ChatMessage;
const MessageZone = styled.div`
  display: flex;
  padding: 1.1rem;
  align-items: center;
  > img {
    height: 3.1rem;
    width: 3.1rem;
    border-radius: 50%;
  }
`;
const MessageInfo = styled.div`
  padding-left: 0.7rem;
  > h4 > span {
    color: gray;
    font-size: 0.7rem;
    font-weight: 300;
    margin-left: 0.4rem;
  }
`;
