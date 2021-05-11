import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import TinderCard from "./components/Cards/TinderCard";
import SwipeButtons from "./components/SwipeButtons";
import ChatRoom from "./components/ChatRoom";
import ChatScreen from "./components/ChatRoom/ChatScreen";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    margin: 0;
    color: black;
    font-weight: 300;
    background: white;
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <ChatRoom />
          </Route>
          <Route path="/home">
            <Header />
            <TinderCard />
            <SwipeButtons />
          </Route>
          <Route exact path="/">
            <LogIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
