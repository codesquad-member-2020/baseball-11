import React from 'react'
import styled from 'styled-components';
import Base from './Base';
import GameButtons from './GameButtons';

const GroundWrap = styled.div`
    position : relative;
    width: 100%;
    height: 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
    overflow: hidden;
`;

const Ground = () => {
    return (
        <GroundWrap>
            <GameButtons />
            <Base />
        </GroundWrap>
    )
}

export default Ground
