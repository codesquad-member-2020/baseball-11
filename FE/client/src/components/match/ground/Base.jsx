import React from 'react'
import Hitter from './Hitter';
import effectSound from '../../../utils/effectSound';
import hitterES from '../../../audios/hitterES.mp3';

const Base = ({ boxOnHitter, runners }) => {
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
