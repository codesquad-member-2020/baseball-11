import React from 'react'
import styled from 'styled-components';

const TopBoardWrap = styled.div`
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
`;

const TopBoard = () => {
    return (
        <TopBoardWrap>
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
        </TopBoardWrap>
    )
}

export default TopBoard
