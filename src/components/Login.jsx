import { Button } from "@mui/material";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginBox>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Chit-Chat</h1>
        <Button onClick={signIn}>
          {" "}
          <FcGoogle /> Sign In With Google
        </Button>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f8f8f8;
`;
const LoginBox = styled.div`
  background-color: white;
  padding: 6rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 2.8rem;
  }
  > Button {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    border: 2px solid gray;
    color: black;
    font-weight: 900;
    font-size: 1rem;
    text-transform: inherit !important;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      margin-right: 30px;
    }
    @media screen and (max-width: 404px) {
      font-size: 9px;
    }
    @media screen and (max-width: 337px) {
      font-size: 6px;
    }
  }
  @media screen and (max-width: 464px) {
    > h1 {
      font-size: 20px;
    }
  }
`;
