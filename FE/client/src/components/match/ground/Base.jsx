import React, { useContext } from 'react'
import Hitter from './Hitter';
import { MatchContext } from '../../../store/MatchStore';
import effectSound from '../../../utils/effectSound';
import hitterES from '../../../audios/hitterES.mp3';

const Base = () => {
    const { runners, boxOnHitter } = useContext(MatchContext);
    const hitterSound = effectSound(hitterES);
    if (boxOnHitter) hitterSound.play();

    return (
        <>
            {boxOnHitter && <Hitter />}
            {runners}
        </>
    )
}

export default Base
