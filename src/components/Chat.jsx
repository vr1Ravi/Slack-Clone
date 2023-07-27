import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { db } from "../firebase";
import {
  getDoc,
  doc,
  query,
  collection,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { enterLoading } from "../loadingSlice";
const Chat = () => {
  const roomId = useSelector((state) => state.app.roomId);
  const messInstance = useSelector((state) => state.messageinstance.value);
  const loadingState = useSelector((state) => state.loading.value);
  const [roomName, setRoomName] = useState("Room-Name");
  const [messagesSnapshot, setMessagesSnapshot] = useState(null);
  const emptyChatRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (roomId) {
      const getRoomDetails = async () => {
        const docRef = doc(db, "rooms", roomId);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().name);
        setRoomName(docSnap.data().name);
        const q = query(
          collection(db, "rooms", roomId, "messages"),
          orderBy("timestamp", "asc")
        );
        // console.log(q);
        const querySnapshot = await getDocs(q);
        setMessagesSnapshot(querySnapshot);
        // console.log(querySnapshot.docs.map((doc) => doc.data()));
      };
      getRoomDetails();
    }
    emptyChatRef?.current?.scrollIntoView();
  }, [roomId, messInstance, loadingState]);
  dispatch(enterLoading(false));

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>{`# ${roomName}`}</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            {" "}
            <InfoOutlinedIcon />
            Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages>
        {messagesSnapshot?.docs.map((doc) => {
          const { message, timestamp, user, userImage } = doc.data();

          return (
            <ChatMessage
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
        <EmptyChatBox ref={emptyChatRef} />
      </ChatMessages>
      <ChatInput roomName={roomName} roomId={roomId} />
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  background-color: white;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 2.5rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 0.5rem;
  }
  > .muisvgicon-root {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  > p > .MuiSvgIcon-root {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;
const ChatMessages = styled.div``;
const EmptyChatBox = styled.div`
  padding-bottom: 5rem;
`;
