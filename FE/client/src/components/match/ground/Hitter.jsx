import React from 'react'
import styled from 'styled-components';

const HitterImg = styled.div`
    position : absolute;
    bottom : 5%;
    left : 50%;
    transform : translateX(-50%);
    width : 3%;
    height : 9%;
    background : url('/images/mario.png') no-repeat;
    background-size : 100% 100%;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(.54,-0.39,.51,1.44);
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
        0%  { bottom:5%; left:50%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:32%; left:72%; }
        100% { transform : translateX(-50%) scaleX(-1); bottom:32%; left:72%; }
    }
    @keyframes second {
        0%  { bottom:32%; left:72%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:48%; left:50%; }
        100% { transform : translateX(-50%) scaleX(-1); bottom:48%; left:50%; }
    }
    @keyframes third {
        0%  { bottom:48%; left:50%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:32%; left:28%; }
        100% { transform : translateX(-50%) scaleX(1); bottom:32%; left:28%; }
    }
    @keyframes home {
        0%  { bottom:32%; left:28%; }
        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:-10%; left:62.5%; }
        100% { transform : translateX(-50%) scaleX(1); bottom:-10%; left:62.5%; }
    }
`;

const Hitter = ({ currBase }) => {
    return (
        <HitterImg className={currBase} />
    )
}

export default Hitter
