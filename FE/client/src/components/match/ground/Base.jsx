import React, { useContext } from 'react'
import Hitter from './Hitter';
import { BaseBallContext } from '../../../store/BaseballStore';

const Base = () => {
    const { base } = useContext(BaseBallContext);

    let hitters = [];
    for (let i = 0; i < base; i++) {
        hitters.push(<Hitter key={i} base={i} />)
    }

    return (
        <>
            {<Hitter />}
            {hitters}
        </>
    )
}

export default Base
