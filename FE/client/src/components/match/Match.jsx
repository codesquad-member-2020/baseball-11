import React from 'react'
import useSound from '../../utils/useSound';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import MatchLog from './MatchLog';
import Ground from './Ground';
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
