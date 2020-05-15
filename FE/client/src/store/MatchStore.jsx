import React, { useState, useReducer, createContext, useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import URL from '../constants/url';
import { ballCountReducer, playerListReducer } from '../reducer/MatchReducer';

import * as mock from '../mock/mockData';

export const MatchContext = createContext();

const MatchStore = ({ children, teamId, gameId }) => {
    const [playerList, playerListDispatch] = useReducer(playerListReducer, {});

    // 임시 mock 데이터
    const [baseCount, setBaseCount] = useState(mock.baseCount.base);
    const [ballCount, ballCountDispatch] = useReducer(ballCountReducer, {});
    const initBallCount = (initData) => ballCountDispatch({ type: 'INIT_BALLCOUNT', payload: initData });

    const mockData = {
        matchLog: mock.matchLog,
        chance: mock.chance,
        scoreBoard: mock.scoreBoard,
        currentPlayer: mock.currentPlayer,
        detailScore: mock.detailScore,
    }

    useEffect(() => {
        initBallCount(mock.ballCount);
    }, []);

    return (
        <MatchContext.Provider
            value={{
                ...mockData, teamId, gameId,
                playerList, playerListDispatch,
                ballCount, ballCountDispatch,
                baseCount, setBaseCount,
            }}>
            {children}
        </MatchContext.Provider >
    )
}

export default MatchStore
