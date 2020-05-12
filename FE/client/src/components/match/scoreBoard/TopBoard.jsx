import React, { useContext } from 'react'
import styled from 'styled-components';
import { MatchContext } from '../../../store/MatchStore';

const TopBoardWrap = styled.div`
    display : flex;
    height : 75%;
    & .team-info {
    width : 32%;
    display : flex;
    flex-direction : column;
        & .team-score {
            display : flex;
            align-items : center;
            justify-content : center;
            font-size : 50px;
            height : 70%;
            &.board-away {
                background-color : #f00;
            }
            &.board-home {
                background-color : #00f;
            }
        }
        & .team-name {
            font-size : 22px;
            height : 30%;
            line-height: 33.75px;
            letter-spacing: -0.07em;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &.board-away {
                background-color : #ff8585;
            }
            &.board-home {
                background-color : #8b8bff;
            }
        }
    }
    & .inning-info {
        position : relative;
        background-color : #000;
        width : 36%;
        & .base-info {
            position : absolute;
            width : 25px;
            height : 25px;
            background-color : #5a5a5a;
            transform : rotate(45deg);
            &.first-base {
                top : 35px;
                right : 20px;
            }
            &.second-base {
                top : 15px;
                right : 50%;
                transform : translateX(50%) rotate(45deg);
            }
            &.third-base {
                top : 35px;
                left : 20px;
            }
            &.fill-base {
                background-color : #ff0;
            }
        }
        & .inning-info-text {
            width : 100px;
            position : absolute;
            bottom : 10px;
            left : 50%;
            transform : translateX(-50%);
            font-size : 22px;
        }
    }
`;

const TopBoard = () => {
    const { baseCount, chance, scoreBoard } = useContext(MatchContext);

    return (
        <TopBoardWrap>
            <div className='team-info'>
                <div className='team-score board-away'>{scoreBoard.away.score}</div>
                <div className='team-name board-away'>{scoreBoard.away.teamName}</div>
            </div>
            <div className='team-info'>
                <div className='team-score board-home'>{scoreBoard.home.score}</div>
                <div className='team-name board-home'>{scoreBoard.home.teamName}</div>
            </div>
            <div className='inning-info'>
                <div className={`base-info first-base ${baseCount >= 1 && 'fill-base'}`} />
                <div className={`base-info second-base ${baseCount >= 2 && 'fill-base'}`} />
                <div className={`base-info third-base ${baseCount >= 3 && 'fill-base'}`} />
                <div className='inning-info-text'>{chance.inning}회{chance.top_bottom === 'top' ? '초' : '말'}</div>
            </div>
        </TopBoardWrap>
    )
}

export default TopBoard
