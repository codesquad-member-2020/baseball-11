import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MatchWrap = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const ScoreBoard = styled.div`
    border : 1px solid #5a5a5a;
    position : absolute;
    top : 30px;
    left : 30px;
    width : 300px;
    height : 150px;
    background-color : #ccc;
    text-align : center;
    & .top-board {
        display : flex;
        height : 75%;
        & .team-info {
        color : #fff; 
        width : 30%;
        display : flex;
        flex-direction : column;
            & .score {
                display : flex;
                align-items : center;
                justify-content : center;
                font-size : 50px;
                height : 70%;
                &.away {
                    background-color : #f00;
                }
                &.home {
                    background-color : #00f;
                }
            }
            & .team-name {
                display : flex;
                align-items : center;
                justify-content : center;
                font-size : 25px;
                height : 30%;
                &.away {
                    background-color : #ff8585;
                }
                &.home {
                    background-color : #8b8bff;
                }
            }
        }
        & .inning-info {
            position : relative;
            background-color : #000;
            width : 40%;
            & .base-info {
                position : absolute;
                width : 25px;
                height : 25px;
                background-color : #5a5a5a;
                transform : rotate(45deg);
                &.first-base {
                    top : 35px;
                    right : 25px;
                }
                &.second-base {
                    top : 15px;
                    left : 50%;
                    transform : translateX(-50%) rotate(45deg);
                }
                &.third-base {
                    top : 35px;
                    left : 25px;
                }
            }
            & .inning-info-text {
                color : #fff;
                position : absolute;
                bottom : 10px;
                left : 50%;
                transform : translateX(-50%);
                font-size : 25px;
            }
        }
    }
`;

const Match = () => {
    const { id } = useParams();
    return (
        <MatchWrap>
            <ScoreBoard>
                <div className='top-board'>
                    <div className='team-info'>
                        <div className='score away'>0</div>
                        <div className='team-name away'>키움</div>
                    </div>
                    <div className='team-info'>
                        <div className='score home'>0</div>
                        <div className='team-name home'>롯데</div>
                    </div>
                    <div className='inning-info'>
                        <div className='base-info first-base' />
                        <div className='base-info second-base' />
                        <div className='base-info third-base' />
                        <div className='inning-info-text'>1회초</div>
                    </div>
                </div>
                <div className='bottom-board'>
                    <div className='ball-count'>

                    </div>
                    <div className='pitches-count'>

                    </div>
                </div>
            </ScoreBoard>
        </MatchWrap>
    )
}

export default Match
