import React from 'react'
import styled from 'styled-components';

const GameButtonsWrap = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 750px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    & button {
        font-size: 25px;
        width: 220px;
        height: 60px;
        border-radius: 10px;
        outline: none;
    }
`;

const GameButtons = () => {
    return (
        <GameButtonsWrap>
            <button>SWING</button>
            <button>WAIT</button>
        </GameButtonsWrap>
    )
}

export default GameButtons
