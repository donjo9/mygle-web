import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "./gamecontext";
import styled from "styled-components";

const PinBoard = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PinRow = styled.div`
    display: flex;
    justify-content: center;
`;

const Pin = styled.div`
    width: 74px;
    height: 74px;
    font-size: 1rem;
    text-align: center;
    padding: 2px;
    border-radius: 50%;
    background-color: #fff;
    color: black;
    line-height: 74px;
    margin: 2px;
`;

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [gameState, dispatch] = useContext(GameContext);

    return (
        <div>
            Player: {gameState.players[currentPlayer].name} - Score:{" "}
            {gameState.players[currentPlayer].score}/50
            <PinBoard>
                <PinRow>
                    <Pin>7</Pin>
                    <Pin>8</Pin>
                    <Pin>9</Pin>
                </PinRow>
                <PinRow>
                    <Pin>5</Pin>
                    <Pin>11</Pin>
                    <Pin>12</Pin>
                    <Pin>6</Pin>
                </PinRow>
                <PinRow>
                    <Pin>3</Pin>
                    <Pin>10</Pin>
                    <Pin>4</Pin>
                </PinRow>
                <PinRow>
                    <Pin>1</Pin>
                    <Pin>2</Pin>
                </PinRow>
            </PinBoard>
        </div>
    );
};

export default Game;
