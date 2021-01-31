import React from "react";
import Main from "./components/main";
import Wrapper from "./components/Wrapper";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;