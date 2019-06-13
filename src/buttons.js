import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const ButtonStyle = css`
    border: 0;
    box-shadow: 0 0 5px 0 lightgreen;
    margin: 10px;
    background-color: #228343;
    border-radius: 10px;
    padding: 5px;
    color: #eee;
    max-width: 300px;
    min-width: 100px;
    text-decoration: none;
    text-align: center;
`;
const LinkButton = styled(Link)`
    ${ButtonStyle}
`;
const Button = styled.button`
    ${ButtonStyle}
`;

const ButtonControl = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export { LinkButton, Button, ButtonControl };
