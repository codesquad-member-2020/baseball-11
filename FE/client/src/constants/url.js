const URL = {
    BASE: process.env.REACT_APP_BASE_URL,
    GAMES: process.env.REACT_APP_GAMES_API,
    SELECT_TEAM: process.env.REACT_APP_SELECT_TEAM_API,
    SELECT_GAME: process.env.REACT_APP_SELECT_GAEM_API,
    PLAYER_LIST: (gameId) => process.env.REACT_APP_PLAYER_LIST_API.replace('{id}', gameId),
}

export default URL;