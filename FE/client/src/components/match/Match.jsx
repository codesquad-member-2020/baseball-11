import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import MatchLog from './MatchLog';
import Player from './Player';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
    background-color : #000;
`;

const MatchInner = styled.div`
    position : relative;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 1200px;
    height : 700px;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const Match = () => {
    const { id } = useParams();
    return (
        <MatchWrap>
            <ScoreBoard />
            <MatchLog />
            <MatchInner>
                <Player />
            </MatchInner>
        </MatchWrap>
    )
}

export default Match
