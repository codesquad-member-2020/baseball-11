import React from 'react'
import useSound from '../../utils/useSound';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ScoreBoard from './scoreBoard/ScoreBoard';
import MatchLog from './matchLog/MatchLog';
import Ground from './ground/Ground';
import MatchBGM from '../../audios/MatchBGM.mp3';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
    background-color : #000;
`;

const Match = () => {
    const { id } = useParams();
    useSound(0.6, MatchBGM);

    return (
        <MatchWrap>
            <ScoreBoard />
            <MatchLog />
            <Ground />
        </MatchWrap>
    )
}

export default Match
