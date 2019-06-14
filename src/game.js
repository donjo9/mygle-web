import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "./gamecontext";

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState("");
    const [gameState, dispatch] = useContext(GameContext);

    useEffect(() => setCurrentPlayer(gameState.players[0]), []);
    return <div>player: {currentPlayer}</div>;
};

export default Game;
