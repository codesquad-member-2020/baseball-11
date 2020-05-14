import React, { useState, createContext } from 'react'

export const BaseballContext = createContext();

const BaseballStore = ({ children }) => {
    const [teamId, setTeamId] = useState(null);
    const [gameId, setGameId] = useState(null);

    const value = {
        teamId, setTeamId,
        gameId, setGameId,
    }

    return (
        <BaseballContext.Provider
            value={{
                ...value,
            }}>
            {children}
        </BaseballContext.Provider >
    )
}

export default BaseballStore
