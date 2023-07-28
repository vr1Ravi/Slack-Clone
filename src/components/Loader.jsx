import styled from "@emotion/styled";
import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <AppLoading>
      <AppLoadingContent>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#36c5f0", "#e01e5a", "#ecb22e", "2eb67d", "#849b87"]}
        />
      </AppLoadingContent>
    </AppLoading>
  );
};

export default Loader;

const AppLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AppLoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  height: fit-content;
  > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;
