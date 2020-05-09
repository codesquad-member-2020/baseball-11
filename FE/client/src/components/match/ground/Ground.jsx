import React from 'react'
import styled from 'styled-components';
import Hitter from './Hitter';
import GameButtons from './GameButtons';

import { baseCount } from '../../../mock/mock';

const GroundWrap = styled.div`
    position : relative;
    width: 100%;
    height: 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const Ground = () => {
    return (
        <GroundWrap>
            <GameButtons />
            <Hitter />
            {baseCount.base >= 1 && <Hitter base='first' />}
            {baseCount.base >= 2 && <Hitter base='second' />}
            {baseCount.base >= 3 && <Hitter base='third' />}
            {baseCount.base >= 3 && <Hitter base='home' />}
        </GroundWrap>
    )
}

export default Ground
