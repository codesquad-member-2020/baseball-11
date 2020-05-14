export const ballCountReducer = (ballCount, { type, payload }) => {
    switch (type) {
        case 'INIT_BALLCOUNT':
            return payload;

        default:
            break;
    }
}

export const playerListReducer = (playerList, { type, payload }) => {
    switch (type) {
        case 'UPDATA_PLAYERLIST':
            return Object.assign({ ...playerList }, { ...payload });

        default:
            break;
    }
}