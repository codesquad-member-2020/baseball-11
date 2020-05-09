import React, { useReducer, createContext } from 'react'

import * as mock from '../mock/mock';

export const BaseBallContext = createContext();

const BaseballStore = (props) => {
    const teamData = mock.teamData;
    const matchLog = mock.matchLog;
    const ballCount = mock.ballCount;
    const baseCount = mock.baseCount;
    const chance = mock.chance;
    const scoreBoard = mock.scoreBoard;
    const currentPlayer = mock.currentPlayer;

    const value = {
        teamData,
        matchLog,
        ballCount,
        baseCount,
        chance,
        scoreBoard,
        currentPlayer,
    }

    return (
        <BaseBallContext.Provider {...{ value }}>
            {props.children}
        </BaseBallContext.Provider>
    )
}

export default BaseballStore
