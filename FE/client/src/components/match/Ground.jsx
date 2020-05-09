import React from 'react'
import styled from 'styled-components';
import Player from './Player';
import GameButtons from './GameButtons';

import { baseCount } from '../../mock/mock';

const GroundWrap = styled.div`
    position : relative;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 1200px;
    height : 700px;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const Ground = () => {
    return (
        <GroundWrap>
            <GameButtons />
            {baseCount.base >= 1 && <Player base='first' />}
            {baseCount.base >= 2 && <Player base='second' />}
            {baseCount.base >= 3 && <Player base='third' />}
            {/* {baseCount.base >= 3 && <Player base='home' />} */}
        </GroundWrap>
    )
}

export default Ground
