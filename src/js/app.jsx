import React, { useState } from "react";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import WelcomeModal from "./components/WelcomeModal";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  //const showmodal= useState(true);
  //const -playername1 set playername1 =useState("")
  // const -playername2 set playername2 =useState("")??//

  //const startGame= name1.name2 =>
  // setPlayer1Name
  // setPlayer2name
  //setshowmodal(false);//

  const startGame = (name1, name2) => {
    setPlayerName1(name1);
    setPlayerName2(name2);
    setShowModal(false);
  };

  return (
    <div className="container text-center">
      <Home />
      {showModal ? (
        <WelcomeModal onStart={startGame} />
      ) : (
        <TicTacToe player1={playerName1} player2={playerName2} />
      )}
    </div>
  );
};

export default App;