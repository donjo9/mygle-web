import React from "react";
import styled from "styled-components";
import { ButtonControl, Button } from "./buttons";

const NewPlayerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #415041cc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ModalContentContainer = styled.div`
    position: relative;
    width: 80%;
    height: 300px;
    border-radius: 25px;
    background-color: #1d3e15;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const AddPlayer = props => {
    return (
        <>
            {props.visable ? (
                <NewPlayerModal >
                    <ModalContentContainer>
                        <input />
                        <input />
                        <input />
                        <input />
                        <ButtonControl>
                            <Button onClick={props.done} >Add</Button>
                            <Button onClick={props.done} >Cancel</Button>
                        </ButtonControl>
                    </ModalContentContainer>
                </NewPlayerModal>
            ) : null}
        </>
    );
};

export default AddPlayer;
