import React from 'react'
import styled from 'styled-components';

const GameButtonsWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & button {
        font-size: 25px;
        width: 220px;
        height: 60px;
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
