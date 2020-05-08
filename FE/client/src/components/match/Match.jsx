import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MatchInfo from './MatchInfo';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const Match = () => {
    const { id } = useParams();
    return (
        <MatchWrap>
            <MatchInfo />
        </MatchWrap>
    )
}

export default Match
