import React, { useState, useContext } from 'react'
import Hitter from './Hitter';
import { BaseBallContext } from '../../../store/BaseballStore';

const Base = () => {
    const { baseCount } = useContext(BaseBallContext)

    const [base, setBase] = useState(baseCount.base);
    const [hitter, setHitter] = useState(true);
    const [point, setPoint] = useState(false);

    const handleSwingClick = () => {
        base + 1 >= 4 ? setPoint(true) : setBase(base + 1);
        setHitter(false);
        setTimeout(() => { setHitter(true) }, 2500);
    }

    const advanceBase = () => {
        setBase(base + 1);
    }

    let hitters = [];
    for (let i = 0; i < base; i++) {
        hitters.push(<Hitter key={i} initBase={0} {...{ advanceBase }} />)
    }

    return (
        <>
            {hitter && <Hitter />}
            {hitters}
        </>
    )
}

export default Base
