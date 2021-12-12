import React from "react";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import HomePage from "./containers/HomePage/";
import Navbar from "./components/navbar/";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  ${tw`

    w-full
    h-full
    flex
    flex-col
    max-w-screen-2xl
      `}
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
