export const ballCountReducer = (ballCount, { type, payload }) => {
    switch (type) {
        case 'INIT_BALLCOUNT':
            return payload;

        case 'UPDATA_BALLCOUNT':
            return payload;

        default:
            break;
    }
}

export const playerListReducer = (playerList, { type, payload }) => {
    switch (type) {
        case 'INIT_PLAYERLIST':
            return payload;

        case 'UPDATA_PLAYERLIST':
            return payload;

        default:
            break;
    }
}