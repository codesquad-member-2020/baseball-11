import React from 'react'
import styled from 'styled-components';

import { teamData } from '../../mock/mock';

const SelectBoxWrap = styled.div`
    width : 100%;
    height : 100%;
`;

const SelectBoxInner = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #00000099;
`;

const Title = styled.div`
    color : #fff;
    font-size : 50px;
    font-weight : 600;
    margin-bottom : 80px;;
`;

const StateText = styled.div`
    color : #fff;
    font-size : 20px;
    font-weight : 600;
    margin-bottom : 20px;
`;

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
        font-size : 25px;
        cursor: pointer;
        &:hover {
            color : #f00;
        }
        &.away {
            width : 50%;
        }
        &.home {
            width : 50%;
        }
    }
    & .vs {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
        font-size : 18px;
    }
`;

const SelectBox = styled.div`
    width : 400px;
    height : 300px;
    overflow : auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Select = () => {
    const gameList = teamData.map(game => {
        return (
            <Game key={game.id}>
                <div className='team-name away'>
                    <span className=''>{game.away}</span>
                </div>
                <span className='vs'>VS</span>
                <div className='team-name home'>
                    <span className=''>{game.home}</span>
                </div>
            </Game>
        )
    });

    return (
        <SelectBoxWrap>
            <SelectBoxInner>
                <Title>신나는 야구게임 ^.^</Title>
                <StateText>참가할 게임을 선택하세요!</StateText>
                <SelectBox>
                    {gameList}
                </SelectBox>
            </SelectBoxInner>
        </SelectBoxWrap>
    )
}

export default Select
