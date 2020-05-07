import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MatchWrap = styled.div`
    width : 100%;
    height : 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
    color : #f00;
`;

const Match = () => {
    const { id } = useParams();
    return (
        <MatchWrap>
            게임 화면 이다
        </MatchWrap>
    )
}

export default Match
