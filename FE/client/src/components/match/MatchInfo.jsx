import React from 'react'
import styled from 'styled-components';

const ScoreBoard = styled.div`
    outline : 1px solid #5a5a5a;
    position : absolute;
    top : 30px;
    left : 30px;
    width : 300px;
    height : 150px;
    color : #fff;
    text-align : center;
    & .top-board {
        display : flex;
        height : 75%;
        & .team-info {
        width : 32%;
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
            }
            & .inning-info-text {
                width : 100px;
                position : absolute;
                bottom : 10px;
                left : 50%;
                transform : translateX(-50%);
                font-size : 25px;
            }
        }
    }
    & .bottom-board {
        display : flex;
        height : 25%;
        font-size : 22px;
        & .ball-count {
            width : 64%;
            background-color : #000;
            display : flex;
            justify-content : space-around;
            align-items : center;
            & .b-count-text {
                margin-right : 3px;
            }
            & .b-count {
                width : 15px;
                height : 15px;
                display : inline-block;
                background-color : #5a5a5a;
                border-radius : 50%;
                margin-left : 1.5px;
            }
        }
        & .pitches-count {
            width : 36%;
            background-color : #5a5a5a;
            display : flex;
            justify-content : center;
            align-items : center;
            & .p-count {
                margin-left : 10px;
            }
        }
    }
`;


const MatchInfo = () => {
    return (
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
                    <div>
                        <span className='b-count-text'>B</span>
                        <span className='b-count' />
                        <span className='b-count' />
                        <span className='b-count' />
                    </div>
                    <div>
                        <span className='b-count-text'>S</span>
                        <span className='b-count' />
                        <span className='b-count' />
                    </div>
                    <div>
                        <span className='b-count-text'>O</span>
                        <span className='b-count' />
                        <span className='b-count' />
                    </div>
                </div>
                <div className='pitches-count'>
                    <div>⚾</div>
                    <div className='p-count'>0</div>
                </div>
            </div>
        </ScoreBoard>
    )
}

export default MatchInfo
