import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [channels, loading, error] = useCollection(collection(db, "rooms"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [user] = useAuthState(auth);
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Chit-Chat</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  background-color: rgb(63 14 64);
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 3.5rem;
  max-width: 260px;
  > hr {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #49274b;
  }
  :hover {
    opacity: 0.9;
    background-color: #49274b;
    transition: all 0.5s;
  }
  overflow-y: scroll;
`;
const SideBarHeader = styled.div`
  > .MuiSvgIcon-root {
    color: #49274b;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: white;
    border-radius: 100%;
  }
  border-bottom: 1px solid #49274b;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  @media screen and (max-width: 538px) {
    > .MuiSvgIcon-root {
      position: absolute;
      display: none;
    }
  }
  @media screen and (max-width: 407px) {
    font-size: 13px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0.25rem;
    color: white;
  }
  > h3 {
    display: flex;
    font-size: 1rem;
    color: white;
    font-weight: 400;
    align-items: center;
    > .MuiSvgIcon-root {
      color: green;
      font-size: 0.8rem;
      margin-top: 0.1rem;
      margin-right: 0.2rem;
    }

    @media screen and (max-width: 407px) {
      font-size: 13px;
    }
  }
`;
