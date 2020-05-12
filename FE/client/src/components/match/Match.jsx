import React from 'react'
import useSound from '../../hooks/useSound';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ScoreBoard from './scoreBoard/ScoreBoard';
import MatchLog from './matchLog/MatchLog';
import Ground from './ground/Ground';
import DetailInfo from './detailInfo/DetailInfo';
import MatchBGM from '../../audios/MatchBGM.mp3';
import MatchStore from '../../store/MatchStore';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
`;

const Match = () => {
    const { id } = useParams();
    useSound(MatchBGM, 0.3, 2000);

    return (
        <MatchWrap>
            <MatchStore>
                <ScoreBoard />
                <MatchLog />
                <Ground />
                <DetailInfo />
            </MatchStore>
        </MatchWrap>
    )
}

export default Match
