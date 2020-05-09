import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import MatchLog from './MatchLog';
import Ground from './Ground';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
    background-color : #000;
`;

const Match = () => {
    const { id } = useParams();
    return (
        <MatchWrap>
            <ScoreBoard />
            <MatchLog />
            <Ground />
        </MatchWrap>
    )
}

export default Match
