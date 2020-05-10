import React, { useContext } from 'react'
import Hitter from './Hitter';
import { BaseBallContext } from '../../../store/BaseballStore';
import effectSound from '../../../utils/effectSound';
import hitterES from '../../../audios/hitterES.mp3';

const Base = () => {
    const { runners, hitterBox } = useContext(BaseBallContext);
    const hitterSound = effectSound(hitterES);
    if (hitterBox) hitterSound.play();

    return (
        <>
            {hitterBox && <Hitter />}
            {runners}
        </>
    )
}

export default Base
