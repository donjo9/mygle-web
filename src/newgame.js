import React, { useState, useEffect } from "react";
import styled from "styled-components";

import AddPlayer from "./addplayer";
import { ButtonControl, LinkButton, Button } from "./buttons";
const Container = styled.section`
    display: grid;
`;

const NewGame = () => {
    const [isAddingPlayer, setIsAddingPlayer] = useState(false);

    return (
        <Container>
            <AddPlayer
                visable={isAddingPlayer}
                done={() => setIsAddingPlayer(false)}
            />
            <div>New Game!</div>
            <ButtonControl>
                <Button onClick={() => setIsAddingPlayer(true)}>
                    Add Player
                </Button>
                <LinkButton to="/game">Start Game</LinkButton>
            </ButtonControl>
        </Container>
    );
};

export default NewGame;
