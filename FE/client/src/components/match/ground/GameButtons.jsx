import React, { useContext } from 'react'
import styled from 'styled-components';
import Hitter from './Hitter';
import { BaseBallContext } from '../../../store/BaseballStore';
import effectSound from '../../../utils/effectSound';
import hitES from '../../../audios/hitES.mp3';

const GameButtonsWrap = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 750px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    & button {
        font-size: 25px;
        width: 220px;
        height: 60px;
        border-radius: 10px;
        outline: none;
    }
`;

const GameButtons = () => {
    const { baseCount, setBaseCount, runners, setRunners, hitterBox, setHitterBox } = useContext(BaseBallContext);
    const hitSound = effectSound(hitES);

    const setRunnerAnim = () => {
        const currRunners = [...runners, <Hitter />];
        const updateRunners = currRunners.map((runner, idx) => {
            if (idx > 3) return;
            let currBase;
            switch (runner.props.currBase) {
                case 'first': currBase = 'second';
                    break;
                case 'second': currBase = 'third';
                    break;
                case 'third': currBase = 'home';
                    break;
                default: currBase = 'first';
                    break;
            }
            return <Hitter key={idx} {...{ currBase }} />
        });
        setRunners([...updateRunners]);
    }

    const handleSwingClick = () => {
        hitSound.play();
        setHitterBox(false);
        setTimeout(() => setHitterBox(true), 2500);
        setRunnerAnim();

        if (baseCount + 1 >= 4) return; // 득점처리
        setBaseCount(baseCount + 1);
    };


    return (
        <GameButtonsWrap>
            <button onClick={handleSwingClick} disabled={!hitterBox}>SWING</button>
            <button disabled={!hitterBox}>WAIT</button>
        </GameButtonsWrap>
    )
}

export default GameButtons