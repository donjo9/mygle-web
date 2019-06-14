import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Game from "./game";
import NewGame from "./newgame";

const Header = styled.header`
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
`;


const Home = () => (
    <>
        <nav>
            <Link to="newgame">New Game</Link>
        </nav>
        <div>Welcome</div>
    </>
);

function App() {
    return (
        <>
            <Header>Mölkky</Header>
            <Router>
                <Game path="game" />
                <NewGame path="newgame" />
                <Home path="/" />
            </Router>
        </>
    );
}

export default App;
