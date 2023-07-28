import { db } from "../firebase";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../appSlice";
// eslint-disable-next-line react/prop-types
const SidebarOptions = ({ id, Icon, title, addChannelOption }) => {
  const dispatch = useDispatch();
  const createChannel = async () => {
    const channelName = prompt("Please Enter the Channel Name");
    try {
      if (channelName) {
        const docRef = await addDoc(collection(db, "rooms"), {
          name: channelName,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? createChannel : selectChannel}
    >
      {Icon && (
        <Icon fontSize="small" style={{ color: "white", padding: "0.7rem " }} />
      )}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionsChannel>
          <span>#</span> {title}
        </SidebarOptionsChannel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.8rem;
  width: 100%;
  > h3 {
    font-weight: 500;
    color: white;
  }

  > span {
    padding: 0.5rem;
  }
  @media screen and (max-width: 538px) {
    > h3 {
      font-size: 10px;
    }
    > .MuiSvgIcon-root {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 407px) {
    > h3 {
      font-size: 9px;
    }
  }
`;
const SidebarOptionsChannel = styled.h3`
  padding: 0.5rem 0.5rem;
  color: white;
  > span {
    font-weight: 300;
    color: white;
    padding: 0.5rem;
  }
`;
