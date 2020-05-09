import React, { useReducer, createContext } from 'react'

import * as mock from '../mock/mockData';

export const BaseBallContext = createContext();

const BaseballStore = (props) => {
    // 임시 mock 데이터
    const mockData = {
        teamData: mock.teamData,
        matchLog: mock.matchLog,
        ballCount: mock.ballCount,
        baseCount: mock.baseCount,
        chance: mock.chance,
        scoreBoard: mock.scoreBoard,
        currentPlayer: mock.currentPlayer,
    }

    return (
        <BaseBallContext.Provider value={{ ...mockData }}>
            {props.children}
        </BaseBallContext.Provider >
    )
}

export default BaseballStore
