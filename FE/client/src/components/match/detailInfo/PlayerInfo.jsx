import React from 'react'
import styled from 'styled-components';

const PlayerInfoWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const PlayerInfoBox = styled.div`
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 250px;
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    &.show-content {
        animation-name: show-content;
    }
    &.hide-content {
        animation-name: hide-content;
    }
    @keyframes show-content {
        0%  { top: -20%; }
        100% { top: 25%; }
    }
    @keyframes hide-content {
        0%  { top: 25%; }
        100% { top: -20%; }
    }
`;

const PlayerInfo = ({ showPlayerInfo }) => {
    const showClassName = showPlayerInfo ? 'show-content' : 'hide-content';

    return (
        <PlayerInfoWrap data-type='contentPanel'>
            <PlayerInfoBox className={showClassName}>

            </PlayerInfoBox>
        </PlayerInfoWrap>
    )
}

export default PlayerInfo
