import React from 'react'
import styled from 'styled-components';

const PlayerImg = styled.div`
    position : absolute;
    bottom : 30px;
    left : 50%;
    transform : translateX(-50%);
    width : 40px;
    height : 60px;
    background : url('/images/mario.png') no-repeat;
    background-size : 100% 100%;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(.54,-0.39,.8,1.72);
    &.first {
        animation-name: first;
    }
    &.second {
        animation-name: second;
    }
    &.third {
        animation-name: third;
    }
    &.home {
        animation-name: home;
    }
    @keyframes first {
        0%  { bottom:30px; left:50%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:220px; left:72%; }
        100% { transform : translateX(-50%) scaleX(-1); bottom:220px; left:72%; }
    }
    @keyframes second {
        0%  { bottom:220px; left:72%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:330px; left:50%; }
        100% { transform : translateX(-50%) scaleX(-1); bottom:330px; left:50%; }
    }
    @keyframes third {
        0%  { bottom:330px; left:50%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:220px; left:28%; }
        100% { transform : translateX(-50%) scaleX(1); bottom:220px; left:28%; }
    }
    @keyframes home {
        0%  { bottom:220px; left:28%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom: 30px; left:50%; }
        100% { transform : translateX(-50%) scaleX(0); bottom: 30px; left:50%; }
    }
`;

const Player = ({ base }) => {
    return (
        <>
            <PlayerImg className={base} />
        </>
    )
}

export default Player
