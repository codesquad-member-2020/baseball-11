import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import URL from '../../constants/url';
import dataFetch from '../../utils/dataFetch';
import effectSound from '../../utils/effectSound';
import readyES from '../../audios/readyES.mp3';

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

const Games = ({ gameData, setReady, setStateText }) => {
    const { teamData } = gameData;
    const { BASE, SELECT_TEAM, SELECT_GAME } = URL;
    const readySound = effectSound(readyES);
    const history = useHistory();
    const intervalId = useRef();

    const fetchOption = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Cookie: process.env.REACT_APP_TEMP_COOKIE
        }
    }

    const handleSelectTeam = async (teamId, gameId) => {
        const teamUrl = BASE + SELECT_TEAM + teamId;
        const gameUrl = BASE + SELECT_GAME + gameId;
        const isSelected = await dataFetch(teamUrl, fetchOption);
        if (!isSelected) return setStateText('이미 선택된 팀입니다. 다른 팀을 선택해주세요!');
        setStateText('상대를 기다리고 있습니다...');
        setReady(true);

        intervalId.current = setInterval(async () => {
            const isStart = await dataFetch(gameUrl, fetchOption);
            if (!isStart) return;
            clearInterval(intervalId.current);
            setStateText('GET READY FOR THE NEXT BATTLE');
            readySound.play();
            setTimeout(() => {
                history.push(`/match/${teamId}/${gameId}`);
            }, 4000);
        }, 2000);
    }

    useEffect(() => {
        return () => clearInterval(intervalId.current);
    }, []);

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
            {games}
        </>
    )
}

export default Games
