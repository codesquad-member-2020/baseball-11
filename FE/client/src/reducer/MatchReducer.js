export const ballCountReducer = (ballCount, { type, payload }) => {
    switch (type) {
        case 'INIT_BALLCOUNT':
            return payload;

        case 'BALL':
            let ball = ballCount.ball;
            ball++;
            if (ball >= 4) ball = 0;
            return { ...ballCount, ball };

        case 'STRIKE':
            let strike = ballCount.strike;
            strike++;
            if (strike >= 3) strike = 0;
            return { ...ballCount, strike };

        case 'OUT':
            let out = ballCount.out;
            out++;
            if (out >= 3) out = 0;
            return { ...ballCount, out };

        default:
            break;
    }
}

export const playerListReducer = (playerList, { type, payload }) => {
    switch (type) {
        case 'INIT_PLAYERLIST':
            return payload;

        case 'UPDATA_PLAYERLIST':
            return { ...playerList, ...payload };

        default:
            break;
    }
}