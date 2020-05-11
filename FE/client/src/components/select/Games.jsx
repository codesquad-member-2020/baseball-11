import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MatchContext } from '../../store/MatchStore';

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

const Games = () => {
    const { teamData } = useContext(MatchContext);

    const games = teamData.map(game => {
        return (
            <Game key={game.id}>
                <Link to={`/match/${game.id}`} className='team-name away'>
                    <span>{game.away.teamName}</span>
                </Link>
                <span className='game-id'>GAME {game.id}</span>
                <span className='vs'>VS</span>
                <Link to={`/match/${game.id}`} className='team-name home'>
                    <span>{game.home.teamName}</span>
                </Link>
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
