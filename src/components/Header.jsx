import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Header = () => {
  return (
    <HeaderContainer>
      {/* Header-Left */}
      <HeaderLeft>
        <HeaderAvatar
        //To-Do
        />
        <HeaderTime />
      </HeaderLeft>

      {/* Header-Mid */}
      <HeaderSearch>
        <input type="text" placeholder="Search Chit-Chat" />
        <SearchIcon />
      </HeaderSearch>
      {/* Header_Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  background-color: --slack-color;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    /* margin-left: auto; */
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(AccountCircleIcon)`
  cursor: pointer;
  font-size: 40px !important;
  color: white;
  :hover {
    transition: 0.5s ease-in-out;
    opacity: 0.5;
  }
`;
const HeaderTime = styled(AccessTimeIcon)`
  color: white;
`;
const HeaderSearch = styled.div`
  > .MuiSvgIcon-root {
    color: gray;
  }
  display: flex;
  flex: 0.4;
  text-align: center;
  border-radius: 6px;
  opacity: 1;
  padding: 0 2rem;
  color: gray;
  border: 1px solid gray;
  > input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    text-align: center;
    min-width: 30vw;
    color: white;
  }
`;
const HeaderRight = styled.div`
  > .MuiSvgIcon-root {
    color: white;
    margin-right: 1.5rem;
    margin-left: auto;
  }
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`;
