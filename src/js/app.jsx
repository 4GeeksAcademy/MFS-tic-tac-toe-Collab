import React from "react";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";

const App = () => {
  return (
    <div className="container text-center">
      <Home />
      <TicTacToe />
    </div>
  );
};

export default App;