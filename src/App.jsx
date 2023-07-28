import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loader from "./components/Loader";
function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      {!user ? (
        loading ? (
          <Loader />
        ) : (
          <Login />
        )
      ) : (
        <>
          <Header />
          <BrowserRouter>
            <Provider store={store}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <AppBody>
                      <Sidebar />
                      {/* Chat */}
                      <Chat />
                    </AppBody>
                  }
                />
              </Routes>
            </Provider>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;
