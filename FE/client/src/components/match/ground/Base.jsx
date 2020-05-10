import React, { useContext } from 'react'
import Hitter from './Hitter';
import { BaseBallContext } from '../../../store/BaseballStore';

const Base = () => {
    const { runners, hitterBox } = useContext(BaseBallContext);

    return (
        <>
            {hitterBox && <Hitter />}
            {runners}
        </>
    )
}

export default Base
