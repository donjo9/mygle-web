import React, { useContext } from "react";
import styled from "styled-components";
import { Router, navigate } from "@reach/router";
import Game from "./game";
import NewGame from "./newgame";
import GameStore, { GameContext, NEW_GAME } from "./gamecontext";
import { LinkButton, Button } from "./buttons";

const Header = styled.header`
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    color: var(--brigthyarrow);
    font-weight: 600;
`;

const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const RulesPageContainer = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const RulesPage = () => {
    return (
        <RulesPageContainer>
            <LinkButton to="/" style={MenuButton}>
                Home
            </LinkButton>
            <div>
                <h1>Spillets gang</h1>
                <h3>Efter tur:</h3>
                <p>
                    Ved spillets start trækkes lod om, hvem der skal begynde. I
                    de efterfølgende spil kastes i henhold til de tidligere
                    spilleresultater (fra lavest til højeste point).
                </p>
                <h3>Spillets start:</h3>
                <p>
                    Den første spiller kaster Mölkky-pinden mod keglerne og
                    prøver at vælte så mange som muligt. Mölkky-pinden skal
                    altid kastes med et underhåndskast.
                </p>
                <h3>Væltede kegler:</h3>
                <p>
                    En kegle regnes ikke som væltet, hvis den læner sig op ad en
                    anden kegle eller ligger på Mölkky-pinden. Efter et kast
                    stilles alle kegler op igen, på samme sted som de faldt.
                </p>
                <h3>Point: </h3>
                <p>
                    Hvis 1 kegle væltes, er nummeret på keglen lig med antal
                    point. Hvis flere kegler væltes, tælles point for samtlige
                    væltede kegler.
                </p>
                <h3>Spillets afslutning:</h3>
                <p>
                    Hvis en spiller ikke vælter kegler ved tre kast i træk, er
                    denne person ude af spillet og skal skrive point. Spillet
                    afsluttes, når en spiller har fået nøjagtigt 50 point. Hvis
                    en spiller får over 50 point, halveres de til 25 point, og
                    spilleren fortsætter.
                </p>
            </div>
        </RulesPageContainer>
    );
};

const MenuButton = { width: "80%" };

const Home = () => {
    const [GameState, dispatch] = useContext(GameContext);
    return (
        <HomeContainer>
            <Button
                style={MenuButton}
                onClick={() => {
                    navigate("newgame");
                    dispatch({ type: NEW_GAME });
                }}
            >
                New Game
            </Button>
            <LinkButton style={MenuButton} to="rules">
                Rules
            </LinkButton>
        </HomeContainer>
    );
};

function App() {
    return (
        <>
            <Header>Mölkky</Header>
            <GameStore>
                <Router>
                    <Game path="game" />
                    <NewGame path="newgame" />
                    <Home path="/" />
                    <RulesPage path="/rules" />
                </Router>
            </GameStore>
        </>
    );
}

export default App;
