import React, { useState, useContext, createContext } from 'react'
import useFetch from '../hooks/useFetch';
import URL from '../constants/url';
import { BaseballContext } from './BaseballStore';

import * as mock from '../mock/mockData';

export const MatchContext = createContext();

const MatchStore = ({ children }) => {
    const { teamId, gameId } = useContext(BaseballContext);
    const { BASE, PLAYER_LIST } = URL;
    const [playerList, setPlayerList] = useState(null);
    useFetch(setPlayerList, BASE + PLAYER_LIST(gameId));

    // 임시 mock 데이터
    const [baseCount, setBaseCount] = useState(mock.baseCount.base);

    const mockData = {
        matchLog: mock.matchLog,
        ballCount: mock.ballCount,
        chance: mock.chance,
        scoreBoard: mock.scoreBoard,
        currentPlayer: mock.currentPlayer,
        detailScore: mock.detailScore,
    }

    const value = {
        playerList, setPlayerList,
    }

    return (
        <MatchContext.Provider
            value={{
                ...mockData,
                baseCount, setBaseCount,
                ...value,
            }}>
            {children}
        </MatchContext.Provider >
    )
}

export default MatchStore
