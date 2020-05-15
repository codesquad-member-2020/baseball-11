import React, { useState } from 'react'
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
    const [boxOnHitter, setBoxOnHitter] = useState(true);
    const [runners, setRunners] = useState([]);

    return (
        <GroundWrap>
            <GameButtons {...{ boxOnHitter, setBoxOnHitter, runners, setRunners }} />
            <Base {...{ boxOnHitter, runners }} />
        </GroundWrap>
    )
}

export default Ground
