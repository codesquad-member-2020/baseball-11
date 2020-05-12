import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import Hitter from './Hitter';
import { MatchContext } from '../../../store/MatchStore';
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

const GameButtons = ({ boxOnHitter, setBoxOnHitter, runners, setRunners }) => {
    const { baseCount, setBaseCount } = useContext(MatchContext);
    const hitSound = effectSound(hitES);
    let setTimeoutHitter;

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
        setBoxOnHitter(false);
        setRunnerAnim();
        setTimeoutHitter = setTimeout(() => setBoxOnHitter(true), 2500);

        if (baseCount + 1 >= 4) return; // 득점처리
        setBaseCount(baseCount + 1);
    };

    useEffect(() => {
        return () => {
            clearTimeout(setTimeoutHitter);
            setBoxOnHitter(true);
        }
    }, []);

    return (
        <GameButtonsWrap>
            <button onClick={handleSwingClick} disabled={!boxOnHitter}>SWING</button>
            <button disabled={!boxOnHitter}>WAIT</button>
        </GameButtonsWrap>
    )
}

export default GameButtons
