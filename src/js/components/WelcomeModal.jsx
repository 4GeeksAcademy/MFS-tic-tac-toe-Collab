import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircle } from '@fortawesome/free-solid-svg-icons';//REVISAR CIRCULO

const WelcomeModal = ({ onStart }) => {

    const [playerName1, setPlayerName1] = useState("");
    const [playerName2, setPlayerName2] = useState("");
    const [error, setError] = useState(""); //CHECKEO ERROR LLENADOO

    const handlePlayerName1Change = (e) => {
        setPlayerName1(e.target.value);
    };

    const handlePlayerName2Change = (e) => {
        setPlayerName2(e.target.value);
    };


    const handleContinue = () => {
        if (!playerName1 || !playerName2) {
            setError("OOO deben ingresar ambos nombres para jugar! XXX");
            return;

        }

        onStart(playerName1, playerName2);
    };
    return (
        <div className="text-center container">
            <div className="menu">
                <h3 className="text-center mt-5">ingresen sus nombres</h3>
                <div className="d-flex justify-content-center">
                    <div>
                        <FontAwesomeIcon icon={faXmark} size="4x" />
                        <h4>Player 1</h4>
                        <input
                            type="text"
                            placeholder="player 1"
                            value={playerName1}
                            onChange={handlePlayerName1Change}
                            className="form-control"
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faCircle} size="4x" />
                            <h4>Player 2</h4>
                            <input
                                type="text"
                                placeholder="player 2 "
                                value={playerName2}
                                onChange={handlePlayerName2Change}
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                {error && <div className="alert alert-danger mt-3">{error}</div>}

                <div className="mt-4">
                    <button onClick={handleContinue} className="btn btn-primary">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;