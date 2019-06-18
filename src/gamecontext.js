import React from "react";

const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
const SAVE_SCORE_FOR_PLAYER = "SAVE_SCORE_FOR_PLAYER";
const NEW_GAME = "NEW_GAME";

const INITIAL_STATE = {
    players: [],
    history: [],
    currentPlayer: 0,
    winner: null,
    loosers: []
};
const GameContext = React.createContext();
export { GameContext, ADD_NEW_PLAYER, SAVE_SCORE_FOR_PLAYER, NEW_GAME };
const reducer = (state, action) => {
    switch (action.type) {
        case NEW_GAME:
            return {
                ...INITIAL_STATE
            };
            break;
        case ADD_NEW_PLAYER:
            const newplayers = [...state.players];
            if (
                newplayers.find(
                    player => player["name"] === action.payload.trim()
                )
            ) {
                return state;
            }
            newplayers.push({ name: action.payload, score: 0, strike: 0 });
            return { ...state, players: newplayers };
        case SAVE_SCORE_FOR_PLAYER:
            const players = [...state.players];
            const history = [...state.history];
            let loosers = [...state.loosers];
            let playerRemoved = false;
            let winner = null;
            let nextPlayer = state.currentPlayer;

            const pins = action.payload.score.length;
            if (pins) {
                players[nextPlayer].strike = 0;
                if (pins > 1) {
                    players[nextPlayer].score += pins;
                } else {
                    players[nextPlayer].score += action.payload.score[0];
                }
                if (players[nextPlayer].score > 50) {
                    players[nextPlayer].score = 25;
                } else if (players[nextPlayer].score === 50) {
                    winner = players[nextPlayer];
                }
            } else {
                players[nextPlayer].strike += 1;
                if (players[nextPlayer].strike === 3) {
                    let looser = { ...players[nextPlayer] };
                    loosers.push(looser);
                    players.splice(nextPlayer, 1);
                    playerRemoved = true;
                }
            }
            if (!playerRemoved) {
                ++nextPlayer;
            }
            if (nextPlayer >= players.length) {
                nextPlayer = 0;
            }
            if (players.length === 1) {
                winner = players[nextPlayer];
            }
            return {
                ...state,
                loosers,
                players,
                winner,
                currentPlayer: nextPlayer
            };
        default:
            return state;
    }
};

const GameStore = props => {
    const stateHook = React.useReducer(reducer, {
        ...INITIAL_STATE,
        //players: [{ name: "Johnni", score: 0, strike: 0 }, { name: "Andreas", score: 0, strike: 0 }, { name: "Kathrine", score: 0, strike: 0 }]
    });
    return (
        <GameContext.Provider value={stateHook}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameStore;
