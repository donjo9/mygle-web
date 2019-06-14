import React from "react";

const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";

const GameContext = React.createContext();
export { GameContext };
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_PLAYER:
            const players = [...state.players];
            players.push(action.payload);
            return { ...state, players };
        default:
            return state;
    }
};

const GameStore = props => {
    const stateHook = React.useReducer(reducer, {
        players: [
            { name: "Johnni", score: 0, strike: 0 },
            { name: "Andreas", score: 0, strike: 0 },
            { name: "Kathrine", score: 0, strike: 0 }
        ],
        history: []
    });
    return (
        <GameContext.Provider value={stateHook}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameStore;
