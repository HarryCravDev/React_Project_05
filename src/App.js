import React from "react";
import Die from "./Components/Die/Die";

function App() {
  return (
    <div className="App">
      <Die face="one" />
      <Die face="three" />
      <Die face="six" />
    </div>
  );
}

export default App;
