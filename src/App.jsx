import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
import Chat from "./components/Chat";
function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;

const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;
