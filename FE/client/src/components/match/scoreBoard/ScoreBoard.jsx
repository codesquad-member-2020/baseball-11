import React from 'react'
import styled from 'styled-components';
import TopBoard from './TopBoard';
import BottomBoard from './BottomBoard';

const ScoreBoardWrap = styled.div`
    outline : 1px solid #5a5a5a;
    position : absolute;
    top : 30px;
    left : 30px;
    width : 300px;
    height : 150px;
    color : #fff;
    text-align : center;
    z-index : 1;
`;

const ScoreBoard = () => {
    return (
        <ScoreBoardWrap>
            <TopBoard />
            <BottomBoard />
        </ScoreBoardWrap>
    )
}

export default ScoreBoard
