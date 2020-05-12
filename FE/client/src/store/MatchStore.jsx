import React, { useState, useReducer, createContext } from 'react'

import * as mock from '../mock/mockData';

export const MatchContext = createContext();

const MatchStore = ({ children }) => {
    // 임시 mock 데이터
    const [baseCount, setBaseCount] = useState(mock.baseCount.base);

    const mockData = {
        matchLog: mock.matchLog,
        ballCount: mock.ballCount,
        chance: mock.chance,
        scoreBoard: mock.scoreBoard,
        currentPlayer: mock.currentPlayer,
        detailScore: mock.detailScore,
        playerList: mock.playerList,
    }

    return (
        <MatchContext.Provider
            value={{
                ...mockData,
                baseCount, setBaseCount,
            }}>
            {children}
        </MatchContext.Provider >
    )
}

export default MatchStore
