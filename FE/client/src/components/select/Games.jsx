import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import URL from '../../constants/url';
import dataFetch from '../../utils/dataFetch';

const Game = styled.div`
    position : relative;
    width : 100%;
    height : 80px;
    background-color : #ffffff80;
    border-radius : 10px;
    margin-bottom : 10px;
    text-align : center;
    font-weight : 600;
    display : flex;
    justify-content : space-around;
    align-items : center;
    & .team-name {
        font-size : 22px;
        width : 50%;
        color : #000;
        text-decoration : none;
        cursor: pointer;
        &:hover {
            color : #f00;
        }
    }
    & .game-id {
        position : absolute;
        top : 10%;
        left : 50%;
        transform : translateX(-50%);
        font-size : 15px;
    }
    & .vs {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translateX(-50%);
        font-size : 18px;
    }
`;

const Games = ({ gameData }) => {
    const { teamData } = gameData;
    const { BASE, SELECT_TEAM } = URL;
    const [selectGame, setSelectGame] = useState({ validTeam: false, gameNumber: null });
    const history = useHistory();

    const handleSelectTeam = async (teamId, gameId) => {
        const url = BASE + SELECT_TEAM + teamId;
        const option = {
            method: 'POST',
            credentials: 'include',
            headers: {
                Cookie: process.env.REACT_APP_TEMP_COOKIE
            }
        }
        const isSelected = await dataFetch(url, option);

        if (!isSelected) return; // 이미 선택 된 팀 처리
        history.push('/select');
        setSelectGame(Object.assign({ ...selectGame }, { validTeam: true, gameNumber: gameId }))
    }

    const games = teamData.map(game => {
        return (
            <Game key={game.gameNumber}>
                <div data-team-id={game.away.id} className='team-name' onClick={() => handleSelectTeam(game.away.id, game.gameNumber)}>
                    {game.away.name}
                </div>
                <span className='game-id'>GAME {game.gameNumber}</span>
                <span className='vs'>VS</span>
                <div data-team-id={game.home.id} className='team-name' onClick={() => handleSelectTeam(game.home.id, game.gameNumber)}>
                    {game.home.name}
                </div>
            </Game>
        )
    });

    return (
        <>
            {selectGame.validTeam && <Redirect to={`/match/${selectGame.gameNumber}`} />}
            {games}
        </>
    )
}

export default Games
