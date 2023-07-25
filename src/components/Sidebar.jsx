import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Sidebar = () => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Chit-Chat</h2>
          <h3>
            <FiberManualRecordIcon />
            Ravi Jha
          </h3>
        </SideBarInfo>
      </SideBarHeader>
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  background-color: rgb(63 14 64);
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 2.5rem;
  max-width: 260px;
`;
const SideBarHeader = styled.div``;
const SideBarInfo = styled.div``;
